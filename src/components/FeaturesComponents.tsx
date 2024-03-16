"use client";

import { useRef } from "react";
import Image from "next/image";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { animateWithGsapScrollTrigger } from "@/utils/animation";

const FeaturesComponents = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#explore_video", {
      scrollTrigger: {
        trigger: "#explore_video",
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
      },
      onComplete: () => {
        videoRef.current?.play();
      },
    });
    animateWithGsapScrollTrigger("#features_title", { y: 0, opacity: 1 });

    animateWithGsapScrollTrigger("#features_desc", { y: 0, opacity: 1 });

    animateWithGsapScrollTrigger(
      ".g_grow",
      {
        scale: 1,
        opacity: 1,
        ease: "power1",
      },
      {
        scrub: 5.5,
      }
    );

    animateWithGsapScrollTrigger(".g_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
  }, []);

  return (
    <>
      <div className="mb-12 w-full">
        <h1 id="features_title" className="section-heading">
          Explore the full story.
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center overflow-hidden">
        <div className="mt-32 mb-24 pl-24 section-heading" id="features_desc">
          <h1 className="text-5xl lg:text-7xl font-semibold">iPhone</h1>
          <h1 className="text-5xl lg:text-7xl font-semibold">
            Forged in titanium.
          </h1>
        </div>

        <div className="flex-center flex-col sm:px-10">
          <div className="relative h-[50vh] w-full flex items-center">
            <video
              playsInline
              id="explore_video"
              className="w-full h-full object-cover object-center"
              preload="none"
              muted
              autoPlay
              ref={videoRef}
            >
              <source type="video/mp4" src="/assets/videos/explore.mp4" />
            </video>
          </div>

          <div className="flex flex-col w-full relative">
            <div className="feature-video-container">
              <div className="overflow-hidden flex-1 h-[50vh]">
                <Image
                  src="/assets/images/explore1.jpg"
                  alt="Titanium 1"
                  width={200}
                  height={200}
                  className="feature-video g_grow"
                />
              </div>
              <div className="overflow-hidden flex-1 h-[50vh]">
                <Image
                  src="/assets/images/explore2.jpg"
                  alt="Titanium 2"
                  width={200}
                  height={200}
                  className="feature-video g_grow"
                />
              </div>
            </div>

            <div className="feature-text-container">
              <div className="flex-1 flex-center">
                <p className="feature-text g_text">
                  iPhone 15 pro is{" "}
                  <span className="text-white">
                    the first iPhone to feature an arrow space great titanium
                    design
                  </span>{" "}
                  using the same alloy that spacecrafts use for missions to mars
                </p>
              </div>

              <div className="flex-1 flex-center">
                <p className="feature-text g_text">
                  Titanium has one of the best strength-to-weight ratios of any
                  metal, making these our{" "}
                  <span className="text-white">lightest pro models</span> You'll
                  notice the difference the moment you pick one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesComponents;
