import fs from "node:fs/promises";
import express from "express";

// Constants
const isProduction = process.env.NODE_ENV === "production";
const port = process.env.PORT || 5173;
const base = process.env.BASE || "/";

// Cached production assets
const templateHtml = isProduction
  ? await fs.readFile("./dist/client/index.html", "utf-8")
  : "";

// Create http server
const app = express();

// Add Vite hoặc các middleware dành cho production
/** @type {import('vite').ViteDevServer | undefined} */
let vite;
if (!isProduction) {
  const { createServer } = await import("vite");
  vite = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
    base,
  });
  app.use(vite.middlewares);
} else {
  const compression = (await import("compression")).default;
  const sirv = (await import("sirv")).default;
  app.use(compression());
  app.use(base, sirv("./dist/client", { extensions: [] }));
}

// Serve HTML với middleware catch-all
app.use("*", async (req, res) => {
  try {
    // Lấy URL đã bỏ đi base (nếu có)
    const url = req.originalUrl.replace(base, "");

    // Lấy query parameter 'id' từ URL
    // Dùng một base tạm (ví dụ http://localhost) để parse query string
    const parsedUrl = new URL(req.originalUrl, "http://localhost");
    const id = parsedUrl.searchParams.get("id");

    /** @type {string} */
    let template;
    /** @type {import('./src/entry-server.js').render} */
    let render;
    if (!isProduction) {
      // Trong development, luôn luôn đọc lại template để hỗ trợ HMR
      template = await fs.readFile("./index.html", "utf-8");
      template = await vite.transformIndexHtml(url, template);
      render = (await vite.ssrLoadModule("/src/entry-server.jsx")).render;
    } else {
      template = templateHtml;
      render = (await import("./dist/server/entry-server.js")).render;
    }

    // Render ứng dụng (đối với React, renderToString trả về chuỗi HTML, bạn có thể đồng bộ hoặc async tùy cấu hình)
    const rendered = render(url);

    // Nếu có query parameter id, xây dựng các thẻ meta Twitter Card
    let twitterMeta = "";
    if (id) {
      twitterMeta = `
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="Art Certificate">
        <meta name="twitter:description" content="Check out your certificate">
        <meta name="twitter:image" content="https://jzzswotezxkfxkwottgk.supabase.co/storage/v1/object/public/certificates/certificates/${id}.png">
      `;
    }

    // Kết hợp các thẻ meta (nếu có) với phần head được render (nếu entry-server có trả về head)
    const appHead = twitterMeta + (rendered.head ?? "");

    // Thay thế placeholder trong template
    const html = template
      .replace(`<!--app-head-->`, appHead)
      .replace(`<!--app-html-->`, rendered.html ?? "");

    res.status(200).set({ "Content-Type": "text/html" }).send(html);
  } catch (e) {
    vite?.ssrFixStacktrace(e);
    console.error(e.stack);
    res.status(500).end(e.stack);
  }
});

// Start http server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
