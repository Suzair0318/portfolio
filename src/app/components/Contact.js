'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'khansuzair1@gmail.com',
      href: 'mailto:khansuzair1@gmail.com',
      color: 'cyan'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+92 318 8063124',
      href: 'tel:+923188063124',
      color: 'purple'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Karachi, Pakistan',
      href: '#',
      color: 'pink'
    }
  ]

  const socialLinks = [
    {
      icon: FaGithub,
      label: 'GitHub',
      href: 'https://github.com/Suzair0318',
      color: 'cyan'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/suzair-khan-732644266',
      color: 'purple'
    }
  ]

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
      alert('Message sent successfully!')
    }, 2000)
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
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
              Get In Touch
            </h2>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let&apos;s discuss your next project and create something amazing together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="glass p-8 rounded-2xl">
                <h3 className="text-2xl font-orbitron font-semibold text-gradient mb-6">
                  Let&apos;s Connect
                </h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                  I&apos;m always excited to work on innovative projects and collaborate with talented teams. 
                  Whether you have a project in mind or just want to say hello, feel free to reach out!
                </p>

                {/* Contact Information */}
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 10 }}
                      className="flex items-center p-4 glass rounded-xl hover:cyber-glow transition-all duration-300 group"
                    >
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r from-${info.color}-400/20 to-${info.color}-600/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon className={`w-6 h-6 text-${info.color}-400`} />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{info.label}</p>
                        <p className="text-white font-medium">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-gray-700">
                  <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        whileHover={{ scale: 1.2, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className={`glass p-4 rounded-full hover:cyber-glow-${social.color} transition-all duration-300 group`}
                      >
                        <social.icon className={`w-6 h-6 text-gray-400 group-hover:text-${social.color}-400 transition-colors duration-300`} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="glass p-8 rounded-2xl">
                <h3 className="text-2xl font-orbitron font-semibold text-gradient mb-6">
                  Send Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.8 }}
                  >
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 glass rounded-xl border border-gray-600 focus:border-cyan-400 focus:cyber-glow transition-all duration-300 bg-transparent text-white placeholder-gray-400"
                      placeholder="Your full name"
                    />
                  </motion.div>

                  {/* Email Input */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.9 }}
                  >
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 glass rounded-xl border border-gray-600 focus:border-cyan-400 focus:cyber-glow transition-all duration-300 bg-transparent text-white placeholder-gray-400"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>

                  {/* Subject Input */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 1.0 }}
                  >
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 glass rounded-xl border border-gray-600 focus:border-cyan-400 focus:cyber-glow transition-all duration-300 bg-transparent text-white placeholder-gray-400"
                      placeholder="Project discussion"
                    />
                  </motion.div>

                  {/* Message Textarea */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 1.1 }}
                  >
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 glass rounded-xl border border-gray-600 focus:border-cyan-400 focus:cyber-glow transition-all duration-300 bg-transparent text-white placeholder-gray-400 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 1.2 }}
                  >
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-3 glass px-8 py-4 rounded-xl text-cyan-400 font-semibold border border-cyan-400/30 hover:border-cyan-400/60 hover:cyber-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </motion.div>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-16 text-center"
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-orbitron font-semibold text-gradient mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                I&apos;m available for freelance work and full-time opportunities. Let&apos;s discuss how we can 
                bring your vision to life with cutting-edge technology and innovative solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a
                  href="mailto:khansuzair1@gmail.com"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass px-8 py-3 rounded-full text-cyan-400 font-semibold border border-cyan-400/30 hover:border-cyan-400/60 hover:cyber-glow transition-all duration-300"
                >
                  Email Me Directly
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/suzair-khan-732644266"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass px-8 py-3 rounded-full text-purple-400 font-semibold border border-purple-400/30 hover:border-purple-400/60 hover:cyber-glow-purple transition-all duration-300"
                >
                  Connect on LinkedIn
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  )
}
