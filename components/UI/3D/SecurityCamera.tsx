import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

export const SecurityCamera = (props: any) => {
  const groupRef = useRef<Group>(null);
  const pivotRef = useRef<Group>(null); // For rotating just the camera head
  
  useFrame((state) => {
    if (groupRef.current && pivotRef.current) {
      // Gentle floating animation for the whole rig
      groupRef.current.position.y = props.position ? props.position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.05 : Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
      
      // Intelligent Tracking Logic
      if (typeof props.mouseX === 'number') {
         // Smoothly look at mouse position
         // We clamp the rotation to avoid breaking the "neck"
         const targetRotationY = props.mouseX * 0.6; 
         const targetRotationX = -Math.abs(props.mouseX) * 0.1;

         pivotRef.current.rotation.y += (targetRotationY - pivotRef.current.rotation.y) * 0.05;
         pivotRef.current.rotation.x += (targetRotationX - pivotRef.current.rotation.x) * 0.05;
      } else {
         // Idle scanning animation
         pivotRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      }
    }
  });

  // Material Constants
  const bodyMaterial = (
    <meshPhysicalMaterial 
        color="#f3f4f6" 
        roughness={0.4} 
        metalness={0.1} 
        clearcoat={0.1}
        clearcoatRoughness={0.1}
    />
  );

  const blackPlasticMaterial = (
    <meshStandardMaterial 
        color="#111827" 
        roughness={0.2} 
        metalness={0.5} 
    />
  );

  const glassMaterial = (
    <meshPhysicalMaterial 
        color="#000000" 
        roughness={0.0} 
        metalness={0.9} 
        transmission={0}
        clearcoat={1}
        clearcoatRoughness={0}
        envMapIntensity={1.5}
    />
  );

  const chromeMaterial = (
    <meshStandardMaterial 
        color="#ffffff" 
        roughness={0.1} 
        metalness={0.9} 
    />
  );

  const brandRingMaterial = (
    <meshStandardMaterial 
        color="#D71920" 
        roughness={0.2} 
        metalness={0.6} 
        emissive="#7f090d"
        emissiveIntensity={0.2}
    />
  );

  return (
    <group ref={groupRef} {...props} dispose={null}>
      
      {/* --- MOUNTING SYSTEM (Static Base) --- */}
      {/* Moved to the left relative to center (0,0,0) */}
      <group position={[-0.8, 0, 0]}>
        {/* Wall Plate */}
        <mesh rotation={[0, 0, Math.PI / 2]} position={[-0.2, 0, 0]}>
             <cylinderGeometry args={[0.4, 0.4, 0.1, 32]} />
             {bodyMaterial}
        </mesh>
        
        {/* Arm Stem */}
        <mesh position={[0.4, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
             <cylinderGeometry args={[0.15, 0.25, 0.8, 32]} />
             {bodyMaterial}
        </mesh>

        {/* Elbow Joint (Connection to Pivot) */}
        <mesh position={[0.8, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
             <cylinderGeometry args={[0.22, 0.22, 0.5, 32]} />
             {bodyMaterial}
        </mesh>
      </group>


      {/* --- ROTATING HEAD (The Camera) --- */}
      {/* Pivot point is now exactly at (0,0,0) for clean rotation */}
      <group position={[0, 0, 0]} ref={pivotRef}>
        
        {/* Neck Connection */}
        <mesh position={[-0.2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
             <cylinderGeometry args={[0.18, 0.18, 0.4, 32]} />
             {bodyMaterial}
        </mesh>

        {/* Main Body Housing */}
        {/* Extends towards +X from the pivot */}
        <group position={[0.8, 0, 0]}>
             {/* Main Cylinder */}
             <mesh rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.55, 0.6, 1.8, 64]} />
                {bodyMaterial}
             </mesh>
             
             {/* Back Cap */}
             <mesh position={[-0.9, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.6, 0.55, 0.1, 64]} />
                {bodyMaterial}
             </mesh>
             
             {/* HikVision Red Brand Ring */}
             <mesh position={[0.4, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.56, 0.56, 0.08, 64]} />
                {brandRingMaterial}
             </mesh>

             {/* Sun Shield (The "Hat") */}
             <mesh position={[0.1, 0.35, 0]}>
                <boxGeometry args={[1.9, 0.1, 1.3]} />
                {bodyMaterial}
             </mesh>
             <mesh position={[0.1, 0.3, 0]} rotation={[0, 0, Math.PI / 2]}>
                 <cylinderGeometry args={[0.65, 0.65, 1.9, 64, 1, true, 0, Math.PI]} />
                 <meshPhysicalMaterial color="#f3f4f6" side={2} roughness={0.4} />
             </mesh>


             {/* --- FACEPLATE (Lens) --- */}
             <group position={[0.9, 0, 0]}>
                {/* Black Ring Housing */}
                <mesh rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.52, 0.55, 0.05, 64]} />
                    {blackPlasticMaterial}
                </mesh>

                {/* The Lens Glass (Dome) */}
                <mesh position={[0.05, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                    <sphereGeometry args={[0.25, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.3]} />
                    {glassMaterial}
                </mesh>

                {/* Inner Lens Hardware */}
                <mesh position={[0.02, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.15, 0.1, 0.1, 32]} />
                    <meshStandardMaterial color="#000022" metalness={0.8} roughness={0.2} />
                </mesh>

                {/* Infrared LEDs Ring */}
                {Array.from({ length: 8 }).map((_, i) => {
                    const angle = (i / 8) * Math.PI * 2;
                    const radius = 0.38;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    return (
                        <mesh key={i} position={[0.02, x, y]} rotation={[0, 0, Math.PI / 2]}>
                            <cylinderGeometry args={[0.03, 0.03, 0.02, 16]} />
                            <meshStandardMaterial 
                                color="#333" 
                                emissive="#ff0000" 
                                emissiveIntensity={0.1} 
                                toneMapped={false}
                            />
                        </mesh>
                    );
                })}
                
                {/* Status LED */}
                <mesh position={[0.03, 0.25, 0.25]} rotation={[0, 0, Math.PI / 2]}>
                     <cylinderGeometry args={[0.015, 0.015, 0.02, 16]} />
                     <meshBasicMaterial color="#22c55e" />
                </mesh>
             </group>
        </group>
        
        {/* Antennas */}
        <group position={[0, 0.6, -0.4]} rotation={[0, 0, -0.2]}>
            <mesh position={[0, 0.3, 0]}>
                <cylinderGeometry args={[0.02, 0.02, 0.6, 8]} />
                {blackPlasticMaterial}
            </mesh>
            <mesh position={[0, 0, 0]}>
                 <sphereGeometry args={[0.05]} />
                 {blackPlasticMaterial}
            </mesh>
        </group>

      </group>
    </group>
  );
};