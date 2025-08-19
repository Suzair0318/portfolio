'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaMobile, FaGamepad } from 'react-icons/fa'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })
  const [activeFilter, setActiveFilter] = useState('All')

  const filters = ['All', 'IoT', 'Full Stack', 'Frontend', 'Backend', 'Games']

  const projects = [
    {
      title: 'Smart Lighting IoT System',
      description: 'Scalable IoT backend with multi-hub smart lighting controllers, MQTT broker integration, and AR/VR lighting previews.',
      category: 'IoT',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'MQTT', 'EMQX', 'ThingsBoard', 'AR/VR'],
      image: '/api/placeholder/400/250',
      github: '#',
      demo: '#',
      color: 'cyan'
    },
    {
      title: 'ERP System Modules',
      description: 'Enterprise-level ERP system with task management, container booking, and Stripe payment integration.',
      category: 'Full Stack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Stripe API'],
      image: '/api/placeholder/400/250',
      github: '#',
      demo: '#',
      color: 'purple'
    },
    {
      title: 'Live GPS Tracking System',
      description: 'Real-time fleet management system with map-based GPS tracking and route optimization.',
      category: 'Full Stack',
      technologies: ['React', 'Node.js', 'GPS APIs', 'Socket.io', 'Maps Integration'],
      image: '/api/placeholder/400/250',
      github: '#',
      demo: '#',
      color: 'green'
    },
    {
      title: 'Match Master Game',
      description: 'Interactive web-based game built with React and vanilla JavaScript with engaging gameplay mechanics.',
      category: 'Games',
      technologies: ['React', 'JavaScript', 'CSS3', 'Game Logic'],
      image: '/api/placeholder/400/250',
      github: '#',
      demo: '#',
      color: 'pink'
    },
    {
      title: 'Task Automation Website',
      description: 'Daily routine automation platform to streamline workflows and increase productivity.',
      category: 'Full Stack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Automation APIs'],
      image: '/api/placeholder/400/250',
      github: '#',
      demo: '#',
      color: 'yellow'
    },
    {
      title: 'Container Booking System',
      description: 'Comprehensive booking system for container logistics with payment processing and tracking.',
      category: 'Backend',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'Stripe', 'REST APIs'],
      image: '/api/placeholder/400/250',
      github: '#',
      demo: '#',
      color: 'cyan'
    }
  ]

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
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
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Showcasing innovative solutions across IoT, full-stack development, and modern web applications
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {filters.map((filter, index) => (
              <motion.button
                key={filter}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'glass cyber-glow text-cyan-400 border border-cyan-400/50'
                    : 'glass text-gray-400 border border-gray-600 hover:border-cyan-400/30 hover:text-cyan-400'
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass rounded-2xl overflow-hidden hover:cyber-glow transition-all duration-300 group"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br from-${project.color}-500/20 to-${project.color}-700/20`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-16 h-16 rounded-full bg-${project.color}-400/20 flex items-center justify-center`}>
                      {project.category === 'IoT' && <FaServer className={`w-8 h-8 text-${project.color}-400`} />}
                      {project.category === 'Full Stack' && <FaCode className={`w-8 h-8 text-${project.color}-400`} />}
                      {project.category === 'Frontend' && <FaMobile className={`w-8 h-8 text-${project.color}-400`} />}
                      {project.category === 'Backend' && <FaServer className={`w-8 h-8 text-${project.color}-400`} />}
                      {project.category === 'Games' && <FaGamepad className={`w-8 h-8 text-${project.color}-400`} />}
                    </div>
                  </div>
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-${project.color}-400/20 text-${project.color}-400 border border-${project.color}-400/30`}>
                    {project.category}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-orbitron font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="glass px-2 py-1 rounded text-xs text-gray-300 border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs text-gray-500">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-gray-300 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-300"
                    >
                      <FaGithub className="w-4 h-4" />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-${project.color}-400 border border-${project.color}-400/30 hover:cyber-glow-${project.color} transition-all duration-300`}
                    >
                      <FaExternalLinkAlt className="w-3 h-3" />
                      Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* More Projects CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center mt-16"
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-orbitron font-semibold text-gradient mb-4">
                More Projects Coming Soon
              </h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                I&apos;m constantly working on new and exciting projects. Check out my GitHub for the latest updates 
                and contributions to open-source projects.
              </p>
              <motion.a
                href="https://github.com/Suzair0318"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 glass px-8 py-3 rounded-full text-cyan-400 font-semibold border border-cyan-400/30 hover:border-cyan-400/60 hover:cyber-glow transition-all duration-300"
              >
                <FaGithub className="w-5 h-5" />
                View All Projects
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-cyan-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-purple-500/3 rounded-full blur-3xl"></div>
        <div className="absolute top-2/3 left-1/2 w-48 h-48 bg-pink-500/3 rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}
