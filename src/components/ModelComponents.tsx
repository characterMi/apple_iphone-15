"use client";

import { useEffect, useRef, useState } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";

import ModelView from "./ModelView";
import { models, sizes } from "@/constants";
import {
  animateWithGsapScrollTrigger,
  animateWithGsapTimeline,
} from "../utils/animation";

const ModelComponents = () => {
  const [size, setSize] = useState<"small" | "large">("small");
  const [model, setModel] = useState({
    title: "iPhone 15 pro in Natural Titanium",
    color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
    img: "/assets/images/yellow.jpg",
  });

  // camera control for model view
  const cameraControlSmall = useRef<OrbitControlsImpl>(null);
  const cameraControlLarge = useRef<OrbitControlsImpl>(null);

  // model
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  //rotation
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  const tl = gsap.timeline();

  useEffect(() => {
    if (size === "large") {
      // what we're doing here is we get the current value of the small rotation, then we rotate the small model by the value stored in that rotation we animate small model to the left and we animate the large model view to the center.
      animateWithGsapTimeline(tl, small, smallRotation, "#view1", "#view2", {
        transform: "translateX(-100%)",
        duration: 2,
      });
    } else {
      animateWithGsapTimeline(tl, large, largeRotation, "#view2", "#view1", {
        transform: "translateX(0)",
        duration: 2,
      });
    }
  }, [size]);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    animateWithGsapScrollTrigger("#heading", {
      y: 0,
      opacity: 1,
    });

    animateWithGsapScrollTrigger(
      ".model_color-btn",
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.3,
      },
      {
        start: "top 105%",
      }
    );

    animateWithGsapScrollTrigger(
      ".model_size-btn",
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.3,
      },
      {
        start: "top 105%",
      }
    );
  }, []);

  return (
    <div className="screen-max-width" id="root">
      <h1 className="section-heading" id="heading">
        Take a closer look.
      </h1>

      <div className="flex flex-col items-center mt-5">
        <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
          <ModelView
            index={1}
            groupRef={small}
            gsapType="view1"
            controlRef={cameraControlSmall}
            setRotationState={setSmallRotation}
            item={model}
            size={size}
          />

          <ModelView
            index={2}
            groupRef={large}
            gsapType="view2"
            controlRef={cameraControlLarge}
            setRotationState={setLargeRotation}
            item={model}
            size={size}
          />

          <Canvas
            className="w-full h-full"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              overflow: "hidden",
              touchAction: "none",
            }}
            eventSource={document.getElementById("root")!}
          >
            <View.Port />
          </Canvas>
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
                  className="w-6 h-6 mx-2 rounded-full cursor-pointer model_color-btn opacity-0 translate-y-28"
                  style={{ backgroundColor: item.color[0] }}
                  onClick={() => setModel(item)}
                />
              ))}
            </ul>

            <button className="size-btn-container overflow-hidden">
              {sizes.map(({ label, value }) => (
                <span
                  className="size-btn model_size-btn opacity-0 translate-y-32"
                  style={{
                    backgroundColor: size === value ? "white" : "transparent",
                    color: size === value ? "black" : "white",
                  }}
                  key={value}
                  onClick={() => setSize(value)}
                >
                  {label}
                </span>
              ))}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelComponents;
