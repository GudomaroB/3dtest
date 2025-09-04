import "../style.scss";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export const Day1 = () => {
  return (
    <div className={styles.wrapper}>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight />
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
          <planeGeometry args={[5, 5]} />
          <meshStandardMaterial color={"BLUE"} />
        </mesh>
        <mesh position={[0, 0.7, 2]} rotation={[0, 0.5, Math.PI / 4]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={"orange"} />
        </mesh>
      </Canvas>
    </div>
  );
};
