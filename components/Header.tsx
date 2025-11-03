'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/95 backdrop-blur-md'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="/"
            aria-label="Darasoft"
            className="flex items-center"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Image
              src="/logo-darasoft.png"
              alt="Darasoft"
              width={80}
              height={58}
              priority
            />
          </motion.a>
          <div className="hidden md:flex items-center space-x-8">
            {['Услуги', 'Портфолио', 'Процесс'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item === 'Услуги' ? 'services' : item === 'Портфолио' ? 'portfolio' : 'process'}`}
                className={`transition-colors ${
                  scrolled
                    ? 'text-gray-700 hover:text-primary-600'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(59, 130, 246, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              Связаться
            </motion.a>
          </div>
          <motion.button
            className={`md:hidden transition-colors ${
              scrolled ? 'text-gray-700' : 'text-gray-700'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </motion.button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container mx-auto px-6 py-4 space-y-4">
              <motion.a
                href="#services"
                className="block text-gray-700 hover:text-primary-600"
                whileHover={{ x: 5 }}
              >
                Услуги
              </motion.a>
              <motion.a
                href="#portfolio"
                className="block text-gray-700 hover:text-primary-600"
                whileHover={{ x: 5 }}
              >
                Портфолио
              </motion.a>
              <motion.a
                href="#process"
                className="block text-gray-700 hover:text-primary-600"
                whileHover={{ x: 5 }}
              >
                Процесс
              </motion.a>
              <motion.a
                href="#contact"
                className="block bg-primary-600 text-white px-6 py-2 rounded-lg text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Связаться
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}