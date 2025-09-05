import "../style.scss";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import { PerspectiveCamera } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useHelper } from "@react-three/drei";
//! Камера

const Camera = () => {
  const svet = useRef();

  useHelper(svet, THREE.DirectionalLightHelper, 1, "#000");

  useEffect(() => {
    if (svet.current) {
      const helper = new THREE.CameraHelper(svet.current.shadow.camera);
      svet.current.add(helper);
      return () => {
        svet.current.remove(helper);
        helper.dispose();
      };
    }
  }, []);

  return (
    <>
      <ambientLight intensity={0.4} />
      <PerspectiveCamera makeDefault position={[0, 7, 7]} />
      <OrbitControls makeDefault />
      <directionalLight
        ref={svet}
        intensity={1.4}
        castShadow
        position={[1.2, 5, 4]}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-left={-3.5}
        shadow-camera-right={3.5}
        shadow-camera-top={3.5}
        shadow-camera-bottom={-3.5}
        shadow-camera-near={0.4}
        shadow-camera-far={16}
        shadow-bias={-0.001}
        normalBias={0.4}
      />
    </>
  );
};

//! Пол
const Floor = () => {
  return (
    <>
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[7, 7]} />
        <meshStandardMaterial color={"gray"} />
      </mesh>
      <gridHelper args={[8, 8]} position={[0, -0.1, 0]} />
    </>
  );
};

//!Шкаф простой
const Shkaf = () => {
  return (
    <group castShadow position={[0, 0, 0]}>
      {/* задняя стенка */}
      <mesh castShadow position={[0, 1.04, 0]}>
        <boxGeometry args={[1.5, 2, 0.02]} />
        <meshStandardMaterial color={"#fff"} />
      </mesh>
      {/* Левая стенка */}
      <mesh castShadow position={[-0.76, 1.04, 0.5]}>
        <boxGeometry args={[0.02, 2, 1.02]} />
        <meshStandardMaterial color={"#d1d2d3"} />
      </mesh>
      {/* Правая стенка */}
      <mesh castShadow position={[0.76, 1.04, 0.5]}>
        <boxGeometry args={[0.02, 2, 1.02]} />
        <meshStandardMaterial color={"#d1d2d3"} />
      </mesh>
      {/* Крыша */}
      <mesh position={[0, 2 + 0.05, 0.5]}>
        <boxGeometry args={[1.5 + 0.04, 0.02, 1 + 0.02]} />
        <meshStandardMaterial color={"#fff"} />
      </mesh>
      {/* Полка в центре */}
      <mesh receiveShadow position={[0, 1, 0.45]}>
        <boxGeometry args={[1.5, 0.02, 0.8]} />
        <meshStandardMaterial color={"#cabcbcff"} />
      </mesh>
    </group>
  );
};

export const Day5 = () => {
  return (
    <div className="day5">
      <Canvas shadows>
        <Camera />
        <Floor />
        <Shkaf />
      </Canvas>
    </div>
  );
};
