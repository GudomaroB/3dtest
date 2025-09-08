import "../style.scss";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { useHelper } from "@react-three/drei";
import * as THREE from "three";

const Camera = () => {
  const camera = useRef();

  //   useHelper(camera, THREE.DirectionalLightHelper, 1, "#000000");

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
      <ambientLight intensity={0.5} />
      <directionalLight
        // ref={camera}
        castShadow
        intensity={1.1}
        position={[0.4, 3.5, 3]}
        shadow-mapSize={[2048, 2048]}
        shadow-camera-left={-3.5}
        shadow-camera-right={3.5}
        shadow-camera-top={3.5}
        shadow-camera-bottom={-3.5}
        shadow-bias={-0.00002}
        normalBias={0.03}
        shadow-camera-near={0.4}
        shadow-camera-far={12}
      />
      <PerspectiveCamera makeDefault position={[0, 5, 7]} />
      <OrbitControls
        makeDefault
        enableDamping={true}
        dampingFactor={0.4}
        minDistance={3}
        maxDistance={9}
        minPolarAngle={0.2}
        maxPolarAngle={1.5}
        target={[0, 1, 0]}
        zoomSpeed={1.5}
        rotateSpeed={0.8}
        enablePan={true}
      />
    </>
  );
};

const Floor = () => {
  return (
    <>
      <mesh receiveShadow position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[7, 7]} />
        <meshStandardMaterial color={"#d1d2d3"} />
      </mesh>
      <gridHelper args={[8, 8]} position={[0, -0.01, 0]} />
    </>
  );
};

const Cube = () => {
  return (
    <>
      <mesh castShadow position={[-1, 0.85, 0]}>
        <boxGeometry args={[1.5, 1.7, 2]} />
        <meshStandardMaterial color={"red"} />
      </mesh>
      <mesh castShadow position={[1.5, 0.5, 0]}>
        <boxGeometry args={[1, 1]} />
        <meshStandardMaterial color={"blue"} />
      </mesh>
    </>
  );
};

export const Test = () => {
  return (
    <div className="test">
      <Canvas shadows>
        <Camera />
        <Floor />
        <Cube />
      </Canvas>
    </div>
  );
};
