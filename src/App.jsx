import Logo from "./assets/Logo.svg";
import Line_1 from "./assets/Line.svg";
import Line_2 from "./assets/Line_2.svg";
import SuperToroid from "./assets/SuperToroid.svg";
import Photo1 from "./assets/1.jpg";
import Photo2 from "./assets/2.jpg";
import Photo3 from "./assets/3.jpg";
import Photo4 from "./assets/4.jpg";
import Photo5 from "./assets/5.jpg";
import Photo6 from "./assets/6.jpg";
import Photo7 from "./assets/7.jpg";
import Photo8 from "./assets/8.jpg";
import Photo9 from "./assets/9.jpg";
import Photo10 from "./assets/10.jpg";
import Photo11 from "./assets/11.jpg";
import Photo12 from "./assets/12.jpg";
import NFT1 from "./assets/nft/1.png";
import NFT2 from "./assets/nft/2.png";
import NFT3 from "./assets/nft/3.png";
import NFT4 from "./assets/nft/4.png";
import NFT5 from "./assets/nft/5.png";
import NFT6 from "./assets/nft/6.png";
import NFT7 from "./assets/nft/7.png";
import NFT8 from "./assets/nft/8.png";
import NFT9 from "./assets/nft/9.png";
import NFT10 from "./assets/nft/10.png";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Arrow from "./assets/arrow.svg";

import Number1 from "./assets/Number1.svg";
import Number2 from "./assets/Number2.svg";
import Number3 from "./assets/Number3.svg";
import Number4 from "./assets/Number4.svg";
import Number5 from "./assets/Number5.svg";
import Number6 from "./assets/Number6.svg";

import luckywheel from "./assets/luckywheel.png";
import Discord from "./assets/discord.svg";
import X from "./assets/x.svg";
import Telegram from "./assets/telegram.svg";

const imageList = [
  Number1,
  Number2,
  Number3,
  Number4,
  Number5,
  Number6,
  Photo1,
  Photo2,
  Photo3,
  Photo4,
  Photo5,
  Photo6,
  Photo7,
  Photo8,
  Photo9,
  Photo10,
  Photo11,
  Photo12,
  NFT1,
  NFT2,
  NFT3,
  NFT4,
  NFT5,
  NFT6,
  NFT7,
  NFT8,
  NFT9,
  NFT10,
];

const Header = () => {
  const scrollToWhyArtDAO = () => {
    const targetSection = document.getElementById("whyartdao");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToOurNFT = () => {
    const targetSection = document.getElementById("ournft");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToRoadmap = () => {
    const targetSection = document.getElementById("roadmap");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToLuckyWheel = () => {
    const targetSection = document.getElementById("luckywheel");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContactUs = () => {
    const targetSection = document.getElementById("contactus");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="w-full max-w-[1792px] mx-auto px-4 lg:px-24 relative z-10">
      <div className="flex gap-20">
        <img src={Logo} className="h-8 lg:h-16" />
        <div className="hidden md:flex gap-4 text-custom-white">
          <button
            onClick={scrollToWhyArtDAO}
            className="hover:opacity-55 cursor-pointer"
          >
            Why ArtDAO?
          </button>
          <button
            onClick={scrollToOurNFT}
            className="hover:opacity-55 cursor-pointer"
          >
            Our NFT
          </button>
          <button
            onClick={scrollToRoadmap}
            className="hover:opacity-55 cursor-pointer"
          >
            Roadmap
          </button>
          <button
            onClick={scrollToLuckyWheel}
            className="hover:opacity-55 cursor-pointer"
          >
            Lucky wheel
          </button>
          <button
            onClick={scrollToContactUs}
            className="hover:opacity-55 cursor-pointer"
          >
            Contact partner
          </button>
        </div>
      </div>
    </div>
  );
};

const BackGround = () => {
  return (
    <>
      <div className="fixed top-0 left-0 flex justify-between w-full h-screen z-0 pointer-events-none">
        {Array.from({ length: 10 }, (_, index) => (
          <div
            key={index}
            className="border-r-[1px] border-l-[1px] border-[#D9FFDE]/5 w-11 h-full"
          />
        ))}
      </div>
      <div className="fixed top-0 left-0 flex flex-col justify-between w-full h-screen z-0 pointer-events-none">
        {Array.from({ length: 10 }, (_, index) => (
          <div
            key={index}
            className="border-t-[1px] border-b-[1px] border-[#D9FFDE]/5 w-full h-6"
          />
        ))}
      </div>
    </>
  );
};

const Marquee = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div
        className="inline-block text-white text-xl font-bold"
        animate={{ x: [0, -1748] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 55,
          ease: "linear",
        }}
        style={{ display: "flex", gap: 4 }}
      >
        <img
          src={Photo1}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={Photo2}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={Photo3}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={Photo4}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={Photo5}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={Photo6}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />

        <img
          src={Photo1}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={Photo2}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={Photo3}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={Photo4}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={Photo5}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={Photo6}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={Photo1}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={Photo2}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={Photo3}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={Photo4}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={Photo5}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={Photo6}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
      </motion.div>
    </div>
  );
};

const Marquee_2 = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div
        className="inline-block text-white text-xl font-bold"
        animate={{ x: [0, 1748] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 55,
          ease: "linear",
        }}
        style={{ display: "flex", gap: 4, justifyContent: "end" }}
      >
        <img
          src={Photo7}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={Photo8}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={Photo9}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={Photo10}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={Photo11}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={Photo12}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={Photo7}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={Photo8}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={Photo9}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={Photo10}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={Photo11}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={Photo12}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={Photo7}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={Photo8}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={Photo9}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={Photo10}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={Photo11}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={Photo12}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
      </motion.div>
    </div>
  );
};

