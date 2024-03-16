"use client";

import Image from "next/image";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { animateWithGsapScrollTrigger } from "@/utils/animation";
import VideoCarousel from "./VideoCarousel";

const HighlightsComponents = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    animateWithGsapScrollTrigger("#title", { opacity: 1, y: 0 });
    animateWithGsapScrollTrigger(".link", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25,
    });
  }, []);

  return (
    <>
      <div className="mb-12 w-full items-end justify-between md:flex">
        <h1 id="title" className="section-heading">
          Get the highlights.
        </h1>

        <div className="flex flex-wrap items-end gap-5">
          <p className="link">
            Watch the film
            <Image
              src="/assets/images/watch.svg"
              alt="watch"
              className="ml-2"
              width={20}
              height={20}
            />
          </p>
          <p className="link">
            Watch the event
            <Image
              src="/assets/images/right.svg"
              alt="watch"
              className="ml-2"
              width={10}
              height={10}
            />
          </p>
        </div>
      </div>

      <VideoCarousel />
    </>
  );
};

export default HighlightsComponents;
