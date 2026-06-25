"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

function FloatingShapes() {
  const torusRef = useRef<THREE.Mesh>(null);
  const icosahedronRef = useRef<THREE.Mesh>(null);
  const coneRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    const t = performance.now() / 1000;
    if (torusRef.current) torusRef.current.rotation.x = t * 0.2;
    if (icosahedronRef.current) icosahedronRef.current.rotation.y = t * 0.3;
    if (coneRef.current) coneRef.current.rotation.z = t * 0.4;
  });

  return (
    <>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh ref={torusRef} position={[-3, 1, -2]}>
          <torusGeometry args={[1, 0.3, 16, 32]} />
          <meshStandardMaterial color="#3b82f6" wireframe opacity={0.5} transparent />
        </mesh>
      </Float>
      
      <Float speed={1.5} rotationIntensity={2} floatIntensity={2}>
        <mesh ref={icosahedronRef} position={[3, 2, -5]}>
          <icosahedronGeometry args={[1.5, 0]} />
          <meshStandardMaterial color="#8b5cf6" roughness={0.1} metalness={0.8} />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={1} floatIntensity={1.5}>
        <mesh ref={coneRef} position={[2, -2, -3]}>
          <coneGeometry args={[1, 2, 16]} />
          <meshStandardMaterial color="#ec4899" wireframe opacity={0.6} transparent />
        </mesh>
      </Float>
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas className="w-full h-full pointer-events-none">
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <spotLight position={[-10, -10, -10]} intensity={2} color="#3b82f6" />
      <FloatingShapes />
      <Environment preset="city" />
    </Canvas>
  );
}
