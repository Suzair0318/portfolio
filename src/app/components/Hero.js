'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, memo } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
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

export default function Hero() {
  const [text, setText] = useState('')
  const fullText = 'Backend / Full Stack / Frontend / Cloud / IoT Developer'

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Suzair0318', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/suzair-khan-732644266', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:khansuzair1@gmail.com', label: 'Email' },
    { icon: FaPhone, href: 'tel:+923188063124', label: 'Phone' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        
        {/* 3D Scene */}
        <Scene3D />
        
        {/* Floating Particles */}
        <FloatingParticles />

      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Name */}
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold text-gradient mb-6"
          >
            SUZAIR KHAN
          </motion.h1>

          {/* Typing Animation Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="h-16 flex items-center justify-center"
          >
            <h2 className="text-lg md:text-xl lg:text-2xl font-inter text-gray-300 font-medium">
              {text}
              <span className="animate-pulse text-cyan-400">|</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Experienced in designing and deploying scalable cloud-based IoT solutions, 
            MERN stack development, and leading cross-functional teams to deliver 
            production-ready platforms.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex justify-center space-x-6 mt-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="glass p-4 rounded-full hover:cyber-glow transition-all duration-300 group"
              >
                <social.icon className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="mt-12"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block glass px-10 py-5 rounded-full text-xl font-medium text-white hover:cyber-glow transition-all duration-300 border border-cyan-400/30 hover:border-cyan-400/60"
            >
              <span className="text-gradient font-semibold">Let&apos;s Work Together</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Cyber Glow Rings */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-cyan-400/10 rounded-full"
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-purple-500/10 rounded-full"
          animate={{ rotate: -360, scale: [1, 0.9, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </section>
  )
}
