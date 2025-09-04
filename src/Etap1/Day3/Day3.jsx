import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "../style.scss";
export const Day3 = () => {
  return (
    <div className="day3">
      <Canvas shadows>
        <OrbitControls />

        <ambientLight intensity={0.5} />
        <directionalLight
          castShadow
          position={[5, 5, 5]}
          intensity={1}
          color={"#fff"}
        />

        <mesh castShadow position={[0, 0.5, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={"red"} />
        </mesh>
        {/* Пол */}
        <mesh
          receiveShadow
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, 0, 0]}
        >
          <planeGeometry args={[7, 7]} />
          <meshStandardMaterial color={"orange"} />
        </mesh>
        <gridHelper args={[8, 8]} />
      </Canvas>
    </div>
  );
};
