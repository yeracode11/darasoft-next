'use client'

import ScrollAnimation from './ScrollAnimation'
import { motion } from 'framer-motion'

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Анализ и планирование',
      description:
        'Изучаем ваш бизнес, анализируем требования, формируем техническое задание и план разработки.',
    },
    {
      number: '02',
      title: 'Дизайн и прототипирование',
      description:
        'Создаем макеты и интерактивные прототипы. Согласовываем визуальную концепцию перед разработкой.',
    },
    {
      number: '03',
      title: 'Разработка',
      description:
        'Поэтапная разработка с регулярными демо, код-ревью, тестированием. Прозрачный процесс.',
    },
    {
      number: '04',
      title: 'Тестирование и запуск',
      description:
        'Комплексное тестирование, оптимизация производительности, деплой и запуск проекта.',
    },
    {
      number: '05',
      title: 'Поддержка и развитие',
      description:
        'Постоянная техническая поддержка, обновления, масштабирование под растущие потребности.',
    },
  ]

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Как мы работаем
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Прозрачный процесс разработки от идеи до запуска
            </motion.p>
          </div>
        </ScrollAnimation>

        <div className="max-w-4xl mx-auto relative">
          {steps.map((step, index) => (
            <ScrollAnimation key={index} delay={index * 0.15}>
              <motion.div
                className="flex flex-col md:flex-row items-start mb-12 last:mb-0 relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Линия соединения */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden md:block absolute left-10 top-20 w-0.5 h-16 bg-gradient-to-b from-primary-300 to-primary-500"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                  />
                )}

                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8 relative z-10">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                  >
                    {step.number}
                  </motion.div>
                </div>

                <motion.div
                  className="flex-1"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-lg">{step.description}</p>
                </motion.div>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}