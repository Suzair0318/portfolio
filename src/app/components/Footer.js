'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaCode } from 'react-icons/fa'
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiTailwindcss, 
  SiFramer, SiExpress, SiPostgresql, SiDocker, SiGit 
} from 'react-icons/si'

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Suzair0318', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/suzair-khan-732644266', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:khansuzair1@gmail.com', label: 'Email' },
  ]

  const techStack = [
    { icon: SiReact, name: 'React', color: 'cyan' },
    { icon: SiNextdotjs, name: 'Next.js', color: 'white' },
    { icon: SiNodedotjs, name: 'Node.js', color: 'green' },
    { icon: SiMongodb, name: 'MongoDB', color: 'green' },
    { icon: SiTailwindcss, name: 'Tailwind', color: 'cyan' },
    { icon: SiFramer, name: 'Framer Motion', color: 'purple' },
    { icon: SiExpress, name: 'Express.js', color: 'gray' },
    { icon: SiPostgresql, name: 'PostgreSQL', color: 'blue' },
    { icon: SiDocker, name: 'Docker', color: 'blue' },
    { icon: SiGit, name: 'Git', color: 'orange' },
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="relative overflow-hidden bg-black/50 backdrop-blur-sm border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="mb-6">
                <h3 className="text-3xl font-orbitron font-bold text-gradient mb-4">
                  SUZAIR KHAN
                </h3>
                <p className="text-gray-400 leading-relaxed max-w-md">
                  Backend and Full Stack Developer passionate about creating scalable solutions 
                  and innovative IoT systems. Always ready to tackle new challenges and build 
                  amazing digital experiences.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mb-8">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="glass p-3 rounded-full hover:cyber-glow transition-all duration-300 group"
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Built With</h4>
                <div className="flex flex-wrap gap-3">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: 0.6 + index * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="glass px-3 py-2 rounded-full flex items-center gap-2 hover:cyber-glow transition-all duration-300 group"
                    >
                      <tech.icon className={`w-4 h-4 text-gray-400 group-hover:text-${tech.color}-400 transition-colors duration-300`} />
                      <span className="text-xs text-gray-400 group-hover:text-white transition-colors duration-300">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.6 + index * 0.05 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Get In Touch</h4>
              <div className="space-y-4">
                <div className="flex items-center text-gray-400">
                  <FaEnvelope className="w-4 h-4 mr-3 text-cyan-400" />
                  <a 
                    href="mailto:khansuzair1@gmail.com"
                    className="hover:text-cyan-400 transition-colors duration-300"
                  >
                    khansuzair1@gmail.com
                  </a>
                </div>
                <div className="flex items-center text-gray-400">
                  <FaCode className="w-4 h-4 mr-3 text-purple-400" />
                  <span>Available for freelance work</span>
                </div>
                <div className="glass p-4 rounded-xl mt-6">
                  <p className="text-sm text-gray-400 leading-relaxed">
                    "Building the future, one line of code at a time. Let's create something extraordinary together."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="border-t border-gray-800 mt-12 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center text-gray-400 text-sm">
                <span>© 2025 Suzair Khan. Made with</span>
                <FaHeart className="w-4 h-4 mx-2 text-red-500 animate-pulse" />
                <span>and lots of coffee ☕</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>Designed & Developed by Suzair Khan</span>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span>Powered by Next.js</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Cyber Grid Pattern */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-5 pointer-events-none"></div>
    </footer>
  )
}
