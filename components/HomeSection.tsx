"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Navbar from "./Navbar";

export default function HomeSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from("nav .logo, nav h3", {
        y: -30,
        opacity: 0,
        duration: 0.3,
        delay: 0.5,
        stagger: 0.2,
      });
      tl.from(".center-part1 h1", {
        x: -300,
        opacity: 0,
        duration: 0.5,
      });
      tl.from(".center-part1 p", {
        y: -30,
        opacity: 0,
        duration: 0.3,
      });
      tl.from(".center-part1 button, nav button", {
        duration: 0.2,
        opacity: 0,
      });
      tl.from(
        ".center-part2 img",
        {
          duration: 0.5,
          opacity: 0,
        },
        "-=1"
      );
      tl.from(
        ".bottom-section img",
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
        },
        "-=1"
      );
    });

    return () => {
      ctx.revert(); // cleanly resets all inline styles GSAP applied
    };
  }, []);

  return (
    <section id="home-section">
      <header>
        <Navbar />
      </header>

      <div className="center">
        <div className="center-part1">
          <h1>デジタルの世界を切り拓き、成功へと導く</h1>
          <p>
            私たちは、最先端のデジタルマーケティング戦略でお客様のビジネスを次のステージへ引き上げます。
            SEOからSNS運用まで、データに基づいた施策で確実な成果を実現。
            豊富な実績と専門知識を持つチームが、貴社の目標達成を全力でサポートいたします。
            まずはお気軽にご相談ください。
          </p>
          <button className="black-btn">無料相談を予約する</button>
        </div>
        <div className="center-part2">
          <img
            src="https://master--kreatif-software.netlify.app/_astro/hero-pic.Cf7ZIw9T_LTlHA.webp"
            alt=""
          />
        </div>
      </div>

      <div className="bottom-section">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAkvq8eq3u3EIkZt5bEcxJaR7Wz7fO0QvOUA&s"
          alt=""
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5RUlXXus1cZHNgkdhSxE6Iyf2I7LpFLYfn6R2zR9OBhyDVBkjQooz1mABszUXTHB1Z2U&usqp=CAU"
          alt=""
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR7px5g1-Ldm6b1-YIxofXWRLrOF4ZAFP77g&s"
          alt=""
        />
        <img
          src="https://get.site/wp-content/uploads/2021/10/notion-logo.png"
          alt=""
        />
        <img
          src="https://logowik.com/content/uploads/images/netflix-black6126.logowik.com.webp"
          alt=""
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnEXT9P1sl9J0HeaQJxQZb7sVPXUjFYg0dDnQubAG-yaxsyRSwDmX9TKfTL86eCh5po7E&usqp=CAU"
          alt=""
        />
      </div>
    </section>
  );
}
