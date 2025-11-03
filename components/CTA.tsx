'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function CTA() {
  const [dimensions, setDimensions] = useState({ width: 1000, height: 800 })

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight })
  }, [])
  return (
    <section
      className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 relative overflow-hidden"
    >
      {/* Анимированный фон */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: Math.random() * dimensions.width,
              y: Math.random() * dimensions.height,
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * dimensions.height],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Готовы начать свой проект?
          </motion.h2>

          <motion.p
            className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Свяжитесь с нами для бесплатной консультации. Обсудим вашу задачу
            и предложим оптимальное решение.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href="mailto:hello@darasoft.com"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg shadow-xl"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              Написать нам
            </motion.a>
            <motion.a
              href="tel:+77757666986"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg"
              whileHover={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
            >
              Позвонить
            </motion.a>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {[
              { title: 'Бесплатная', subtitle: 'консультация' },
              { title: 'Ответ за 24ч', subtitle: 'гарантируем' },
              { title: 'Без обязательств', subtitle: 'после звонка' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="text-2xl font-bold mb-2"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  {item.title}
                </motion.div>
                <div className="text-gray-200">{item.subtitle}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}