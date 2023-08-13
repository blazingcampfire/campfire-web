"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { gradient } from "@/components/Gradient";
import { useEffect } from "react";
import Logo from "@/app/logo";

export default function Home() {
  useEffect(() => {
    gradient.initGradient("#gradient-canvas");
  }, []);
  const iOSUrl = "https://apps.apple.com/us/app/expo-go/id982107779";
  return (
    <AnimatePresence>
      <div className="min-h-[100vh] sm:min-h-screen w-screen flex flex-col relative bg-peach font-inter overflow-hidden items-center">
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
        <main className="flex flex-col items-center justify-center h-[90%] static md:fixed w-screen overflow-hidden grid-rows-[1fr_repeat(3,auto)_1fr] z-[100] pt-[30px] pb-[320px] px-4 md:px-20 md:py-0">
        <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.15,
          duration: 0.95,
          ease: [0.165, 0.84, 0.44, 1],
        }}
        className="flex flex-col items-center">
        <Logo/>
        <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.95,
              ease: [0.165, 0.84, 0.44, 1],
            }}
            className="relative md:ml-[-10px] -mt-7 md:mb-[10px] text-[50px] font-extrabold md:text-[90px] text-[#1E2B3A] leading-[0.9] tracking-[-2px] z-[100]"
          >
          <span className="text-[#f5f7f9]">campfire</span>
          </motion.h1>
        </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.95,
              ease: [0.165, 0.84, 0.44, 1],
            }}
            className="relative md:ml-[-10px] text-[50px] mt-5 md:mb-[37px] font-extrabold md:text-[60px] text-[#f5f7f9] font-inter text-bg-[#f5f7f9] leading-[0.9] tracking-[-2px] z-[100]"
          >
            feed the fire.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.95,
              ease: [0.165, 0.84, 0.44, 1],
            }}
            className="flex flex-row justify-center z-20 mx-0 mb-0 mt-8 md:mt-0 md:mb-[35px] max-w-2xl md:space-x-8"
          >
            <div className="w-1/2 pr-6">
              <h2 className="flex items-center font-semibold md:text-[1em] text-[#f5f7f9]">
                unique
              </h2>
              <p className="text-[10px] md:text-[14px] text-leftleading-[20px] text-[#f5f7f9] font-normal">
                {/*eslint-disable-next-line react/no-unescaped-entities*/}
                from our design, to our product, to our team, there's nothing quite like us out there.
              </p>
            </div>
            <div className="w-1/2">
              <h2 className="flex items-center font-semibold text-[1em] text-[#f5f7f9] ">
                community
              </h2>
              <p className="text-[10px] md:text-[14px] leading-[20px] text-[#f5f7f9] font-normal">
              gather round and share your stories on the hottest new app on campus!
              </p>
            </div>
          </motion.div>

          <div className="flex gap-[15px] mt-8 md:mt-0 flex-col md:flex-row">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.55,
                duration: 0.55,
                ease: [0.075, 0.82, 0.965, 1],
              }}
            >
              <Link
                href="mailto: support@campfireco.app"
                target="_blank"
                className="group rounded-xl border border-black  pl-2 min-w-[180px] pr-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#f5f7f9] text-[#1E2B3A] hover:[linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #0D2247] no-underline flex gap-x-2  active:scale-95 scale-100 duration-75"
                style={{
                  boxShadow: "0 1px 1px #0c192714, 0 1px 3px #0c192724",  }}
              >
                <span className="w-5 h-5 rounded-full bg-[#407BBF] flex items-center justify-center">
                  <svg
                    className="w-[16px] h-[16px] text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.75 7.75C4.75 6.64543 5.64543 5.75 6.75 5.75H17.25C18.3546 5.75 19.25 6.64543 19.25 7.75V16.25C19.25 17.3546 18.3546 18.25 17.25 18.25H6.75C5.64543 18.25 4.75 17.3546 4.75 16.25V7.75Z"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5.5 6.5L12 12.25L18.5 6.5"
                    ></path>
                  </svg>
                </span>
                support
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.65,
                duration: 0.55,
                ease: [0.075, 0.82, 0.965, 1],
              }}
            >
              <Link
                href="https://burnt-sternum-fd5.notion.site/Terms-of-Service-4b592b52c33e44f29b0669d55a236e9e?pvs=4"
                className="group border border-black  rounded-xl px-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#f5f7f9] text-[#1E2B3A] no-underline active:scale-95 scale-100 duration-75"
                style={{
                  boxShadow: "0 1px 1px #0c192714, 0 1px 3px #0c192724",
                }}
              >
                <span className="mr-2"> terms of service </span>
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.75 6.75L19.25 12L13.75 17.25"
                    stroke="#1E2B3A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 12H4.75"
                    stroke="#1E2B3A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.65,
                duration: 0.55,
                ease: [0.075, 0.82, 0.965, 1],
              }}
            >
              <Link
                href="https://burnt-sternum-fd5.notion.site/Privacy-Policy-3b8b7d05e438423daf0040181f2d98cf?pvs=4"
                className="group border border-black rounded-xl px-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#f5f7f9] text-[#1E2B3A] no-underline active:scale-95 scale-100 duration-75"
                style={{
                  boxShadow: "0 1px 1px #0c192714, 0 1px 3px #0c192724",
                }}
              >
                <span className="mr-2"> privacy policy </span>
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.75 6.75L19.25 12L13.75 17.25"
                    stroke="#1E2B3A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 12H4.75"
                    stroke="#1E2B3A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.65,
                duration: 0.55,
                ease: [0.075, 0.82, 0.965, 1],
              }}
            >
              <Link
                href="/community-guidelines"
                className="group border border-black  rounded-xl px-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#f5f7f9] text-[#1E2B3A] no-underline active:scale-95 scale-100 duration-75"
                style={{
                  boxShadow: "0 1px 1px #0c192714, 0 1px 3px #0c192724",
                }}
              >
                <span className="mr-2"> community guidelines </span>
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.75 6.75L19.25 12L13.75 17.25"
                    stroke="#1E2B3A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 12H4.75"
                    stroke="#1E2B3A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.95,
              ease: [0.165, 0.84, 0.44, 1],
            }}
            className="">
            <Link
                href="https://www.apple.com/app-store/"
                className=""
                style={{
                  boxShadow: "0 1px 1px #0c192714, 0 1px 3px #0c192724",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="250" width="250" viewBox="-17.949615 -10.000025 155.56333 60.00015"><path d="M110.1348.0001H9.5347c-.3667 0-.729 0-1.0948.002-.3061.002-.6098.0078-.9189.0127a13.2148 13.2148 0 00-2.0039.1767 6.665 6.665 0 00-1.9009.627 6.4378 6.4378 0 00-1.6186 1.1787 6.2584 6.2584 0 00-1.1782 1.621 6.6012 6.6012 0 00-.625 1.9034 12.993 12.993 0 00-.1792 2.002c-.0093.3066-.0103.6142-.0152.9209v23.1142c.0049.3105.0059.6113.0152.922a12.9923 12.9923 0 00.1792 2.0018 6.5876 6.5876 0 00.625 1.9043 6.2078 6.2078 0 001.1782 1.6143 6.2744 6.2744 0 001.6186 1.1787 6.7008 6.7008 0 001.9009.6308 13.4551 13.4551 0 002.0039.1768c.309.0068.6128.0107.919.0107.3657.002.728.002 1.0947.002h100.6c.3595 0 .7247 0 1.084-.002.3048 0 .6173-.0039.922-.0107a13.279 13.279 0 002-.1768 6.8043 6.8043 0 001.9082-.6308 6.2774 6.2774 0 001.6172-1.1787 6.3948 6.3948 0 001.1816-1.6143 6.6041 6.6041 0 00.619-1.9043 13.5064 13.5064 0 00.1857-2.0019c.004-.3106.004-.6114.004-.9219.008-.3633.008-.7246.008-1.0938V9.5363c0-.3663 0-.7295-.008-1.0918 0-.3067 0-.6143-.004-.921a13.5071 13.5071 0 00-.1856-2.002 6.6177 6.6177 0 00-.6191-1.9032 6.4662 6.4662 0 00-2.7988-2.7999 6.7675 6.7675 0 00-1.9082-.627 13.044 13.044 0 00-2-.1767c-.3047-.0049-.6172-.0108-.922-.0127-.3593-.002-.7245-.002-1.084-.002z"/><path d="M8.4448 39.1251c-.3047 0-.602-.0039-.9043-.0107a12.6871 12.6871 0 01-1.8691-.163 5.8838 5.8838 0 01-1.6567-.548 5.4057 5.4057 0 01-1.397-1.0166 5.3208 5.3208 0 01-1.0206-1.3965 5.7219 5.7219 0 01-.543-1.6572 12.4135 12.4135 0 01-.1664-1.875c-.0064-.2109-.0147-.913-.0147-.913V8.4444s.0088-.6914.0147-.8946a12.3704 12.3704 0 01.1655-1.872 5.7555 5.7555 0 01.5435-1.6621 5.3735 5.3735 0 011.0151-1.398 5.5654 5.5654 0 011.4024-1.0225 5.823 5.823 0 011.6533-.5439A12.5859 12.5859 0 017.543.8874L8.4453.875H111.214l.913.0127a12.385 12.385 0 011.8585.1626 5.9383 5.9383 0 011.6709.5479 5.5937 5.5937 0 012.415 2.4199 5.7627 5.7627 0 01.5352 1.649 12.995 12.995 0 01.1738 1.8871c.003.2832.003.5874.003.8902.008.375.008.7319.008 1.0918v20.9286c0 .3633 0 .7178-.008 1.0752 0 .3252 0 .6231-.004.9297a12.7313 12.7313 0 01-.171 1.8535 5.739 5.739 0 01-.54 1.67 5.4803 5.4803 0 01-1.0155 1.3857 5.4129 5.4129 0 01-1.3994 1.0225 5.8617 5.8617 0 01-1.668.5498 12.5422 12.5422 0 01-1.8692.1631 39.1495 39.1495 0 01-.8974.0107l-1.084.002z" fill="#fff"/><path d="M24.9967 19.8895a5.1463 5.1463 0 012.4506-4.3177 5.2678 5.2678 0 00-4.1504-2.2438c-1.7462-.1833-3.4391 1.045-4.329 1.045-.907 0-2.2771-1.0268-3.7525-.9964a5.5274 5.5274 0 00-4.6513 2.8367c-2.0112 3.482-.511 8.5993 1.4155 11.414.9638 1.3782 2.0903 2.9177 3.5643 2.8631 1.4424-.0598 1.9812-.9198 3.7222-.9198 1.725 0 2.2304.9198 3.7343.8851 1.5478-.0251 2.523-1.3843 3.453-2.7756a11.3993 11.3993 0 001.579-3.216 4.9728 4.9728 0 01-3.0357-4.5746zm-2.8406-8.4125a5.0669 5.0669 0 001.159-3.63 5.1552 5.1552 0 00-3.3355 1.7259 4.8213 4.8213 0 00-1.1894 3.4955 4.2626 4.2626 0 003.366-1.5915zm20.1457 15.6628h-4.7334l-1.1367 3.3564h-2.005l4.4835-12.418h2.083l4.4834 12.418h-2.039zm-4.2432-1.5489h3.752l-1.8496-5.4472h-.0518zm17.1006.379c0 2.8134-1.5059 4.621-3.7783 4.621a3.0693 3.0693 0 01-2.8486-1.584h-.043v4.4844h-1.8585V21.4425h1.7989v1.5059h.0342a3.2116 3.2116 0 012.8828-1.6006c2.2978 0 3.8125 1.8164 3.8125 4.622zm-1.9102 0c0-1.833-.9472-3.0381-2.3925-3.0381-1.42 0-2.375 1.2304-2.375 3.038 0 1.8243.955 3.046 2.375 3.046 1.4453 0 2.3925-1.1963 2.3925-3.046zm11.8755 0c0 2.8134-1.5063 4.621-3.7788 4.621a3.0693 3.0693 0 01-2.8486-1.584h-.043v4.4844h-1.8584V21.4425h1.7988v1.5059h.0342a3.2116 3.2116 0 012.8828-1.6006c2.2979 0 3.813 1.8164 3.813 4.622zm-1.9106 0c0-1.833-.9473-3.0381-2.3926-3.0381-1.42 0-2.375 1.2304-2.375 3.038 0 1.8243.955 3.046 2.375 3.046 1.4453 0 2.3926-1.1963 2.3926-3.046zm8.4956 1.0664c.1377 1.2314 1.334 2.04 2.9687 2.04 1.5664 0 2.6934-.8086 2.6934-1.919 0-.9639-.6797-1.541-2.289-1.9365l-1.6094-.3877c-2.2803-.5508-3.3389-1.6172-3.3389-3.3477 0-2.1426 1.8672-3.6142 4.5176-3.6142 2.625 0 4.4238 1.4716 4.4844 3.6142h-1.876c-.1123-1.2392-1.1368-1.9873-2.6338-1.9873-1.4971 0-2.5215.7569-2.5215 1.8584 0 .878.6543 1.3946 2.2549 1.79l1.3681.336c2.5479.6025 3.6055 1.626 3.6055 3.4423 0 2.3233-1.8496 3.7784-4.793 3.7784-2.754 0-4.6133-1.421-4.7334-3.667zM83.3462 19.3v2.1425h1.7217v1.4717h-1.7217v4.9912c0 .7754.3447 1.1367 1.1016 1.1367a5.8075 5.8075 0 00.6113-.043v1.463a5.1035 5.1035 0 01-1.0322.0858c-1.833 0-2.5479-.6884-2.5479-2.4443v-5.1894h-1.3164v-1.4717h1.3164V19.3zm2.7178 6.6699c0-2.8487 1.6777-4.6387 4.294-4.6387 2.625 0 4.2949 1.79 4.2949 4.6387 0 2.8564-1.6612 4.6386-4.295 4.6386-2.6328 0-4.2939-1.7822-4.2939-4.6386zm6.6953 0c0-1.9541-.8955-3.1075-2.4014-3.1075-1.5058 0-2.4013 1.1621-2.4013 3.1075 0 1.9619.8955 3.1064 2.4013 3.1064 1.5059 0 2.4014-1.1445 2.4014-3.1064zm3.4257-4.5274h1.7725v1.541h.043a2.1594 2.1594 0 012.1778-1.6357 2.8662 2.8662 0 01.6367.0693v1.7383a2.598 2.598 0 00-.835-.1123 1.8726 1.8726 0 00-1.9365 2.083v5.3701H96.185zm13.1983 6.3945c-.25 1.6436-1.8506 2.7715-3.8984 2.7715-2.6338 0-4.2686-1.7646-4.2686-4.5957 0-2.8398 1.6436-4.6816 4.1905-4.6816 2.5048 0 4.08 1.7207 4.08 4.4658v.6367h-6.3945v.1123a2.358 2.358 0 002.4356 2.5645 2.0483 2.0483 0 002.0908-1.2735zm-6.2822-2.7021h4.5264a2.1773 2.1773 0 00-2.2207-2.2979 2.292 2.292 0 00-2.3057 2.2979zM37.8262 8.7311a2.6396 2.6396 0 012.8076 2.9649c0 1.9062-1.0303 3.002-2.8076 3.002h-2.1553V8.731zm-1.2285 5.123h1.125a1.8759 1.8759 0 001.9677-2.146 1.881 1.881 0 00-1.9677-2.1338h-1.125zm5.083-1.4096a2.1332 2.1332 0 114.247 0 2.1336 2.1336 0 11-4.247 0zm3.333 0c0-.9761-.4385-1.5469-1.208-1.5469-.7725 0-1.207.5708-1.207 1.5469 0 .9839.4346 1.5503 1.207 1.5503.7695 0 1.208-.5703 1.208-1.5503zm6.5596 2.2534h-.922l-.9306-3.3164h-.0703l-.9267 3.3164h-.9131l-1.2412-4.503h.9013l.8067 3.436h.0664l.9258-3.436h.8525l.9258 3.436h.0703l.8027-3.436h.8887zm2.2802-4.5029h.8555v.7153h.0664a1.348 1.348 0 011.3438-.8023 1.4646 1.4646 0 011.5586 1.6748v2.915h-.8887V12.006c0-.7236-.3145-1.0835-.9717-1.0835a1.033 1.033 0 00-1.0752 1.1411v2.6343h-.8887zm5.2403-1.7579h.8886v6.2608h-.8886zm2.124 4.0074a2.1335 2.1335 0 114.2476 0 2.1338 2.1338 0 11-4.2476 0zm3.333 0c0-.9761-.4385-1.5469-1.208-1.5469-.7725 0-1.207.5708-1.207 1.5469 0 .9839.4346 1.5503 1.207 1.5503.7695 0 1.208-.5703 1.208-1.5503zm1.8501.98c0-.8106.6035-1.2779 1.6748-1.3443l1.2197-.0703v-.3887c0-.4756-.3144-.7441-.9218-.7441-.4961 0-.8399.1821-.9385.5005h-.8604c.0908-.7735.8184-1.2695 1.8399-1.2695 1.1289 0 1.7656.562 1.7656 1.5131v3.0767h-.8555v-.6328h-.0703a1.515 1.515 0 01-1.3525.707 1.3603 1.3603 0 01-1.501-1.3476zm2.8945-.3848v-.3765l-1.0996.0703c-.6201.0415-.9014.2525-.9014.6494 0 .4053.3516.6412.835.6412a1.0615 1.0615 0 001.166-.9844zm2.0528-.5952c0-1.4229.7314-2.3242 1.8691-2.3242a1.484 1.484 0 011.3809.79h.0664V8.437h.8886v6.2608h-.8515v-.7115h-.0703a1.5628 1.5628 0 01-1.414.7857c-1.1456 0-1.8692-.9014-1.8692-2.3276zm.918 0c0 .955.4502 1.5298 1.203 1.5298.749 0 1.212-.583 1.212-1.526 0-.9384-.4678-1.5297-1.212-1.5297-.748 0-1.203.5786-1.203 1.5259zm6.9638 0a2.1332 2.1332 0 114.247 0 2.1336 2.1336 0 11-4.247 0zm3.333 0c0-.9761-.4385-1.5469-1.208-1.5469-.7725 0-1.207.5708-1.207 1.5469 0 .9839.4346 1.5503 1.207 1.5503.7695 0 1.208-.5703 1.208-1.5503zm2.1064-2.2495h.8555v.7153h.0664a1.348 1.348 0 011.3438-.8023 1.4646 1.4646 0 011.5586 1.6748v2.915h-.8887V12.006c0-.7236-.3145-1.0835-.9717-1.0835a1.033 1.033 0 00-1.0752 1.1411v2.6343h-.8886zm8.8458-1.1211v1.1416h.9756v.7485h-.9756v2.3154c0 .4717.1943.6783.6367.6783a2.9666 2.9666 0 00.3388-.0206v.7403a2.9155 2.9155 0 01-.4834.0454c-.9882 0-1.3818-.3477-1.3818-1.2158v-2.543h-.7148v-.7486h.7148V9.074zm2.1894-.6368h.8809v2.4815h.0703a1.3856 1.3856 0 011.373-.8067 1.4834 1.4834 0 011.5508 1.6788v2.9072H98.69v-2.688c0-.7193-.335-1.0835-.9629-1.0835a1.052 1.052 0 00-1.1338 1.1416v2.6299h-.8887zm9.0567 5.0449a1.828 1.828 0 01-1.9512 1.3028 2.0453 2.0453 0 01-2.0801-2.3242 2.0768 2.0768 0 012.0762-2.3526c1.2529 0 2.0088.856 2.0088 2.27v.3101h-3.1797v.0498a1.1902 1.1902 0 001.1992 1.29 1.0793 1.0793 0 001.0713-.5459zm-3.126-1.4511h2.2744a1.0865 1.0865 0 00-1.1084-1.1665 1.1516 1.1516 0 00-1.166 1.1665z"/></svg>
              </Link>
          </motion.div>
        </main>

        {/* <div
          className="fixed top-0 right-0 w-[80%] md:w-1/2 h-screen bg-[#1F2B3A]/20"
          style={{
            clipPath:
              "polygon(100px 0,100% 0,calc(100% + 225px) 100%, 480px 100%)",
          }}
        ></div>

        <motion.canvas
          initial={{
            filter: "blur(20px)",
          }}
          animate={{
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1,
            ease: [0.075, 0.82, 0.965, 1],
          }}
          style={{
            clipPath:
              "polygon(100px 0,100% 0,calc(100% + 225px) 100%, 480px 100%)",
          }}
          id="gradient-canvas"
          data-transition-in
          className="z-50 fixed top-0 right-[-2px] w-[80%] md:w-1/2 h-screen bg-[#c3e4ff]"
        ></motion.canvas> */}
        
      </div>
    </AnimatePresence>
  );
}
