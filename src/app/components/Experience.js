'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })

  const experiences = [
    {
      title: 'Backend / Cloud Developer',
      company: 'TL Innovations Ltd (R&D, UK)',
      period: 'Feb 2025 – Present',
      location: 'Remote',
      type: 'Full-time',
      description: 'Leading backend development for scalable IoT solutions and smart lighting systems.',
      achievements: [
        'Built scalable IoT backend with Node.js, Express.js, MongoDB',
        'Deployed EMQX MQTT Broker & ThingsBoard on VPS for device lifecycle & telemetry',
        'Developed backend logic for multi-hub smart lighting controllers',
        'Collaborated with firmware, iOS, and hardware teams',
        'Integrated 3D room scanning & AR/VR lighting previews'
      ],
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'MQTT', 'EMQX', 'ThingsBoard', 'VPS', 'IoT'],
      color: 'cyan'
    },
    {
      title: 'MERN Stack Developer',
      company: 'Coderatory',
      period: 'Oct 2024 – Dec 2024',
      location: 'Remote',
      type: 'Contract',
      description: 'Contributed to enterprise-level ERP systems and developed multiple full-stack applications.',
      achievements: [
        'Contributed to ERP system modules',
        'Developed Task Management & Container Booking System with Stripe integration',
        'Built Live GPS Tracking System with map-based fleet management',
        'Created Match Master Game (React + JS)',
        'Built automation website for daily routine tasks'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Stripe', 'GPS APIs', 'JavaScript'],
      color: 'purple'
    },
    {
      title: 'Full Stack Intern',
      company: 'Contour Software',
      period: 'Jun 2024 – Aug 2024',
      location: 'Karachi, Pakistan',
      type: 'Internship',
      description: '8-week intensive internship focused on real-world projects with Agile methodology.',
      achievements: [
        '8-week internship on real-world projects with Agile collaboration',
        'Worked on multiple client projects using modern web technologies',
        'Gained experience in professional software development practices',
        'Collaborated with senior developers and learned industry best practices'
      ],
      technologies: ['React', 'Node.js', 'JavaScript', 'Agile', 'Git', 'Team Collaboration'],
      color: 'pink'
    }
  ]

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
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
              Experience
            </h2>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Professional journey in backend development, full-stack solutions, and IoT systems
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-600"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-${exp.color}-400 rounded-full border-4 border-black cyber-glow-${exp.color} z-10`}></div>

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="glass p-6 rounded-2xl hover:cyber-glow transition-all duration-300"
                    >
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-center mb-2">
                          <FaBriefcase className={`w-5 h-5 text-${exp.color}-400 mr-2`} />
                          <span className={`text-${exp.color}-400 text-sm font-semibold uppercase tracking-wide`}>
                            {exp.type}
                          </span>
                        </div>
                        <h3 className="text-xl font-orbitron font-bold text-white mb-1">
                          {exp.title}
                        </h3>
                        <h4 className="text-lg text-gray-300 font-semibold mb-2">
                          {exp.company}
                        </h4>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center">
                            <FaCalendarAlt className="w-4 h-4 mr-1" />
                            {exp.period}
                          </div>
                          <div className="flex items-center">
                            <FaMapMarkerAlt className="w-4 h-4 mr-1" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h5 className="text-white font-semibold mb-2">Key Achievements:</h5>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-gray-400 text-sm flex items-start">
                              <span className={`w-1.5 h-1.5 bg-${exp.color}-400 rounded-full mr-2 mt-2 flex-shrink-0`}></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h5 className="text-white font-semibold mb-2">Technologies:</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className={`glass px-3 py-1 rounded-full text-xs text-${exp.color}-400 border border-${exp.color}-400/30`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center mt-16"
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-orbitron font-semibold text-gradient mb-4">
                Ready for New Challenges
              </h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Looking to contribute to innovative projects that push the boundaries of technology. 
                Let&apos;s build something amazing together.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block glass px-8 py-3 rounded-full text-cyan-400 font-semibold border border-cyan-400/30 hover:border-cyan-400/60 hover:cyber-glow transition-all duration-300"
              >
                Let&apos;s Connect
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  )
}
