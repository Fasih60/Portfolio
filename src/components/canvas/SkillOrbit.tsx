"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, Billboard, Sphere, Stars } from "@react-three/drei";
import * as THREE from "three";

const skills = [
  "React", "Next.js", "Three.js", "Node.js", "TypeScript", 
  "Tailwind", "Python", "Flutter", "Docker", "Firebase",
  "MongoDB", "MySQL", "OpenAI", "Gemini", "GSAP"
];

function OrbitingSkill({ text, radius, speed, angleOffset, randomY }: { text: string, radius: number, speed: number, angleOffset: number, randomY: number }) {
  const ref = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!ref.current) return;
    const t = (performance.now() / 1000) * speed + angleOffset;
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.z = Math.sin(t) * radius;
    ref.current.position.y = randomY + Math.sin(t * 1.5) * 0.5; // slight bobbing
  });

  const width = text.length * 0.25 + 0.8;

  return (
    <group ref={ref}>
      <Billboard>
        {/* Border plane (red) */}
        <mesh position={[0, 0, -0.01]}>
          <planeGeometry args={[width + 0.05, 0.85]} />
          <meshBasicMaterial color="#dc2626" opacity={0.8} transparent />
        </mesh>
        
        {/* Background plane (dark) */}
        <mesh>
          <planeGeometry args={[width, 0.8]} />
          <meshBasicMaterial color="#0a0a0a" opacity={0.9} transparent />
        </mesh>

        {/* Text */}
        <Text position={[0, 0, 0.02]} fontSize={0.35} color="#ffffff" anchorX="center" anchorY="middle" font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjQ.ttf">
          {text}
        </Text>
      </Billboard>
    </group>
  );
}

function SkillSystem() {
  const centralRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (centralRef.current && wireframeRef.current) {
      centralRef.current.rotation.y = (performance.now() / 1000) * 0.2;
      wireframeRef.current.rotation.y = (performance.now() / 1000) * -0.1;
      wireframeRef.current.rotation.x = (performance.now() / 1000) * 0.1;
    }
  });

  return (
    <group position={[0, -0.5, 0]}>
      {/* Core Dark Sphere */}
      <Sphere ref={centralRef} args={[2.2, 32, 32]}>
        <meshStandardMaterial color="#050505" roughness={0.2} metalness={0.8} />
      </Sphere>
      
      {/* Outer Glowing Wireframe Sphere */}
      <Sphere ref={wireframeRef} args={[2.5, 12, 12]}>
        <meshBasicMaterial color="#dc2626" wireframe transparent opacity={0.3} />
      </Sphere>
      
      {/* Skill Tags */}
      {skills.map((skill, i) => {
        const radius = 4.0 + (i % 3) * 0.8; // varied radii
        const speed = 0.15 + ((i * 13) % 10) * 0.015; // deterministic speed
        const angleOffset = (i / skills.length) * Math.PI * 2;
        const randomY = ((i * 7) % 8 - 4) * 0.8; // deterministic bobbing offset
        return (
          <OrbitingSkill key={skill} text={skill} radius={radius} speed={speed} angleOffset={angleOffset} randomY={randomY} />
        );
      })}
    </group>
  );
}

export default function SkillOrbit() {
  return (
    <Canvas camera={{ position: [0, 2, 10], fov: 60 }}>
      <color attach="background" args={['#050505']} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#dc2626" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <Stars radius={50} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
      
      <SkillSystem />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} maxPolarAngle={Math.PI / 1.5} minPolarAngle={Math.PI / 3} />
    </Canvas>
  );
}
