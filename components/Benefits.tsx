'use client'

import ScrollAnimation from './ScrollAnimation'
import { motion } from 'framer-motion'

export default function Benefits() {
  const benefits = [
    {
      title: 'Прозрачность процесса',
      description:
        'Еженедельные отчеты, доступ к трекеру задач, полная открытость процесса разработки.',
      icon: '👁️',
    },
    {
      title: 'Опытная команда',
      description:
        'Senior разработчики с опытом от 5+ лет. Эксперты в современных технологиях и best practices.',
      icon: '👥',
    },
    {
      title: 'Гибкие методологии',
      description:
        'Agile, Scrum, Kanban. Работаем по методологии, которая подходит вашему проекту.',
      icon: '🔄',
    },
    {
      title: 'Конкурентные цены',
      description:
        'Оптимальное соотношение цена/качество. Без переплат за бренд, только за результат.',
      icon: '💰',
    },
    {
      title: 'Быстрый старт',
      description:
        'Начинаем работу в течение недели. MVP за 2-4 недели. Быстрая итерация.',
      icon: '⚡',
    },
    {
      title: 'Долгосрочная поддержка',
      description:
        'Не бросаем проект после релиза. Поддержка, обновления, масштабирование - на постоянной основе.',
      icon: '🤝',
    },
  ]

  return (
    <section className="py-20 bg-white">
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
              Почему выбирают нас
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Преимущества работы с нами
            </motion.p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <motion.div
                className="text-center p-6 rounded-lg relative overflow-hidden group cursor-pointer"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Фоновый градиент при наведении */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                <motion.div
                  className="text-5xl mb-4 relative z-10"
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    delay: index * 0.2,
                  }}
                >
                  {benefit.icon}
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 relative z-10">{benefit.description}</p>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}