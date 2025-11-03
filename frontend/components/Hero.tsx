'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [dimensions, setDimensions] = useState({ width: 1000, height: 800 })
  const [typedText, setTypedText] = useState('')

  // Typewriter config
  const typewriterPrefix = 'Превращаем ваши идеи в '
  const typewriterTarget =
    'мощные цифровые решения. Опытная команда разработчиков, современные технологии, результат, который работает.'

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight })
  }, [])

  // Looping typewriter: type → pause → delete → pause → repeat
  useEffect(() => {
    let isCancelled = false
    let currentIndex = 0
    let deleting = false
    const full = typewriterTarget

    const step = () => {
      if (isCancelled) return

      // Compute next text
      if (!deleting) {
        currentIndex = Math.min(full.length, currentIndex + 1)
      } else {
        currentIndex = Math.max(0, currentIndex - 1)
      }

      setTypedText(full.slice(0, currentIndex))

      // Decide next delay
      let delay = deleting ? 18 + Math.random() * 30 : 22 + Math.random() * 55

      // Pause at edges
      if (currentIndex === full.length && !deleting) {
        delay = 1200
        deleting = true
      } else if (currentIndex === 0 && deleting) {
        delay = 600
        deleting = false
      }

      timeoutId = window.setTimeout(step, delay)
    }

    let timeoutId: number | undefined = window.setTimeout(step, 400)
    return () => {
      isCancelled = true
      if (timeoutId) window.clearTimeout(timeoutId)
    }
  }, [])
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 1.11, 0.81, 0.99],
      },
    },
  }

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="relative min-h-[110vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 pt-24 pb-20">
      {/* Анимированный фон */}
      <motion.div
        className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      {/* Плавающие частицы */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * dimensions.width,
              y: Math.random() * dimensions.height,
            }}
            animate={{
              y: [null, Math.random() * dimensions.height],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center text-white"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Разработка программного
            <motion.span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200"
              animate={{
                backgroundPosition: ['0%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              обеспечения, которая меняет бизнес
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto"
          >
            {typewriterPrefix}
            <span className="text-white">{typedText}</span>
            <span
              aria-hidden="true"
              className="align-[-2px] ml-1 inline-block w-[2px] h-6 bg-white/90 animate-pulse"
            />
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg shadow-xl"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
              whileTap={{ scale: 0.95 }}
            >
              Обсудить проект
            </motion.a>
            <motion.a
              href="#portfolio"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg"
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)', scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Посмотреть работы
            </motion.a>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { number: '30+', label: 'Реализованных проектов' },
              { number: '20+', label: 'Довольных клиентов' },
              { number: '3+', label: 'Лет опыта' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={statsVariants}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
              >
                <motion.div
                  className="text-4xl font-bold mb-2"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-200">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  )
}