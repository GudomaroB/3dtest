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

  useHelper(svet, THREE.DirectionalLightHelper, 2, "#000");

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
      <ambientLight intensity={0.8} />
      <PerspectiveCamera makeDefault position={[0, 7, 8]} />
      <OrbitControls
        makeDefault
        enableDamping={true} // Плавность как в крутой видеоигре
        dampingFactor={0.05} // Сила "торможения" (чем меньше, тем сильнее инерция)
        rotateSpeed={0.8} // Стандартная скорость вращения
        zoomSpeed={1.5} // Чуть замедленный zoom для аккуратности
        minDistance={3} // Не даем подъехать к машине вплотную (не видно целиком)
        maxDistance={12} // Не даем уехать так далеко, что машина превратится в точку
        minPolarAngle={0.2} // Не даем посмотреть СЛИШКОМ сверху (например, только до 25 градусов)
        maxPolarAngle={1.7} // Не даем уйти под землю и посмотреть снизу (ограничиваем 85 градусами)
        enablePan={true} // Разрешаем сдвигать камеру
        target={[0, 1.3, 0]} // Вращаемся вокруг центра машины (условно на высоте 1 метр)
      />
      <directionalLight
        ref={svet}
        intensity={1}
        castShadow
        position={[1.2, 4, 4]}
        shadow-mapSize={[2048, 2048]}
        shadow-camera-left={-4}
        shadow-camera-right={4}
        shadow-camera-top={4}
        shadow-camera-bottom={-4}
        shadow-camera-near={0.4}
        shadow-camera-far={16}
        shadow-bias={-0.00001}
        normalBias={0.03}
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
        <meshStandardMaterial color={"#999999"} />
      </mesh>
      <gridHelper args={[8, 8]} position={[0, -0.1, 0]} />
    </>
  );
};

//!Шкаф простой
const Shkaf = () => {
  return (
    <group position={[0, 0.0039, 0]}>
      {/* задняя стенка */}
      <mesh castShadow position={[0, 1.04, 0]}>
        <boxGeometry args={[1.5, 2, 0.02]} />
        <meshStandardMaterial color={"#fff"} />
      </mesh>
      {/* Левая стенка */}
      <mesh castShadow position={[-0.76, 1.04, 0.5]}>
        <boxGeometry args={[0.02, 2, 1.02]} />
        <meshStandardMaterial color={"#666666"} />
      </mesh>
      {/* Правая стенка */}
      <mesh metalness={0.3} position={[0.76, 1.04, 0.5]}>
        <boxGeometry args={[0.02, 2, 1.02]} />
        <meshStandardMaterial color={"#666666"} />
      </mesh>
      {/* Крыша */}
      <mesh position={[0, 2 + 0.05, 0.5]}>
        <boxGeometry args={[1.5 + 0.04, 0.02, 1 + 0.02]} />
        <meshStandardMaterial color={"#666666"} />
      </mesh>
      {/* Дно */}
      <mesh castShadow position={[0, 0.02, 0.5]}>
        <boxGeometry args={[1.5 + 0.04, 0.04, 1 + 0.02]} />
        <meshStandardMaterial color={"#666666"} />
      </mesh>
      {/* Полка в центре */}
      <mesh castShadow position={[0, 1, 0.45]}>
        <boxGeometry args={[1.5, 0.04, 0.9]} />
        <meshStandardMaterial color={"#666666"} />
      </mesh>
      {/* Полка */}
      <mesh position={[0, 1.7, 0.3]}>
        <boxGeometry args={[1.5, 0.02, 0.5]} />
        <meshStandardMaterial color={"#666666"} />
      </mesh>
      {/* Дверь левая  */}
      <mesh rotation={[0, -Math.PI / 4, 0]} position={[-0.5, 1.02, 1.26]}>
        <boxGeometry args={[0.7, 2.08, 0.03]} />
        <meshStandardMaterial color={"#d1d2d3"} />
      </mesh>
    </group>
  );
};
//!Шкаф простой

export const Day5 = () => {
  return (
    <div className="day5">
      <Canvas shadows>
        <Camera />
        <Floor />
        <Shkaf />
      </Canvas>
      {/* <button className="btnday5">Вернуть камеру</button> */}
    </div>
  );
};
