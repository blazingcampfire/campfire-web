import React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { gradient } from "@/components/Gradient";
import { useEffect } from "react";

const communityGuidelines = () => {
  return (
    <AnimatePresence>
      <div className="min-h-[100vh] sm:min-h-screen w-screen flex flex-col relative bg-peach text-[#f5f7f9] font-inter overflow-hidden items-center space-y-8">
        <svg
          style={{ filter: "contrast(125%) brightness(110%)" }}
          className="fixed z-[1] w-full h-full opacity-[35%]"
        >
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency=".7"
              numOctaves="3"
              stitchTiles="stitch"
            ></feTurbulence>
            <feColorMatrix type="saturate" values="0"></feColorMatrix>
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)"></rect>
        </svg>
        <main className="flex flex-col items-center justify-start h-[90%] static md:fixed w-screen overflow-hidden grid-rows-[1fr_repeat(3,auto)_1fr] z-[100] pt-[30px] pb-[320px] px-4 md:px-20 md:py-0">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.95,
              ease: [0.165, 0.84, 0.44, 1],
            }}
            className="relative md:ml-[-10px] mt-[18px] text-center text-[40px] mb-6 md:mt-[25px] md:mb-[37px] font-bold lg:text-[60px] text-[#f5f7f9] tracking-[-2px] z-[100] "
          >
            <span className="mb-5">community guidelines:</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.95,
              ease: [0.165, 0.84, 0.44, 1],
            }}
            className="text-center font-semibold"
          >
            at <span className="font-extrabold">campfire’s</span> core, we value
            the safety, respect, and positive experience of every member in our
            community. our dedicated team is committed to upholding these
            principles by enforcing our community guidelines. if you come across
            content that you believe violates the integrity of our mission, we
            ask that you aid us in enforcing these guidelines by reporting
            content. thank you for being a part of our community and making it a
            better place for everyone.
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.95,
              ease: [0.165, 0.84, 0.44, 1],
            }}
            className="relative md:ml-[-10px] mt-[18px] mb-6 text-center text-[#f5f7f9] md:mt-[25px] md:mb-[37px] font-bold text-[40px] lg:text-[60px] leading-[0.9] tracking-[-2px] z-[100]"
          >
            {/*eslint-disable-next-line react/no-unescaped-entities*/}
            <span className="text-center">respect others' privacy.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.95,
              ease: [0.165, 0.84, 0.44, 1],
            }}
            className="text-center font-semibold"
          >
            do not post personal information about anybody without their consent
            whether it is in the form of feed posts, profile pictures, comments,
            etc.
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.95,
              ease: [0.165, 0.84, 0.44, 1],
            }}
            className="relative md:ml-[-10px] mt-[18px] mb-6 text-center md:mt-[25px] md:mb-[37px] font-bold text-[40px] lg:text-[60px] text-[#f5f7f9] leading-[0.9] tracking-[-2px] z-[100]"
          >
            <span className="text-center mb-5">no bullying.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.95,
              ease: [0.165, 0.84, 0.44, 1],
            }}
            className="text-center font-semibold"
          >
            bullying, harassment, or any form of harmful behavior will not be
            tolerated. treat others as you would like to be treated. if you
            wouldn’t do/say something to someone in person, do not make{" "}
            <span className="font-extrabold">campfire</span> an outlet for such
            actions/comments.
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.95,
              ease: [0.165, 0.84, 0.44, 1],
            }}
            className="relative md:ml-[-10px] mt-[18px] mb-6 md:mt-[25px] md:mb-[37px] font-bold text-[40px] lg:text-[60px] text-[#f5f7f9] leading-[0.9] tracking-[-2px] z-[100]"
          >
            <span className="mb-5">have fun!</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.95,
              ease: [0.165, 0.84, 0.44, 1],
            }}
            className="text-center font-semibold"
          >
            contribute to your university’s campfire by participating and
            interacting with the app and
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.95,
              ease: [0.165, 0.84, 0.44, 1],
            }}
            className="text-[#f5f7f9] font-extrabold"
          >
            feeding the fire!
          </motion.p>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default communityGuidelines;
