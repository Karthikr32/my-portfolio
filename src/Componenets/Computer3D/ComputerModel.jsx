import React from "react";
import { useGLTF } from "@react-three/drei";

export function ComputerModel() {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <group>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={0.72}
        position={[0, -1.55, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </group>
  );
}

useGLTF.preload("./desktop_pc/scene.gltf");
