import React, { useRef, useMemo } from 'react';
import { useFrame, ThreeElement } from '@react-three/fiber';
import { Group } from 'three';
import { useGLTF } from '@react-three/drei';

interface SecurityCameraProps extends Omit<ThreeElement<typeof Group>, 'ref'> {
  mouseX?: number;
}

export const SecurityCamera: React.FC<SecurityCameraProps> = ({ 
  mouseX, 
  ...props 
}) => {
  const animRef = useRef<Group>(null);
  const { scene } = useGLTF('/components/UI/3D/CCVT.glb');
  
  // Clonamos la escena para que cada instancia (Hero/Footer) tenga su propio objeto
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  useFrame((state) => {    if (animRef.current) {
      // Tracking Logic: Relative to parent group
      if (typeof mouseX === 'number' && !isNaN(mouseX)) {
        // Limitamos el rango de rotación para evitar que "desaparezca" por giros excesivos
        const targetRotationY = mouseX * 0.8; 
        const targetRotationX = -Math.abs(mouseX) * 0.15;

        // Suavizado más lento (0.05) para evitar saltos bruscos al cargar
        animRef.current.rotation.y += (targetRotationY - animRef.current.rotation.y) * 0.05;
        animRef.current.rotation.x += (targetRotationX - animRef.current.rotation.x) * 0.05;
      } else {
        // Idle scanning suave cuando no hay interacción clara
        const idleY = Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
        animRef.current.rotation.y += (idleY - animRef.current.rotation.y) * 0.05;
        animRef.current.rotation.x += (0 - animRef.current.rotation.x) * 0.05;
      }
    }
  });

  return (
    <group {...props} dispose={null}>
      <group ref={animRef}>
        <primitive object={clonedScene} />
      </group>
    </group>
  );
};

// Preload the model
useGLTF.preload('/components/UI/3D/CCVT.glb');