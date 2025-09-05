import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import { useHelper } from "@react-three/drei";
import "../style.scss";

const MyCamera = () => {
  const helpCamera = useRef();
  useHelper(helpCamera, THREE.DirectionalLightHelper, 1, "#000");

  useEffect(() => {
    if (helpCamera.current) {
      const helpers = new THREE.CameraHelper(helpCamera.current.shadow.camera);
      helpCamera.current.add(helpers);
      return () => {
        helpCamera.current.remove(helpers);
        helpers.dispose();
      };
    }
  }, []);

  return (
    <>
      <ambientLight intensity={0.4} />
      <PerspectiveCamera makeDefault position={[0, 4, 8]} />
      <OrbitControls makeDefault />
      <directionalLight
        ref={helpCamera}
        castShadow
        intensity={1}
        shadow-mapSize={[1024, 1024]}
        position={[2, 4, 4]}
        shadow-camera-left={-3}
        shadow-camera-right={3}
        shadow-camera-top={3}
        shadow-camera-bottom={-3}
        shadow-camera-near={0.5}
        shadow-camera-far={14}
        normalBias={0.03} // УМЕНЬШИ С 0.6 до 0.04
        shadow-bias={-0.0002}
      />
    </>
  );
};
const Floor = () => {
  return (
    <>
      <mesh receiveShadow position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[7, 7]} />
        <meshStandardMaterial color={"orange"} />
      </mesh>
      <gridHelper position={[0, -0.1, 0]} args={[9, 9]} />
    </>
  );
};

const MyBox = () => {
  return (
    <>
      <mesh castShadow position={[-1, 0.8, 0]}>
        <boxGeometry args={[1.2, 1.6, 1]} />
        <meshStandardMaterial color={"blue"} />
      </mesh>
    </>
  );
};

export const Day4 = () => {
  return (
    <div className="day4">
      <Canvas dpr={[1, 2]} shadows>
        <MyCamera />
        <MyBox />
        <Floor />
      </Canvas>
    </div>
  );
};
