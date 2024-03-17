"use client";

import Image from "next/image";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { animateWithGsapScrollTrigger } from "@/utils/animation";

const HowItWorksComponents = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      opacity: 0,
      duration: 2,
      ease: "power2.inOut",
    });

    animateWithGsapScrollTrigger(".g_fadeIn", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
  }, []);

  return (
    <>
      <div id="chip" className="flex-center my-20 overflow-hidden w-full">
        <Image
          src="/assets/images/chip.jpeg"
          alt="Chip"
          width={180}
          height={180}
        />
      </div>

      <div className="flex flex-col items-center">
        <h2 className="hiw-title">
          A17 Pro chip.
          <br /> A monster win for gaming.
        </h2>

        <p className="hiw-subtitle">
          It's here. The biggest redesign in the history of Apple GPUs.
        </p>
      </div>

      <div className="hiw-text-container">
        <div className="flex flex-1 justify-center flex-col">
          <p className="hiw-text g_fadeIn">
            A17 Pro is an entirely new class of iPhone chip that delivers our{" "}
            <span className="text-white">best graphic performance by far</span>.
          </p>

          <p className="hiw-text g_fadeIn">
            Mobile{" "}
            <span className="text-white">
              games will look and feel so immersive
            </span>
            , with incredibly detailed environments and characters.
          </p>
        </div>

        <div className="flex-1 flex justify-center flex-col g_fadeIn">
          <p className="hiw-text">New</p>
          <p className="hiw-bigtext">Pro-class GPU</p>
          <p className="hiw-text">with 6 cores</p>
        </div>
      </div>
    </>
  );
};

export default HowItWorksComponents;
