"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HeroComponents = () => {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 700) {
      setVideoSrc("/assets/videos/smallHero.mp4");
    } else {
      setVideoSrc("/assets/videos/hero.mp4");
    }
  };

  useEffect(() => {
    handleVideoSrcSet()

    window.addEventListener("resize", handleVideoSrcSet);

    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero_title", { opacity: 1, delay: 2 });
    gsap.to("#cta", { opacity: 1, y: -50, delay: 2 });
  });

  return (
    <>
      <div className="h-5/6 w-full flex-col flex-center">
        <p className="hero-title" id="hero_title">
          iPhone 15 pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc!} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <Link href="#highlights" className="btn">
          Buy
        </Link>
        <p className="font-normal text-xl">From 199$/month or 999$</p>
      </div>
    </>
  );
};

export default HeroComponents;
