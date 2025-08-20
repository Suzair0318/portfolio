'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useMemo, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import * as THREE from 'three'

// Developer Monitor Setup
function DeveloperMonitor({ position, color, speed = 1 }) {
  const meshRef = useRef()
  const screenRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002 * speed
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.6) * 0.15
    }
    if (screenRef.current) {
      // Subtle screen glow animation
      screenRef.current.material.emissiveIntensity = 0.1 + Math.sin(state.clock.elapsedTime * 2) * 0.05
    }
  })

  return (
    <group ref={meshRef} position={position}>
      {/* Monitor Stand */}
      <mesh position={[0, -1, 0]}>
        <cylinderGeometry args={[0.3, 0.4, 0.2, 8]} />
        <meshStandardMaterial 
          color="#2a2a2a" 
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      
      {/* Monitor Arm */}
      <mesh position={[0, -0.3, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 1.4, 8]} />
        <meshStandardMaterial 
          color="#2a2a2a" 
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      
      {/* Monitor Frame */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[3.5, 2, 0.2]} />
        <meshStandardMaterial 
          color="#1a1a1a" 
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      
      {/* Monitor Screen */}
      <mesh ref={screenRef} position={[0, 0.5, 0.11]}>
        <planeGeometry args={[3.2, 1.8]} />
        <meshStandardMaterial 
          color={color} 
          transparent 
          opacity={0.4}
          emissive={color}
          emissiveIntensity={0.15}
        />
      </mesh>
      
      {/* IDE Interface Elements */}
      {/* File Explorer */}
      <mesh position={[-1.3, 0.8, 0.12]}>
        <planeGeometry args={[0.6, 1.4]} />
        <meshStandardMaterial 
          color="#1e1e1e" 
          transparent 
          opacity={0.8}
        />
      </mesh>
      
      {/* Code Editor */}
      <mesh position={[0.3, 0.5, 0.12]}>
        <planeGeometry args={[2.2, 1.6]} />
        <meshStandardMaterial 
          color="#0d1117" 
          transparent 
          opacity={0.9}
        />
      </mesh>
      
      {/* Code Lines */}
      {Array.from({ length: 12 }, (_, i) => (
        <mesh 
          key={i}
          position={[-0.5 + (i % 3) * 0.1, 1.1 - i * 0.12, 0.13]}
        >
          <boxGeometry args={[1.8 - (i % 4) * 0.2, 0.02, 0.01]} />
          <meshStandardMaterial 
            color={i % 3 === 0 ? '#ff6b6b' : i % 3 === 1 ? '#4ecdc4' : '#45b7d1'} 
            transparent 
            opacity={0.9}
            emissive={i % 3 === 0 ? '#ff6b6b' : i % 3 === 1 ? '#4ecdc4' : '#45b7d1'}
            emissiveIntensity={0.2}
          />
        </mesh>
      ))}
    </group>
  )
}

// Realistic Developer Laptop
function RealisticLaptop({ position, color, speed = 1 }) {
  const meshRef = useRef()
  const screenRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003 * speed
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.8) * 0.2
    }
    if (screenRef.current) {
      // Subtle screen animation
      screenRef.current.rotation.x = -0.3 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05
    }
  })

  return (
    <group ref={meshRef} position={position}>
      {/* Laptop Base/Keyboard */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3, 0.15, 2]} />
        <meshStandardMaterial 
          color="#1a1a1a" 
          transparent 
          opacity={0.9}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      
      {/* Keyboard Keys */}
      {Array.from({ length: 48 }, (_, i) => {
        const row = Math.floor(i / 12)
        const col = i % 12
        return (
          <mesh 
            key={i}
            position={[-1.3 + col * 0.22, 0.08, -0.6 + row * 0.3]}
          >
            <boxGeometry args={[0.18, 0.05, 0.18]} />
            <meshStandardMaterial 
              color={color} 
              transparent 
              opacity={0.7}
              emissive={color}
              emissiveIntensity={0.1}
            />
          </mesh>
        )
      })}
      
      {/* Laptop Screen */}
      <group ref={screenRef} position={[0, 0.8, -0.9]}>
        <mesh>
          <boxGeometry args={[2.8, 1.8, 0.1]} />
          <meshStandardMaterial 
            color="#0a0a0a" 
            transparent 
            opacity={0.95}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
        
        {/* Screen Display */}
        <mesh position={[0, 0, 0.06]}>
          <planeGeometry args={[2.6, 1.6]} />
          <meshStandardMaterial 
            color={color} 
            transparent 
            opacity={0.3}
            emissive={color}
            emissiveIntensity={0.2}
          />
        </mesh>
        
        {/* Code Lines on Screen */}
        {Array.from({ length: 8 }, (_, i) => (
          <mesh 
            key={i}
            position={[-0.8 + (i % 2) * 0.4, 0.5 - i * 0.12, 0.07]}
          >
            <boxGeometry args={[1.0 - (i % 3) * 0.2, 0.02, 0.01]} />
            <meshStandardMaterial 
              color={color} 
              transparent 
              opacity={0.8}
              emissive={color}
              emissiveIntensity={0.3}
            />
          </mesh>
        ))}
      </group>
    </group>
  )
}

// Particle System
function ParticleSystem() {
  const pointsRef = useRef()
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(200 * 3)
    for (let i = 0; i < 200; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return positions
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.001
      pointsRef.current.rotation.x += 0.0005
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={200}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        color="#00ffff" 
        size={0.02} 
        transparent 
        opacity={0.6}
      />
    </points>
  )
}

// Main 3D Scene
function Scene({ scrollOffset = 0 }) {
  const groupRef = useRef()
  
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = scrollOffset * 0.001
      groupRef.current.position.y = Math.sin(scrollOffset * 0.002) * 0.5
    }
  })

  return (
    <group ref={groupRef} scale={0.75} position={[0, -0.5, 0]}>
      {/* Enhanced Lighting for Better Visibility */}
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#00ffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.6} color="#ff00ff" />
      <pointLight position={[0, 5, 5]} intensity={0.4} color="#8b5cf6" />
      
      {/* Realistic Developer 3D Objects - Closer and More Visible */}
      <DeveloperMonitor position={[-7, 0, -3]} color="#00ffff" speed={0.8} />
   
      <group position={[7, 0, -3]} rotation={[0.5, -0.8, 0]}>
        <RealisticLaptop position={[0, 0, 0]} color="#4ecdc4" speed={0.9} />
      </group>
      
      {/* Particle System */}
      <ParticleSystem />
    </group>
  )
}

// Scroll-responsive 3D Scene Component
export default function Scene3D() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ 
          position: [0, 0, 8], 
          fov: 60,
          near: 0.1,
          far: 1000
        }}
        style={{ 
          background: 'transparent',
          zIndex: 1,
          transform: `translateY(${scrollY * 0.3}px) rotateX(${scrollY * 0.01}deg)`
        }}
      >
        <Scene scrollOffset={scrollY} />
      </Canvas>
    </div>
  )
}