const Marquee_3 = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div
        className="inline-block text-white text-xl font-bold"
        animate={{ x: [0, -1748] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 55,
          ease: "linear",
        }}
        style={{ display: "flex", gap: 4 }}
      >
        <img
          src={NFT1}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={NFT2}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={NFT3}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={NFT4}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={NFT5}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={NFT6}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={NFT7}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={NFT1}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={NFT2}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={NFT3}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={NFT4}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={NFT5}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={NFT6}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={NFT7}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={NFT1}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={NFT2}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={NFT3}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={NFT4}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={NFT5}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={NFT6}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
        <img
          src={NFT7}
          className="aspect-square w-44 lg:w-72 rounded-xl -skew-x-12"
        />
      </motion.div>
    </div>
  );
};

const HeroSection = () => {
  const scrollToWhyArtDAO = () => {
    const targetSection = document.getElementById("whyartdao");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContactUs = () => {
    const targetSection = document.getElementById("contactus");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="mt-8 text-custom-white h-screen relative z-0">
      <div className="absolute left-0 top-0 w-screen h-screen -translate-y-[88px] lg:-translate-y-[120px]">
        <div
          style={{
            background:
              "linear-gradient(to right, rgba(0, 0, 0, 0.95) 25%, rgba(0, 0, 0, 0.55) 75%, rgba(0, 0, 0, 0.2) 100%)",
          }}
          className="absolute z-10 h-full w-full"
        />
        <Marquee />
        <div className="mt-1" />
        <Marquee_2 />
        <div className="mt-1" />
        <Marquee_3 />
      </div>

      <div className="max-w-[1792px] mx-auto px-4 lg:px-24 flex justify-start items-center relative z-10 h-full -translate-y-[88px] lg:-translate-y-[120px]">
        <div className="w-full lg:w-1/3">
          <div className="font-bold text-2xl lg:text-6xl break-words relative w-fit">
            <span className="ml-12">
              🎨ArtDAO: <br />
              <span className="text-xl lg:text-4xl ml-12">
                Where Art Meets DAO
              </span>
            </span>

            <img
              src={Line_1}
              className="absolute left-0 top-[-12px] h-12 lg:h-auto"
              alt="bg"
            />
            <img
              src={Line_2}
              className="absolute right-[-48px] bottom-[-12px] h-12 lg:h-auto"
              alt="bg"
            />
          </div>

          <div className="text-sm lg:text-base opacity-50 leading-10 mt-10 relative pl-8">
            <div className="h-6 w-[2px] bg-theme/70 absolute left-0 top-2" />
            <div className="h-6 w-[4px] bg-theme/80 absolute left-[6px] top-2" />
            <div className="h-6 w-[8px] bg-theme absolute left-[14px] top-2" />
            We’re excited to introduce ArtDAO, an innovative hub uniting art and
            blockchain technology to ignite creativity across the DAO space.
          </div>

          <div className="flex gap-8 mt-8">
            <button
              onClick={scrollToWhyArtDAO}
              className="px-6 py-2 text-center bg-theme  rounded-tr-2xl rounded-bl-2xl cursor-pointer"
            >
              🌟 Why ArtDAO?
            </button>
            <button
              onClick={scrollToContactUs}
              className="px-6 py-2arn text-center border-theme border-2 rounded-tr-2xl rounded-bl-2xl cursor-pointer"
            >
              Contact Partner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CarouselSection = () => {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="relative">
      <div className="absolute top-0 left-[25%] h-1/3 aspect-video brightness-40 blur-[96px] z-0 pointer-events-none">
        <div className="relative h-full w-full bg-red">
          <div className="h-full w-full bg-[#DF6F89] -rotate-z-[45deg] -translate-y-28 translate-24 absolute top-0 z-[0]" />
          <div className="h-2/3 w-full bg-[#46A7CE] rotate-z-[45deg] -translate-y-[18px] -translate-[126px] absolute top-0 z-[1]" />
          <div
            style={{ clipPath: "polygon(50% 100%, 0 0, 100% 0)" }}
            className="h-full w-full bg-[#D76FEF] absolute z-[2] -translate-y-40"
          />
        </div>
      </div>

      <div className="absolute flex justify-center mx-auto gap-4 w-full perspective-near brightness-15 top-0 z-10 pointer-events-none">
        <div className="flex-1  rotate-y-12">
          <img
            src={Photo1}
            alt="carousel"
            style={{ imageRendering: "crisp-edges" }}
          />
        </div>
        <div className="flex-1 -translate-z-14 rotate-y-3">
          <img
            src={Photo2}
            alt="carousel"
            className="object-cover"
            style={{ imageRendering: "crisp-edges" }}
          />
        </div>
        <div className="flex-1 -translate-z-14 -rotate-y-3">
          <img
            src={Photo3}
            alt="carousel"
            style={{ imageRendering: "crisp-edges" }}
          />
        </div>
        <div className="flex-1 -rotate-y-12">
          <img
            src={Photo4}
            alt="carousel"
            style={{ imageRendering: "crisp-edges" }}
          />
        </div>
      </div>

      <div
        id="whyartdao"
        className="relative z-10 max-w-[1392px] mx-auto px-4 lg:px-24 text-custom-white flex flex-col lg:flex-row justify-between w-full gap-16"
      >
        <div className="max-w-[500px]">
          <h2 className="text-3xl lg:text-5xl font-bold flex-shrink-0">
            Why #ArtDAO
          </h2>
          <div className="mt-6 text-custom-white/50 text-sm lg:text-base">
            Join Us in Shaping the Future ArtDAO envisions a vibrant new era
            where art and technology converge, inspiring communities and
            unlocking untapped value. Stay tuned for our upcoming launch and
            prepare to experience the transformative power of art in the DAO
            realm!
          </div>
        </div>

        <ul className="grid grid-cols-1 lg:grid-cols-2 w-full gap-10">
          <motion.li
            key={0}
            className="inline-flex flex-col gap-4 text-[#D76FEF] font-medium text-sm lg:text-lg relative w-fit pl-4 lg:pl-0"
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <Plus className="absolute top-[-4px] left-[-12px] w-6 h-6 lg:w-12 lg:h-12 text-custom-white -translate-x-1/6 -translate-y-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2" />
            1. Bridging Creativity & DAOs
            <ul className="mt-2 list-disc flex flex-col gap-2 text-custom-white text-sm">
              <li>
                Many DAOs lack striking visuals, limiting community engagement.
              </li>
              <li>
                ArtDAO fills this gap by providing distinctive artworks, powered
                by AI + human artistry.
              </li>
            </ul>
          </motion.li>
          <motion.li
            key={1}
            className="inline-flex flex-col gap-4 text-[#D76FEF] font-medium text-sm lg:text-lg relative pl-4 lg:pl-0"
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            <Plus className="absolute top-[-4px] left-[-12px] w-6 h-6 lg:w-12 lg:h-12 text-custom-white -translate-x-1/6 -translate-y-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2" />
            2. Transparent Ownership & Revenue
            <ul className="mt-2 list-disc flex flex-col gap-2 text-custom-white text-sm">
              <li>
                NFT Integration: Every piece is provably rare, ensuring
                long-term value potential.
              </li>
              <li>
                Fair Compensation: Artists and contributors benefit from an
                equitable revenue-sharing framework.
              </li>
            </ul>
          </motion.li>
          <motion.li
            key={2}
            className="inline-flex flex-col gap-4 text-[#D76FEF] font-medium text-sm lg:text-lg relative pl-4 lg:pl-0"
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            <Plus className="absolute top-[-4px] left-[-12px] w-6 h-6 lg:w-12 lg:h-12 text-custom-white -translate-x-1/6 -translate-y-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2" />
            3. Serving the DAO Ecosystem{" "}
            <ul className="mt-2 list-disc flex flex-col gap-2 text-custom-white text-sm">
              <li>
                Art Hub: We supply fresh, original designs to partner DAOs,
                elevating brand identity.
              </li>
              <li>
                Community-Building: Our platform fosters collaboration, feedback
                loops, and a vibrant “art culture” within DAOs.
              </li>
            </ul>
          </motion.li>
          <motion.li
            key={3}
            className="inline-flex flex-col gap-4 text-[#D76FEF] font-medium text-sm lg:text-lg relative pl-4 lg:pl-0"
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
          >
            <Plus className="absolute top-[-4px] left-[-12px] w-6 h-6 lg:w-12 lg:h-12 text-custom-white -translate-x-1/6 -translate-y-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2" />
            4. Growth Potential{" "}
            <ul className="mt-2 list-disc flex flex-col gap-2 text-custom-white text-sm">
              <li>
                Future Partnerships: We aim to partner with major DAO, gaming,
                and entertainment projects.
              </li>
              <li>
                Investor Appeal: Holding our NFTs could offer significant upside
                as our network expands.
              </li>
            </ul>
          </motion.li>
        </ul>
      </div>
    </div>
  );
};

const NFTSection = () => {
  const nftImages = [
    Photo1,
    Photo2,
    Photo3,
    Photo4,
    Photo5,
    Photo6,
    Photo7,
    Photo8,
    Photo9,
    Photo10,
    Photo11,
    Photo12,
  ];

  const [shuffledImages, setShuffledImages] = useState([...nftImages]);

  useEffect(() => {
    const shuffleArray = (array) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[randomIndex]] = [
          shuffled[randomIndex],
          shuffled[i],
        ];
      }
      return shuffled;
    };

    const interval = setInterval(() => {
      setShuffledImages((prevImages) => shuffleArray(prevImages));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="max-w-[1392px] mx-auto px-6 lg:px-24 mt-48 relative"
      id="ournft"
    >
      <div className="absolute left-[-20%] top-0 z-0">
        <img alt="bg" src={SuperToroid} />
      </div>

      <div className="absolute bottom-0 left-[25%] h-1/3 aspect-video brightness-40 blur-[96px] z-0 pointer-events-none">
        <div className="relative h-full w-full bg-red">
          <div className="h-full w-full bg-[#DF6F89] -rotate-z-[45deg] -translate-y-28 translate-24 absolute top-0 z-[0]" />
          <div className="h-2/3 w-full bg-[#46A7CE] rotate-z-[45deg] -translate-y-[18px] -translate-[126px] absolute top-0 z-[1]" />
          <div
            style={{ clipPath: "polygon(50% 100%, 0 0, 100% 0)" }}
            className="h-full w-full bg-[#D76FEF] absolute z-[2] -translate-y-40"
          />
        </div>
      </div>

      <div className="w-full flex flex-col items-center text-custom-white relative z-10 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold">Our NFT</h2>
        <div className="text-custom-white/60 mt-4">
          NFT Integration: Every piece is provably rare, ensuring long-term
          value potential.
        </div>
        <div className="text-custom-white/40">
          Fair Compensation: Artists and contributors benefit from an equitable
          revenue-sharing framework.
        </div>
        <div className="text-custom-white/20">Serving the DAO Ecosystem</div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 mt-8 gap-4 relative overflow-hidden">
        <AnimatePresence>
          {shuffledImages.map((img, index) => (
            <motion.div
              key={img} // Sử dụng giá trị duy nhất như URL hoặc ID
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img
                src={img}
                loading="lazy"
                className="rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

const RoadMapSection = () => {
  return (
    <div
      className="max-w-[1392px] mx-auto px-4 lg:px-24 mt-64 relative"
      id="roadmap"
    >
      <div
        className="absolute right-0 top-0 blur-[96px] aspect-square brightness-75 translate-x-2/3"
        style={{
          width: "800px",

          background:
            "radial-gradient(circle, rgba(95, 66, 176, 1) 0%, rgba(95, 66, 176, 0) 100%)",
        }}
      />

      <div
        className="absolute left-0 top-2/3 blur-[96px] aspect-square brightness-75 -translate-x-1/2"
        style={{
          width: "800px",

          background:
            "radial-gradient(circle, rgba(95, 66, 176, 1) 0%, rgba(95, 66, 176, 0) 100%)",
        }}
      />

      <div className="w-full flex flex-col items-center text-custom-white overflow-hidden">
        <h2 className="text-3xl lg:text-5xl font-bold">Roadmap</h2>

        <div className="mt-24 lg:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-y-26 lg:gap-y-0">
          <motion.div
            key={1}
            initial={{ opacity: 0, y: 150 }} // Bắt đầu ẩn và trôi xuống
            whileInView={{ opacity: 1, y: 0 }} // Hiện lên và trôi về vị trí ban đầu
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              amount: 1,
            }}
            className="p-4 relative"
            style={{
              background:
                "linear-gradient(280deg, #AA0BAA -1.46%, #FC71F7 100%)",
            }}
          >
            <img
              src={NFT8}
              className="absolute w-40 right-0 top-0 -translate-y-1/2"
            />
            <img src={Number1} className="w-20 aspect-square" />
            <div className="text-lg">Fundraising & SOL Ecosystem Entry</div>
            <div className="flex gap-2 text-sm mt-2">
              <img src={Arrow} alt="icon" />
              <span>Target Raise: 360 SOL</span>
            </div>
            <div className="flex gap-2 items-baseline text-sm mt-2">
              <img src={Arrow} alt="icon" />
              <span>
                Objective: Acquire strategic NFTs on Solana, plus launch
                ArtDAO’s own NFT collection
              </span>
            </div>
            <ul className="text-sm mt-2 list-disc ">
              <div className="flex gap-2">
                <img src={Arrow} alt="icon" />
                <span>Key Milestones:</span>
              </div>

              <li className="ml-6 mt-2">
                Community Whitelist & Sale (early supporters get special
                NFTs/roles)
              </li>
              <li className="ml-6">Research & Acquire top Solana NFT assets</li>
              <li className="ml-6">
                Deploy an ArtDAO PFP collection to establish brand identity
              </li>
            </ul>
          </motion.div>

          <motion.div
            key={2}
            initial={{ opacity: 0, y: 150 }} // Bắt đầu ẩn và trôi xuống
            whileInView={{ opacity: 1, y: 0 }} // Hiện lên và trôi về vị trí ban đầu
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              amount: 1,
            }}
            className="hidden lg:flex lg:col-span-2 items-center justify-start"
          >
            <div className="w-[75%] h-1 bg-[#FC71F7]"></div>
            <div className="h-1/2 w-1 bg-[#FC71F7] self-end relative -translate-x-1"></div>
          </motion.div>

          <motion.div
            key={3}
            initial={{ opacity: 0, y: 150 }} // Bắt đầu ẩn và trôi xuống
            whileInView={{ opacity: 1, y: 0 }} // Hiện lên và trôi về vị trí ban đầu
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              amount: 1,
            }}
            className="hidden lg:flex lg:col-span-2 items-center justify-end"
          >
            <div className="h-1/2 w-1 bg-[#FC71F7] self-end relative translate-x-1"></div>
            <div className="w-[75%] h-1 bg-[#FC71F7]"></div>
          </motion.div>
          <motion.div
            key={3}
            initial={{ opacity: 0, y: 150 }} // Bắt đầu ẩn và trôi xuống
            whileInView={{ opacity: 1, y: 0 }} // Hiện lên và trôi về vị trí ban đầu
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              amount: 1,
            }}
            className="p-4 relative"
            style={{
              background:
                "linear-gradient(280deg, #AA0BAA -1.46%, #FC71F7 100%)",
            }}
          >
            <img
              src={NFT9}
              className="absolute w-40 right-0 top-0 -translate-y-1/2"
            />
            <img src={Number2} className="w-20 aspect-square" />
            <div className="text-lg">
              DAOsFun Media Support & NFT Collaboration
            </div>
            <div className="flex gap-2 text-sm mt-2 items-baseline">
              <img src={Arrow} alt="icon" />
              <span>
                Objective: Provide media kits to DAOs on DAOsFun and co-invest
                in their NFT lines when feasible.
              </span>
            </div>
            <ul className="text-sm mt-2 list-disc">
              <div className="flex gap-2 items-baseline">
                <img src={Arrow} alt="icon" />
                <span>Key Milestones:</span>
              </div>

              <li className="ml-6 mt-2">
                Media Kits & Branding for partner DAOs
              </li>
              <li className="ml-6">Co-investment in promising NFT proposals</li>
              <li className="ml-6">
                Join Twitter Spaces/Discord AMAs to highlight collaborative NFT
                roadmaps
              </li>
            </ul>
          </motion.div>

          <motion.div
            key={4}
            initial={{ opacity: 0, y: 150 }} // Bắt đầu ẩn và trôi xuống
            whileInView={{ opacity: 1, y: 0 }} // Hiện lên và trôi về vị trí ban đầu
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              amount: 1,
            }}
            className="p-4 relative"
            style={{
              background:
                "linear-gradient(280deg, #AA0BAA -1.46%, #FC71F7 100%)",
            }}
          >
            <img
              src={NFT10}
              className="absolute w-40 right-0 top-0 -translate-y-1/2"
            />
            <img src={Number3} className="w-20 aspect-square" />
            <div className="text-lg">Artist Hub Development</div>
            <div className="flex gap-2 text-sm mt-2 items-baseline">
              <img src={Arrow} alt="icon" />
              <span>
                Objective: Form an Artist Hub for professional artwork and NFT
                projects, solidifying ArtDAO’s creative cloud
              </span>
            </div>
            <ul className="text-sm mt-2 list-disc ">
              <div className="flex gap-2">
                <img src={Arrow} alt="icon" />
                <span>Key Milestones:</span>
              </div>

              <li className="ml-6 mt-2">
                Onboarding talented illustrators, AI creators, and digital
                artists
              </li>
              <li className="ml-6">
                Exclusive artist-led NFT drops under the ArtDAO brand
              </li>
              <li className="ml-6">
                Workshops & mentorship programs to educate and sustain emerging
                crypto artists
              </li>
            </ul>
          </motion.div>
          <motion.div
            key={5}
            initial={{ opacity: 0, y: 150 }} // Bắt đầu ẩn và trôi xuống
            whileInView={{ opacity: 1, y: 0 }} // Hiện lên và trôi về vị trí ban đầu
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              amount: 1,
            }}
            className="hidden lg:flex lg:col-span-2 items-center"
          >
            <div className="w-[75%] h-1 bg-[#FC71F7]"></div>
            <div className="h-1/2 w-1 bg-[#FC71F7] self-end relative -translate-x-1"></div>
          </motion.div>

          <motion.div
            key={6}
            initial={{ opacity: 0, y: 150 }} // Bắt đầu ẩn và trôi xuống
            whileInView={{ opacity: 1, y: 0 }} // Hiện lên và trôi về vị trí ban đầu
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              amount: 1,
            }}
            className="hidden lg:flex lg:col-span-2 items-center justify-end"
          >
            <div className="h-1/2 w-1 bg-[#FC71F7] self-end relative translate-x-1"></div>
            <div className="w-[75%] h-1 bg-[#FC71F7]"></div>
          </motion.div>
          <motion.div
            key={7}
            initial={{ opacity: 0, y: 150 }} // Bắt đầu ẩn và trôi xuống
            whileInView={{ opacity: 1, y: 0 }} // Hiện lên và trôi về vị trí ban đầu
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              amount: 1,
            }}
            className="p-4 relative"
            style={{
              background:
                "linear-gradient(280deg, #AA0BAA -1.46%, #FC71F7 100%)",
            }}
          >
            <img
              src={NFT1}
              className="absolute w-40 right-0 top-0 -translate-y-1/2"
            />
            <img src={Number4} className="w-20 aspect-square" />
            <div className="text-lg">Investments in AI, RWA, and Gaming</div>
            <div className="flex gap-2 text-sm mt-2 items-baseline">
              <img src={Arrow} alt="icon" />
              <span>
                Objective: Expand ArtDAO’s scope to support projects in AI, Real
                World Assets (RWA), and GAME development
              </span>
            </div>
            <ul className="text-sm mt-2 list-disc">
              <div className="flex gap-2 items-baseline">
                <img src={Arrow} alt="icon" />
                <span>Key Milestones:</span>
              </div>

              <li className="ml-6 mt-2">
                RWA on Blockchain: Partner with initiatives focused on
                tokenizing real-world artworks and collectibles, bridging
                physical art into digital ownership on-chain
              </li>
              <li className="ml-6">
                AI Integrations: Invest in advanced AI-driven platforms that
                enhance art creation, curation, or automation in the NFT space{" "}
              </li>
              <li className="ml-6">
                Gaming Collaborations: Explore NFT-based gaming collaborations,
                bringing innovative gameplay and in-game assets tied to ArtDAO’s
                ecosystem
              </li>
            </ul>
          </motion.div>

          <motion.div
            key={8}
            initial={{ opacity: 0, y: 150 }} // Bắt đầu ẩn và trôi xuống
            whileInView={{ opacity: 1, y: 0 }} // Hiện lên và trôi về vị trí ban đầu
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              amount: 1,
            }}
            className="p-4 relative"
            style={{
              background:
                "linear-gradient(280deg, #AA0BAA -1.46%, #FC71F7 100%)",
            }}
          >
            <img
              src={NFT2}
              className="absolute w-40 right-0 top-0 -translate-y-1/2"
            />
            <img src={Number5} className="w-20 aspect-square" />
            <div className="text-lg">Gamification & User Engagement</div>

            <div className="flex gap-2 items-baseline text-sm mt-2">
              <img src={Arrow} alt="icon" />
              <span>
                Objective: Implement interactive website mini-games where users
                can spend tokens for NFT, coin, or WL from DAOsFun projects
              </span>
            </div>
            <ul className="text-sm mt-2 list-disc ">
              <div className="flex gap-2">
                <img src={Arrow} alt="icon" />
                <span>Key Milestones:</span>
              </div>

              <li className="ml-6 mt-2">
                Design user-friendly mini-games to reward loyal supporters with
                NFT-based perks
              </li>
              <li className="ml-6">
                Integrate ArtDAO tokens for in-game utility (purchases, staking,
                prize pools)
              </li>
              <li className="ml-6">
                Offer cross-DAO partnership rewards—whitelists or exclusive NFTs
                from partner DAOs
              </li>
            </ul>
          </motion.div>
          <motion.div
            key={9}
            initial={{ opacity: 0, y: 150 }} // Bắt đầu ẩn và trôi xuống
            whileInView={{ opacity: 1, y: 0 }} // Hiện lên và trôi về vị trí ban đầu
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              amount: 1,
            }}
            className="hidden lg:flex lg:col-span-2 items-center"
          >
            <div className="w-[75%] h-1 bg-[#FC71F7]"></div>
            <div className="h-1/2 w-1 bg-[#FC71F7] self-end relative -translate-x-1"></div>
          </motion.div>

          <motion.div
            key={10}
            initial={{ opacity: 0, y: 150 }} // Bắt đầu ẩn và trôi xuống
            whileInView={{ opacity: 1, y: 0 }} // Hiện lên và trôi về vị trí ban đầu
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              amount: 1,
            }}
            className="hidden lg:block lg:col-span-2"
          ></motion.div>
          <motion.div
            key={11}
            initial={{ opacity: 0, y: 150 }} // Bắt đầu ẩn và trôi xuống
            whileInView={{ opacity: 1, y: 0 }} // Hiện lên và trôi về vị trí ban đầu
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              amount: 1,
            }}
            className="p-4 relative"
            style={{
              background:
                "linear-gradient(280deg, #AA0BAA -1.46%, #FC71F7 100%)",
            }}
          >
            <img
              src={NFT3}
              className="absolute w-40 right-0 top-0 -translate-y-1/2"
            />
            <img src={Number6} className="w-20 aspect-square" />
            <div className="text-lg">Expansion & Long-Term Sustainability</div>
            <div className="flex gap-2 text-sm mt-2 items-baseline">
              <img src={Arrow} alt="icon" />
              <span>
                Position ArtDAO as a leading hub for art tokenization across
                multiple chains, fostering a wide-reaching community
              </span>
            </div>
            <ul className="text-sm mt-2 list-disc">
              <div className="flex gap-2 items-baseline">
                <img src={Arrow} alt="icon" />
                <span>Key Milestones:</span>
              </div>

              <li className="ml-6 mt-2">
                Multi-Chain Deployments (Ethereum, Arbitrum, others)
              </li>
              <li className="ml-6">
                On-Chain Governance to empower community-driven decision-making
              </li>
              <li className="ml-6">
                Incubation & Grants for new artists and DAOs, accelerating Web3
                innovation
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const LuckyWheel = () => {
  return (
    <div
      id="luckywheel"
      className="flex justify-center mt-24 items-center overflow-hidden py-10 relative shadow-theme shadow-2xl"
    >
      <motion.div
        animate={{
          x: [0, "-50%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
        className="absolute z-10 flex -rotate-90 right-1/3 top-0 justify-end"
      >
        <div
          style={{
            WebkitTextFillColor: "transparent",
            WebkitTextStrokeWidth: "2px",
            WebkitTextStrokeColor: "#fc71f7",
            color: "#fc71f7",
          }}
          className="text-transparent text-6xl font-bold uppercase"
        >
          Lucky
        </div>
        <div
          style={{
            WebkitTextFillColor: "transparent",
            WebkitTextStrokeWidth: "2px",
            WebkitTextStrokeColor: "#fc71f7",
            color: "#fc71f7",
          }}
          className="text-transparent text-6xl font-bold uppercase"
        >
          Lucky
        </div>
        <div
          style={{
            WebkitTextFillColor: "transparent",
            WebkitTextStrokeWidth: "2px",
            WebkitTextStrokeColor: "#fc71f7",
            color: "#fc71f7",
          }}
          className="text-transparent text-6xl font-bold uppercase"
        >
          Lucky
        </div>
        <div
          style={{
            WebkitTextFillColor: "transparent",
            WebkitTextStrokeWidth: "2px",
            WebkitTextStrokeColor: "#fc71f7",
            color: "#fc71f7",
          }}
          className="text-transparent text-6xl font-bold uppercase"
        >
          Lucky
        </div>
        <div
          style={{
            WebkitTextFillColor: "transparent",
            WebkitTextStrokeWidth: "2px",
            WebkitTextStrokeColor: "#fc71f7",
            color: "#fc71f7",
          }}
          className="text-transparent text-6xl font-bold uppercase"
        >
          Lucky
        </div>
        <div
          style={{
            WebkitTextFillColor: "transparent",
            WebkitTextStrokeWidth: "2px",
            WebkitTextStrokeColor: "#fc71f7",
            color: "#fc71f7",
          }}
          className="text-transparent text-6xl font-bold uppercase"
        >
          Lucky
        </div>
        <div
          style={{
            WebkitTextFillColor: "transparent",
            WebkitTextStrokeWidth: "2px",
            WebkitTextStrokeColor: "#fc71f7",
            color: "#fc71f7",
          }}
          className="text-transparent text-6xl font-bold uppercase"
        >
          Lucky
        </div>
        <div
          style={{
            WebkitTextFillColor: "transparent",
            WebkitTextStrokeWidth: "2px",
            WebkitTextStrokeColor: "#fc71f7",
            color: "#fc71f7",
          }}
          className="text-transparent text-6xl font-bold uppercase"
        >
          Lucky
        </div>
      </motion.div>

      <div className="absolute top-1/2 left-1/2 text-3xl lg:text-5xl z-10 -translate-x-1/2 -translate-y-1/2 font-bold text-custom-white">
        <div>Lucky Wheel</div>
        <div className="text-xl lg:text-3xl text-center mt-2 text-theme">
          Coming Soon
        </div>
      </div>
      <img
        src={luckywheel}
        className="w-2/3 lg:w-auto lg:h-[800px] aspect-square blur-xl brightness-50 animate-spin relative z-0"
      />
    </div>
  );
};

const ContactUS = () => {
  return (
    <>
      <div
        id="contactus"
        className="max-w-[1392px] mx-auto px-4 lg:px-24 mt-48 flex flex-col lg:flex-row gap-20"
      >
        <h2 className="flex-1 text-3xl lg:text-5xl text-custom-white font-bold">
          Contact Partner
          <div className="text-sm font-normal text-custom-white/50 mt-4">
            If you are interested in exploring partnership opportunities,
            collaborations, or any business-related inquiries, we would love to
            hear from you. Please get in touch using the form below
          </div>
          <div className="flex gap-4 mt-4">
            <a
              href="https://discord.gg/artistdao"
              target="_blank"
              className="cursor-pointer"
            >
              {<img src={Discord} alt="discord" className="w-8 h-8" />}
            </a>
            <a
              href="https://x.com/artistdaofun"
              target="_blank"
              className="cursor-pointer"
            >
              {<img src={X} alt="discord" className="w-8 h-8" />}
            </a>
            <a
              href="https://t.me/Artdaodotfun"
              target="_blank"
              className="cursor-pointer"
            >
              {<img src={Telegram} alt="discord" className="w-8 h-8" />}
            </a>
          </div>
        </h2>
        <div className="flex-1 ">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 text-custom-white placeholder-custom-white/75 bg-black rounded-full border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <input
                type="text"
                placeholder="Company, title"
                className="w-full p-3 text-custom-white placeholder-custom-white/75 bg-black rounded-full border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 text-custom-white placeholder-custom-white/75 bg-black rounded-full border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <input
                type="text"
                placeholder="Phone number"
                className="w-full p-3 text-custom-white placeholder-custom-white/75 bg-black rounded-full border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <textarea
              placeholder="Message..."
              className="w-full min-h-32 p-3 text-custom-white placeholder-custom-white/75 bg-black rounded-2xl border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
            ></textarea>
            <div className="mt-6 flex gap-4">
              <button
                type="submit"
                className="px-8 py-3 text-white bg-purple-600 hover:bg-purple-700 rounded-full transition-all"
              >
                Send
              </button>
              <button
                type="button"
                className="px-8 py-3 text-custom-white bg-transparent border border-gray-500 hover:border-custom-white rounded-full transition-all"
              >
                Contact via email
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Kiểm tra trạng thái tải ảnh
    const loadImages = async () => {
      const promises = imageList.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve(src);
          img.onerror = () => reject(src);
        });
      });

      try {
        await Promise.all(promises); // Đợi tất cả ảnh được tải
        setIsLoaded(true); // Tất cả ảnh đã tải xong
      } catch (error) {
        console.error("Có lỗi khi tải ảnh:", error);
      }
    };

    loadImages();
  }, []);

  return (
    <div className="min-h-screen h-full w-full bg-main-bg font-bevietnampro relative overflow-x-hidden">
      <>
        <div
          className={`${
            !isLoaded ? "opacity-100" : "opacity-0"
          } duration-300 fixed pointer-events-none h-screen w-screen`}
        >
          <div className="h-screen w-screen flex flex-col gap-10 items-center justify-center">
            <img loading="eager" src={Logo} />
            <div className="flex space-x-2">
              {[0, 1, 2].map((dot, index) => (
                <motion.div
                  key={dot}
                  className="w-4 h-4 bg-custom-white rounded-full"
                  initial={{ y: 0 }}
                  animate={{
                    y: [-10, 0],
                  }}
                  transition={{
                    repeat: Infinity, // Lặp lại vô hạn
                    repeatType: "mirror", // Quay lại khi kết thúc
                    duration: 0.4, // Thời gian cho mỗi vòng lặp
                    delay: dot * 0.2, // Thêm độ trễ cho từng chấm
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div
          className={`${isLoaded ? "opacity-100" : "opacity-0"} duration-300`}
        >
          <BackGround />
          <div className="relative z-10 py-6">
            <Header />
            <HeroSection />
            <CarouselSection />
            <NFTSection />
            <RoadMapSection />
            <LuckyWheel />
            <ContactUS />
          </div>
        </div>
      </>
    </div>
  );
}

export default App;
