"use client";

import { Dispatch, MutableRefObject, SetStateAction, Suspense } from "react";

import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  View,
} from "@react-three/drei";
import * as THREE from "three";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";

import IPhone from "./IPhone";
import Loader from "./Loader";

type Props = {
  index: number;
  groupRef: MutableRefObject<THREE.Group<THREE.Object3DEventMap>>;
  gsapType: "view1" | "view2";
  controlRef: MutableRefObject<OrbitControlsImpl | null>;
  setRotationState: Dispatch<SetStateAction<number>>;
  item: {
    title: string;
    color: string[];
    img: string;
  };
  size: "small" | "large";
};

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  item,
  size,
}: Props) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`h-full w-full absolute ${index === 2 && "right-[-100%]"}`}
    >
      <ambientLight intensity={0.2} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Environment preset="lobby" />

      <group
        ref={groupRef}
        name={index === 1 ? "small" : "large"}
        position={[0, 0, 0]}
      >
        <OrbitControls
          makeDefault
          ref={controlRef as MutableRefObject<OrbitControlsImpl>}
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.4}
          target={new THREE.Vector3(0, 0, 0)}
          onEnd={() =>
            setRotationState(controlRef.current?.getAzimuthalAngle()!)
          }
        />
        <Suspense fallback={<Loader />}>
          <IPhone
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
