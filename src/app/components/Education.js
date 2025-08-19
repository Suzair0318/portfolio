'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaTrophy } from 'react-icons/fa'

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })

  const education = [
    {
      degree: 'BS Computer Science',
      institution: 'UBIT, Karachi University',
      period: '2020 - 2024',
      location: 'Karachi, Pakistan',
      status: 'Completed',
      description: 'Comprehensive computer science program covering software engineering, algorithms, databases, and system design.',
      highlights: [
        'Software Engineering & System Design',
        'Data Structures & Algorithms',
        'Database Management Systems',
        'Web Development Technologies',
        'Object-Oriented Programming'
      ],
      color: 'cyan'
    },
    {
      degree: 'Intermediate (Pre-Engineering)',
      institution: 'Govt. City College',
      period: '2018 - 2020',
      location: 'Karachi, Pakistan',
      status: 'Completed',
      description: 'Pre-engineering program with focus on mathematics, physics, and chemistry fundamentals.',
      highlights: [
        'Advanced Mathematics',
        'Physics & Applied Sciences',
        'Chemistry & Lab Work',
        'Technical Drawing',
        'Problem Solving Skills'
      ],
      color: 'purple'
    },
    {
      degree: 'Matriculation (Computer Science)',
      institution: 'The Educators',
      period: '2016 - 2018',
      location: 'Karachi, Pakistan',
      status: 'Completed',
      description: 'Secondary education with specialization in computer science and mathematics.',
      highlights: [
        'Computer Science Fundamentals',
        'Programming Basics',
        'Mathematics & Statistics',
        'English & Communication',
        'Science Foundation'
      ],
      color: 'pink'
    }
  ]

  return (
    <section id="education" className="py-20 relative overflow-hidden">
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
              Education
            </h2>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Academic foundation in computer science and engineering principles
            </p>
          </motion.div>

          {/* Education Cards */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass p-8 rounded-2xl hover:cyber-glow transition-all duration-300 group"
              >
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  {/* Left Column - Main Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r from-${edu.color}-400/20 to-${edu.color}-600/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                          <FaGraduationCap className={`w-6 h-6 text-${edu.color}-400`} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-orbitron font-bold text-white group-hover:text-gradient transition-all duration-300">
                            {edu.degree}
                          </h3>
                          <h4 className="text-lg text-gray-300 font-semibold">
                            {edu.institution}
                          </h4>
                        </div>
                      </div>
                      <div className={`px-4 py-2 rounded-full text-sm font-semibold bg-${edu.color}-400/20 text-${edu.color}-400 border border-${edu.color}-400/30`}>
                        {edu.status}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <FaCalendarAlt className="w-4 h-4 mr-2" />
                        {edu.period}
                      </div>
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="w-4 h-4 mr-2" />
                        {edu.location}
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-6">
                      {edu.description}
                    </p>

                    {/* Highlights */}
                    <div>
                      <div className="flex items-center mb-3">
                        <FaTrophy className={`w-4 h-4 text-${edu.color}-400 mr-2`} />
                        <h5 className="text-white font-semibold">Key Subjects & Skills:</h5>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {edu.highlights.map((highlight, highlightIndex) => (
                          <div key={highlightIndex} className="flex items-center text-gray-400 text-sm">
                            <span className={`w-1.5 h-1.5 bg-${edu.color}-400 rounded-full mr-3 flex-shrink-0`}></span>
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Visual Element */}
                  <div className="lg:col-span-1 flex justify-center">
                    <div className="relative">
                      <motion.div
                        className={`w-32 h-32 rounded-full border-4 border-${edu.color}-400/30 flex items-center justify-center`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 1 }}
                      >
                        <div className={`w-24 h-24 rounded-full bg-gradient-to-br from-${edu.color}-400/20 to-${edu.color}-600/20 flex items-center justify-center`}>
                          <FaGraduationCap className={`w-12 h-12 text-${edu.color}-400`} />
                        </div>
                      </motion.div>
                      <motion.div
                        className={`absolute -inset-4 border border-${edu.color}-400/10 rounded-full`}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications & Additional Learning */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16"
          >
            <div className="glass p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-orbitron font-semibold text-gradient mb-6">
                Continuous Learning
              </h3>
              <p className="text-gray-400 mb-8 max-w-3xl mx-auto">
                Beyond formal education, I continuously enhance my skills through online courses, 
                workshops, and hands-on projects. I stay updated with the latest technologies 
                and industry best practices.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-400/20 to-cyan-600/20 flex items-center justify-center">
                    <FaGraduationCap className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Online Courses</h4>
                  <p className="text-gray-400 text-sm">Completed multiple courses on modern web technologies</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-400/20 to-purple-600/20 flex items-center justify-center">
                    <FaTrophy className="w-8 h-8 text-purple-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Workshops</h4>
                  <p className="text-gray-400 text-sm">Attended industry workshops and tech conferences</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-pink-400/20 to-pink-600/20 flex items-center justify-center">
                    <FaCalendarAlt className="w-8 h-8 text-pink-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Self-Study</h4>
                  <p className="text-gray-400 text-sm">Regular self-study to stay current with technology trends</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  )
}
