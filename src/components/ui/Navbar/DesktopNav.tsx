"use client";

import Button from "../Button";
import { desktopNavLinks } from "@/lib/data";
import { motion } from "framer-motion";

const DesktopNav = () => {
  return (
    <header className="hidden md:block w-full bg-[var(--bg-navbar)]">
      <nav className="w-full flex items-center justify-between border-b border-[var(--border-subtle)] py-4 px-10">
        <motion.h4
          initial={{
            opacity: 0,
            y: 15,
            filter: "blur(1.4px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="text-shadow logo font-semibold text-xl md:text-3xl text-[var(--text-heading)]"
        >
          Thinkly
        </motion.h4>
        <ul className="flex items-center gap-12 text-[var(--text-body)] md:text-sm">
          {desktopNavLinks.map((link, i) => (
            <motion.li
              initial={{
                opacity: 0,
                y: 15,
                filter: "blur(1.4px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 1,
                delay: i * 0.2,
                ease: "easeOut",
              }}
              key={i}
              className="group h-5 overflow-hidden"
            >
              <div className="flex flex-col transition-all duration-300 group-hover:-translate-y-5">
                <a
                  className="cursor-pointer"
                  href={link.link === "#" ? "#" : `#${link.link}`}
                >
                  {link.text}
                </a>
                <a
                  className="cursor-pointer"
                  href={link.link === "#" ? "#" : `#${link.link}`}
                >
                  {link.text}
                </a>
              </div>
            </motion.li>
          ))}
          <motion.li
            initial={{
              opacity: 0,
              filter: "blur(1.4px)",
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.5,
              delay: 1,
              ease: "easeOut",
            }}
          >
            <Button
              className={
                "shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-[var(--text-invert)] hover:bg-[var(--hover-primary)]"
              }
              text={"今すぐ始める"}
            />
          </motion.li>
        </ul>
      </nav>
    </header>
  );
};

export default DesktopNav;
