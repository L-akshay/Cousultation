"use client";

import { footerLinks } from "@/lib/data";
import Container from "../Container";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <Container>
      <footer className="pt-10 px-8 md:px-12 lg:px-24 pb-8 bg-[var(--bg-main)]">
        <div className="top flex flex-col gap-10 pb-10 md:flex-row md:justify-between">
          <div className="flex flex-col gap-2">
            <motion.h4
              initial={{
                opacity: 0,
                x: -20,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              viewport={{
                amount: 0.4,
                once: true,
              }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
              }}
              className="logo font-semibold text-3xl text-[var(--text-heading)] md:text-4xl"
            >
              Thinkly
            </motion.h4>
            <motion.h6
              initial={{
                opacity: 0,
                x: -10,
                scale: 0.98,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              viewport={{
                amount: 0.4,
                once: true,
              }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
                delay: 0.2,
              }}
              className="text-[var(--text-body)] md:w-3/5 md:text-sm lg:w-4/5"
            >
              賢く計画し、速く働き、本当に大切なことに集中する。
            </motion.h6>
          </div>
          <div className="links flex justify-between md:gap-6 lg:gap-16">
            <div className="products-links flex flex-col gap-4">
              <motion.h4
                initial={{
                  opacity: 0,
                  x: -10,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                viewport={{
                  amount: 0.4,
                  once: true,
                }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                }}
                className="font-medium text-lg"
              >
                プロダクト
              </motion.h4>
              <div className="flex flex-col gap-2">
                {footerLinks.slice(0, 3).map((link, i) => (
                  <motion.div
                    key={i}
                    initial={{
                      opacity: 0,
                      x: -10,
                      scale: 0.95,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      scale: 1,
                    }}
                    viewport={{
                      amount: 0.4,
                      once: true,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                      delay: i * 0.25,
                    }}
                  >
                    <a
                      className="cursor-pointer text-[var(--text-muted)] transition-all duration-300 hover:text-[var(--text-body)] text-sm lg:text-sm"
                      href={link.href.startsWith("/") ? link.href : `#${link.href}`}
                    >
                      {link.text}
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="privacy-links flex flex-col gap-4">
              <motion.h4
                initial={{
                  opacity: 0,
                  x: -10,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                viewport={{
                  amount: 0.4,
                  once: true,
                }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                }}
                className="font-medium text-lg"
              >
                法的情報
              </motion.h4>
              <div className="flex flex-col gap-2">
                {footerLinks.slice(3).map((link, i) => (
                  <motion.div
                    key={i}
                    initial={{
                      opacity: 0,
                      x: -10,
                      scale: 0.95,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      scale: 1,
                    }}
                    viewport={{
                      amount: 0.4,
                      once: true,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: "easeOut",
                      delay: i * 0.3,
                    }}
                  >
                    <a
                      className="cursor-pointer text-[var(--text-muted)] transition-all duration-300 hover:text-[var(--text-body)] text-sm lg:text-sm"
                      href={link.href.startsWith("/") ? link.href : `#${link.href}`}
                    >
                      {link.text}
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="bottom border-t border-[var(--border-subtle)] pt-4">
          <motion.p
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              amount: 0.4,
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            className="text-sm text-[var(--text-muted)]"
          >
            © 2026 Thinkly. 全著作権所有。
          </motion.p>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
