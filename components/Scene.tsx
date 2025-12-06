import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Add missing types for intrinsic elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: any;
      pointLight: any;
    }
  }
}

const MovingSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime();
      meshRef.current.rotation.x = t * 0.1;
      meshRef.current.rotation.y = t * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere args={[1, 64, 64]} scale={2.2} ref={meshRef}>
        <MeshDistortMaterial
          color="#6d1b23"
          attach="material"
          distort={0.4} // Strength, 0 disables the effect (default=1)
          speed={1.5} // Speed (default=1)
          roughness={0.2}
          metalness={0.8}
          bumpScale={0.005}
        />
      </Sphere>
    </Float>
  );
};

const Scene: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full -z-10 opacity-60">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#fff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#6d1b23" />
        
        <MovingSphere />
        
        <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
      </Canvas>
    </div>
  );
};

export default Scene;