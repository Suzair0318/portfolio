'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaCode, FaCloud, FaRocket, FaUsers } from 'react-icons/fa'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })

  const stats = [
    { icon: FaCode, label: 'Projects Completed', value: '15+', color: 'cyan' },
    { icon: FaCloud, label: 'Cloud Solutions', value: '8+', color: 'purple' },
    { icon: FaRocket, label: 'IoT Systems', value: '5+', color: 'pink' },
    { icon: FaUsers, label: 'Teams Led', value: '3+', color: 'green' },
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gradient mb-4">
              About Me
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Description */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="glass p-8 rounded-2xl hover:cyber-glow transition-all duration-300">
                <h3 className="text-2xl font-orbitron font-semibold text-gradient mb-6">
                  Professional Summary
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Backend and Full Stack Developer with extensive experience in designing and 
                  deploying scalable cloud-based IoT solutions, including smart lighting systems 
                  and AR-based 3D environments. Proficient in the MERN stack, MQTT protocols, 
                  EMQX, and ThingsBoard platforms.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I excel at leading cross-functional teams and delivering production-ready 
                  platforms that solve real-world problems. My expertise spans from backend 
                  architecture to frontend development, with a strong focus on IoT integration 
                  and cloud technologies.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['MERN Stack', 'IoT Solutions', 'Cloud Architecture', 'Team Leadership'].map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="glass px-4 py-2 rounded-full text-sm text-cyan-400 border border-cyan-400/30"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`glass p-6 rounded-2xl text-center hover:cyber-glow-${stat.color} transition-all duration-300 group`}
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-${stat.color}-400/20 to-${stat.color}-600/20 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className={`w-6 h-6 text-${stat.color}-400`} />
                  </div>
                  <h4 className={`text-2xl font-orbitron font-bold text-${stat.color}-400 mb-2`}>
                    {stat.value}
                  </h4>
                  <p className="text-gray-400 text-sm font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Section - Key Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16"
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-xl font-orbitron font-semibold text-gradient mb-6 text-center">
                Key Achievements
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-400/20 to-cyan-600/20 flex items-center justify-center">
                    <FaCloud className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Scalable IoT Backend</h4>
                  <p className="text-gray-400 text-sm">Built robust backend systems handling thousands of IoT devices</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-400/20 to-purple-600/20 flex items-center justify-center">
                    <FaRocket className="w-8 h-8 text-purple-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">AR/VR Integration</h4>
                  <p className="text-gray-400 text-sm">Integrated 3D room scanning with AR lighting previews</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-pink-400/20 to-pink-600/20 flex items-center justify-center">
                    <FaUsers className="w-8 h-8 text-pink-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Team Leadership</h4>
                  <p className="text-gray-400 text-sm">Led cross-functional teams across firmware, iOS, and hardware</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  )
}
