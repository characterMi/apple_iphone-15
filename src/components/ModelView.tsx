"use client";

import { Suspense } from "react";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

import IPhone from "./IPhone";
import Loader from "./Loader";

type Props = {
  item: {
    title: string;
    color: string[];
    img: string;
  };
};

const ModelView = ({ item }: Props) => {
  return (
    <Canvas
      className="h-full w-full overflow-hidden touch-none"
      gl={{ preserveDrawingBuffer: true }}
    >
      <ambientLight intensity={0.2} />

      <Environment preset="lobby" />
      <OrbitControls
        makeDefault
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
      />
      <Suspense fallback={<Loader />}>
        <IPhone scale={30} item={item} />
      </Suspense>
    </Canvas>
  );
};

export default ModelView;
