import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "../style.scss";
export const Day2 = () => {
  return (
    <div className={style.day2}>
      <div>
        <Canvas style={{ height: "700px", width: "1100px" }}>
          <OrbitControls />

          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 5, 3]} intensity={1} />
          {/* Пол */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
            <planeGeometry args={[4, 4]} />
            <meshStandardMaterial color={"gray"} />
          </mesh>
          {/* Куб */}
          <mesh position={[0, 0.25, 0]}>
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <meshStandardMaterial color={"blue"} />
          </mesh>
          {/* Задняя стена Белая */}
          <mesh position={[0, 1, -2]}>
            <boxGeometry args={[4, 2, 0.01]} />
            <meshStandardMaterial color={"white"} />
          </mesh>
          {/* Левая стенка */}
          <mesh position={[-2 - 0.005, 1, 0]}>
            <boxGeometry args={[0.01, 2, 4 + 0.01]} />
            <meshStandardMaterial color={"#555"} />
          </mesh>
          {/* Правая стенка */}
          <mesh position={[2 + 0.005, 1, 0]}>
            <boxGeometry args={[0.01, 2, 4 + 0.01]} />
            <meshStandardMaterial color={"#555"} />
          </mesh>
          {/* Потолок белый */}
          <mesh position={[0, 2 + 0.01, 0]}>
            <boxGeometry args={[4 + 0.02, 0.02, 4 + 0.01]} />
            <meshStandardMaterial color={"#fff"} />
          </mesh>
        </Canvas>
      </div>
    </div>
  );
};
