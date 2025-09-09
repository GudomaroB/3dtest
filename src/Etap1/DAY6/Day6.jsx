import "../style.scss";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useEffect } from "react";
import { useHelper } from "@react-three/drei";

const Camera = () => {
  const camera = useRef();

  //   useHelper(camera, THREE.DirectionalLightHelper, 1, "#000");

  //   useEffect(() => {
  //     if (camera.current) {
  //       const helper = new THREE.CameraHelper(camera.current.shadow.camera);
  //       camera.current.add(helper);
  //       return () => {
  //         camera.current.remove(helper);
  //         helper.dispose();
  //       };
  //     }
  //   }, []);

  return (
    <>
      <ambientLight intensity={1} />
      <OrbitControls
        makeDefault
        enableDamping={true}
        dampingFactor={0.4}
        minDistance={2}
        maxDistance={7}
        target={[0, 0.5, 0]}
        zoomSpeed={1.5}
        rotateSpeed={0.8}
        minPolarAngle={0.2}
        maxPolarAngle={1.65}
        enablePan={false}
      />
      <PerspectiveCamera makeDefault position={[0.1, 3, 7]} />
      <directionalLight
        castShadow
        intensity={1.4}
        position={[1, 2, 2.5]}
        // ref={camera}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-left={-3}
        shadow-camera-right={3}
        shadow-camera-top={3}
        shadow-camera-bottom={-3}
        shadow-camera-near={0.3}
        shadow-camera-far={10}
      />
    </>
  );
};

const Floor = () => {
  return (
    <>
      <mesh receiveShadow position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[6, 6]} />
        <meshStandardMaterial color={"#DC143C"} />
      </mesh>
      {/* <gridHelper position={[0, -0.01, 0]} args={[7, 7]} /> */}
    </>
  );
};

const Content = () => {
  return (
    <>
      <mesh position={[0, 0.6, 0]} castShadow>
        <boxGeometry args={[1.3, 1.2, 1]} />
        <meshStandardMaterial color={"#7B68EE"} />
      </mesh>
    </>
  );
};

export const Day6 = () => {
  return (
    <div className="day6">
      <Canvas shadows>
        <Camera />
        <Floor />
        <Content />
      </Canvas>
    </div>
  );
};
