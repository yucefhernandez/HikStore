import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import { useGLTF } from '@react-three/drei';

export const SecurityCamera = (props: any) => {
  const groupRef = useRef<Group>(null);

  // Load the GLB model
  // Note: Ensure the path is correct relative to the public folder or use import
  const { scene } = useGLTF('/components/UI/3D/CCVT.glb');

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating animation
      groupRef.current.position.y = props.position ? props.position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.05 : Math.sin(state.clock.elapsedTime * 0.5) * 0.05;

      // Tracking Logic
      if (typeof props.mouseX === 'number') {
        const targetRotationY = props.mouseX * 1;
        const targetRotationX = -Math.abs(props.mouseX) * 0.1;

        groupRef.current.rotation.y += (targetRotationY - groupRef.current.rotation.y) * 0.2;
        groupRef.current.rotation.x += (targetRotationX - groupRef.current.rotation.x) * 0.2;
      } else {
        // Idle scanning
        groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      }
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <primitive
        object={scene}
        scale={0.2}
        position={[-1, 0.3, 0]}
      />
    </group>
  );
};

// Preload the model
useGLTF.preload('/components/UI/3D/CCVT.glb');