'use client'

import { memo } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

// Dynamically import 3D scene to avoid SSR issues
const Scene3D = dynamic(() => import('./Scene3D'), { 
  ssr: false,
  loading: () => null
})

// Memoized particle component to prevent re-renders
const FloatingParticles = memo(() => {
  return (
    <>
      {[...Array(30)].map((_, i) => {
        const initialLeft = Math.random() * 100;
        const initialTop = Math.random() * 100;
        const animationDuration = 8 + (i % 4);
        const animationDelay = (i * 0.3) % 6;
        
        return (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-50"
            style={{
              left: `${initialLeft}%`,
              top: `${initialTop}%`,
            }}
            animate={{
              y: [-12, 12, -12],
              x: [-6, 6, -6],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: animationDuration,
              repeat: Infinity,
              delay: animationDelay,
              ease: "easeInOut",
              repeatType: "loop",
            }}
          />
        );
      })}
    </>
  );
});

FloatingParticles.displayName = 'FloatingParticles';

// Global Background Component
export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* 3D Scene */}
      <Scene3D />
      
      {/* Floating Particles */}
      <FloatingParticles />
    </div>
  )
}
