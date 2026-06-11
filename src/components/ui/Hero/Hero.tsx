"use client";

import { motion } from "framer-motion";
import Button from "../Button";
import SecondaryButton from "../SecondaryButton";

const Hero = () => {
  return (
    <section className=" w-full flex flex-col items-center justify-center gap-5 text-center min-h-[85vh] sm:min-h-[calc(100vh-75px)] max-h-200 sm:max-h-250 px-6 pt-30 pb-12 sm:pt-10 sm:pb-0">
      <div
        className="heading text-[clamp(35px,7.5vw,70px)] font-semibold "
        style={{ lineHeight: 1.25 }}
      >
        <motion.h1
          initial={{
            opacity: 0,
            y: 45,
            filter: "blur(5px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="text-shadow"
        >
          Thinklyと出会う{" "}
          <span className="font2 text-[var(--text-heading)] italic font-light">
            Thinkly
          </span>
        </motion.h1>
        <motion.h1
          initial={{
            opacity: 0,
            y: 45,
            filter: "blur(5px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.4,
          }}
          className="text-shadow"
        >
          あなたのスマートな仕事パートナー
        </motion.h1>
      </div>
      <div className="subheading w-4/5 text-[clamp(14px,4vw,18px)] md:w-1/2  text-[var(--text-body)] overflow-hidden">
        <motion.h3
          initial={{
            opacity: 0,
            y: 20,
            filter: "blur(3px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.87,
          }}
        >
          AIを活用した生産性アシスタント。タスクの計画・1日の整理・本当に大切なことへの集中をサポートします。
        </motion.h3>
      </div>
      <div className="buttons px-8 flex flex-col gap-6 md:gap-8 md:flex-row md:w-fit w-full">
        <motion.div
          initial={{
            scale: 0.8,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
            delay: 1.1,
          }}
          className="w-full md:w-fit"
        >
          <Button
            className={
              "text-[var(--text-invert)] hover:bg-[var(--hover-primary)] w-full md:w-fit shadow-[0_3px_10px_rgb(0,0,0,0.2)] font-semibold px-8"
            }
            text={"無料で始める"}
          />
        </motion.div>
        <motion.div
          initial={{
            scale: 0.8,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
            delay: 1.2,
          }}
          className="w-full md:w-fit"
        >
          <SecondaryButton
            className={
              "hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-8 w-full md:w-fit"
            }
            text={"デモを見る"}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
