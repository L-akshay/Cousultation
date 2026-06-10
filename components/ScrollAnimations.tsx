"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: "#services-section",
          scroller: "body",
          start: "top 70%",
          end: "bottom top",
          scrub: 2,
        },
      });

      tl2.from(".services", {
        y: 30,
        opacity: 0,
        duration: 0.5,
      });

      // line1
      tl2.from(
        ".elem.left.line1",
        {
          x: -300,
          opacity: 0,
          duration: 0.5,
        },
        "line1animation"
      );
      tl2.from(
        ".elem.right.line1",
        {
          x: 300,
          opacity: 0,
          duration: 0.5,
        },
        "line1animation"
      );

      // line2
      tl2.from(
        ".elem.left.line2",
        {
          x: -300,
          opacity: 0,
          duration: 0.5,
        },
        "line2animation"
      );
      tl2.from(
        ".elem.right.line2",
        {
          x: 300,
          opacity: 0,
          duration: 0.5,
        },
        "line2animation"
      );

      tl2.from(
        ".contact-element h2",
        {
          y: 40,
          opacity: 0,
          duration: 0.2,
        },
        "contact-anim"
      );
      tl2.from(
        ".contact-element p, .contact-element button",
        {
          y: 20,
          opacity: 0,
          duration: 0.5,
        },
        "contact-anim"
      );
      tl2.from(
        ".contact-img img",
        {
          x: 100,
          opacity: 0,
          duration: 0.3,
        },
        "contact-anim"
      );

      tl2.from("#caseStudy-section .services h3", {
        x: -300,
        opacity: 0,
        duration: 0.5,
      });
      tl2.from("#caseStudy-section .services p", {
        x: 300,
        opacity: 0,
        duration: 0.5,
      });

      tl2.from(
        ".caseBox-container .caseBox1",
        {
          y: 200,
          opacity: 0,
          duration: 0.2,
        },
        "caseBoxAnim"
      );
      tl2.from(
        ".caseBox-container .caseBox2",
        {
          opacity: 0,
          duration: 0.5,
        },
        "caseBoxAnim"
      );
      tl2.from(
        ".caseBox-container .caseBox3",
        {
          x: -200,
          opacity: 0,
          duration: 0.2,
        },
        "caseBoxAnim"
      );
    });

    return () => {
      ctx.revert(); // kills timelines + ScrollTriggers and resets all inline styles
    };
  }, []);

  return null;
}
