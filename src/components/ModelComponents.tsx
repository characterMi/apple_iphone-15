"use client";

import { useState } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ModelView from "./ModelView";
import { models } from "@/constants";
import { animateWithGsapScrollTrigger } from "../utils/animation";

const ModelComponents = () => {
  const [model, setModel] = useState({
    title: "iPhone 15 pro in Natural Titanium",
    color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
    img: "/assets/images/yellow.jpg",
  });

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    animateWithGsapScrollTrigger("#heading", {
      y: 0,
      opacity: 1,
    });

    animateWithGsapScrollTrigger(".model_color-btn", {
      x: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 0.3,
    });
  }, []);

  return (
    <div className="screen-max-width">
      <h1 className="section-heading" id="heading">
        Take a closer look.
      </h1>

      <div className="flex flex-col items-center mt-5">
        <div className="w-screen h-[75vh] md:h-[90vh] overflow-hidden relative">
          <ModelView item={model} />
        </div>

        <div className="mx-auto w-full">
          <p
            className="text-sm font-light mb-5 text-center model_title-anim"
            key={model.title}
          >
            {model.title}
          </p>

          <div className="flex-center">
            <ul className="color-container overflow-hidden">
              {models.map((item) => (
                <li
                  key={item.id}
                  className="w-6 h-6 mx-2 rounded-full cursor-pointer model_color-btn opacity-0 translate-x-28"
                  style={{ backgroundColor: item.color[0] }}
                  onClick={() => setModel(item)}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelComponents;
