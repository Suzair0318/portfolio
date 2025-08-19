'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  FaNodeJs, FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, 
  FaDocker, FaDatabase, FaCloud, FaServer 
} from 'react-icons/fa'
import { 
  SiExpress, SiMongodb, SiPostgresql, SiMysql, SiRedis, 
  SiTailwindcss, SiBootstrap, SiMaterialdesign, SiNextdotjs,
  SiSocketdotio, SiPostman, SiMqtt
} from 'react-icons/si'

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })

  const skillCategories = [
    {
      title: 'Backend',
      dotColor: 'bg-cyan-400',
      textColor: 'text-cyan-400',
      gradientColor: 'from-cyan-400 to-cyan-600',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, level: 95 },
        { name: 'Express.js', icon: SiExpress, level: 90 },
        { name: 'REST APIs', icon: FaServer, level: 92 },
        { name: 'WebSocket', icon: SiSocketdotio, level: 85 },
        { name: 'Socket.io', icon: SiSocketdotio, level: 88 },
      ]
    },
    {
      title: 'Frontend',
      dotColor: 'bg-purple-400',
      textColor: 'text-purple-400',
      gradientColor: 'from-purple-400 to-purple-600',
      skills: [
        { name: 'React.js', icon: FaReact, level: 92 },
        { name: 'Next.js', icon: SiNextdotjs, level: 88 },
        { name: 'JavaScript', icon: FaJs, level: 94 },
        { name: 'HTML5', icon: FaHtml5, level: 96 },
        { name: 'CSS3', icon: FaCss3Alt, level: 90 },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 92 },
        { name: 'Bootstrap', icon: SiBootstrap, level: 85 },
        { name: 'Material UI', icon: SiMaterialdesign, level: 80 },
      ]
    },
    {
      title: 'Databases',
      dotColor: 'bg-pink-400',
      textColor: 'text-pink-400',
      gradientColor: 'from-pink-400 to-pink-600',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, level: 90 },
        { name: 'PostgreSQL', icon: SiPostgresql, level: 85 },
        { name: 'MySQL', icon: SiMysql, level: 82 },
        { name: 'Redis', icon: SiRedis, level: 78 },
      ]
    },
    {
      title: 'DevOps & Tools',
      dotColor: 'bg-green-400',
      textColor: 'text-green-400',
      gradientColor: 'from-green-400 to-green-600',
      skills: [
        { name: 'Docker', icon: FaDocker, level: 85 },
        { name: 'Git', icon: FaGitAlt, level: 92 },
        { name: 'Postman', icon: SiPostman, level: 88 },
        { name: 'CI/CD', icon: FaCloud, level: 80 },
      ]
    },
    {
      title: 'IoT & Protocols',
      dotColor: 'bg-yellow-400',
      textColor: 'text-yellow-400',
      gradientColor: 'from-yellow-400 to-yellow-600',
      skills: [
        { name: 'MQTT', icon: SiMqtt, level: 88 },
        { name: 'EMQX', icon: FaServer, level: 85 },
        { name: 'ThingsBoard', icon: FaDatabase, level: 82 },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
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
              Technical Skills
            </h2>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Comprehensive expertise across modern web technologies, cloud platforms, and IoT systems
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.4 + categoryIndex * 0.1 }}
                className="glass p-6 rounded-2xl hover:cyber-glow transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-3 h-3 ${category.dotColor} rounded-full mr-3 animate-pulse`}></div>
                  <h3 className="text-xl font-orbitron font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <skill.icon className={`w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300 ${category.textColor}`} />
                          <span className="text-gray-300 font-medium">{skill.name}</span>
                        </div>
                        <span className={`text-sm font-semibold ${category.textColor}`}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${category.gradientColor}`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1.5, 
                            delay: 0.8 + categoryIndex * 0.1 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-orbitron font-semibold text-gradient mb-8">
              Additional Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Redux Toolkit', 'React Router', 'React Hook Form', 'Axios', 
                'Framer Motion', 'GSAP', 'Context API', 'Zustand', 
                'React Query', 'SWR', 'GitHub Actions', 'ShadCN'
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: 1.4 + index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="glass px-4 py-2 rounded-full text-sm text-gray-300 border border-gray-600 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  )
}
