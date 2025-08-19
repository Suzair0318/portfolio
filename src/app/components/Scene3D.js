'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useMemo, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import * as THREE from 'three'

// Animated 3D Torus
function AnimatedTorus({ position, color, speed = 1 }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01 * speed
      meshRef.current.rotation.y += 0.01 * speed
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[1, 0.3, 16, 100]} />
      <meshStandardMaterial 
        color={color} 
        transparent 
        opacity={0.6}
        wireframe={true}
      />
    </mesh>
  )
}

// Animated 3D Sphere
function AnimatedSphere({ position, color, speed = 1 }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005 * speed
      meshRef.current.rotation.z += 0.005 * speed
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * speed * 0.5) * 0.3
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial 
        color={color} 
        transparent 
        opacity={0.4}
        wireframe={true}
      />
    </mesh>
  )
}

// Animated 3D Box
function AnimatedBox({ position, color, speed = 1 }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.008 * speed
      meshRef.current.rotation.y += 0.008 * speed
      meshRef.current.position.z = position[2] + Math.sin(state.clock.elapsedTime * speed * 0.8) * 0.4
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1.2, 1.2, 1.2]} />
      <meshStandardMaterial 
        color={color} 
        transparent 
        opacity={0.5}
        wireframe={true}
      />
    </mesh>
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
    <group ref={groupRef}>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#00ffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#ff00ff" />
      
      {/* 3D Objects */}
      <AnimatedTorus position={[-3, 0, -2]} color="#00ffff" speed={0.8} />
      <AnimatedSphere position={[3, -1, -3]} color="#ff00ff" speed={1.2} />
      <AnimatedBox position={[0, 2, -4]} color="#8b5cf6" speed={1} />
      
      {/* Additional smaller objects */}
      <AnimatedTorus position={[4, 3, -5]} color="#00ffff" speed={1.5} />
      <AnimatedSphere position={[-4, -2, -6]} color="#8b5cf6" speed={0.7} />
      
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
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ 
          position: [0, 0, 5], 
          fov: 75,
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
