import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { ComputerModel } from "./ComputerModel";
import { OrbitControls, Preload } from "@react-three/drei";

function ComputerModelContainer() {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 30 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
        />
          <ComputerModel />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}

export default ComputerModelContainer;
