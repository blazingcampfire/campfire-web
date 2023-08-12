import React from 'react'
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { gradient } from "@/components/Gradient";
import { useEffect } from "react";

const communityGuidelines = () => {
  return (
    <AnimatePresence>
      <div className="min-h-[100vh] sm:min-h-screen w-screen flex flex-col relative bg-[#F2F3F5] font-inter overflow-hidden items-center">
        <main className="flex flex-col items-center justify-start h-[90%] static md:fixed w-screen overflow-hidden grid-rows-[1fr_repeat(3,auto)_1fr] z-[100] pt-[30px] pb-[320px] px-4 md:px-20 md:py-0">
        <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.95,
              ease: [0.165, 0.84, 0.44, 1],
            }}
            className="relative md:ml-[-10px] mt-[18px] md:mt-[25px] md:mb-[37px] font-bold text-[16vw] md:text-[60px] text-[#1E2B3A] leading-[0.9] tracking-[-2px] z-[100]"
          >
          <span className="">Community Guidelines</span>
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
          At Campfire’s core, we value the safety, respect, and positive experience of every member in our community. Our dedicated team is committed to upholding these principles by enforcing our community guidelines. We ask that if you come across content that you believe violates the integrity of our mission, we ask that you aid us in enforcing these guidelines by reporting content. Thank you for being a part of our community and making it a better place for everyone.

          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.95,
              ease: [0.165, 0.84, 0.44, 1],
            }}
            className="relative md:ml-[-10px] mt-[18px] md:mt-[25px] md:mb-[37px] font-bold text-[16vw] md:text-[60px] text-[#1E2B3A] leading-[0.9] tracking-[-2px] z-[100]"
          >
          <span className="">Respect Others' Privacy</span>
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
            Do not post personal information about anybody without their consent whether it is in the form of feed posts, profile pictures, comments, etc.
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.95,
              ease: [0.165, 0.84, 0.44, 1],
            }}
            className="relative md:ml-[-10px] mt-[18px] md:mt-[25px] md:mb-[37px] font-bold text-[16vw] md:text-[60px] text-[#1E2B3A] leading-[0.9] tracking-[-2px] z-[100]"
          >
          <span className="">No Bullying</span>
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
            Bullying, harassment, or any form of harmful behavior will not be tolerated. Treat others as you would like to be treated. If you wouldn’t do/say something to someone in person, do not make Campfire an outlet for such actions/comments.
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.95,
              ease: [0.165, 0.84, 0.44, 1],
            }}
            className="relative md:ml-[-10px] mt-[18px] md:mt-[25px] md:mb-[37px] font-bold text-[16vw] md:text-[60px] text-[#1E2B3A] leading-[0.9] tracking-[-2px] z-[100]"
          >
          <span className="">Have Fun</span>
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
            Contribute to your university’s campfire by participating and interacting with the app and
        </motion.p>
        <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.95,
              ease: [0.165, 0.84, 0.44, 1],
            }} 
            className='text-peach font-extrabold'>
            feeding the fire! 
        </motion.p>
        </main>
        
      </div>
    </AnimatePresence>
  )
}

export default communityGuidelines