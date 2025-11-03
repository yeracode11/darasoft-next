'use client'

import ScrollAnimation from './ScrollAnimation'
import { motion } from 'framer-motion'

export default function Services() {
  const services = [
    {
      title: 'Веб-разработка',
      description:
        'Современные веб-приложения на React, Next.js, Angular.js. От MVP до масштабируемых платформ.',
      icon: '🌐',
      features: ['SPA и PWA', 'Full-stack решения', 'Микросервисная архитектура'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Мобильная разработка',
      description:
        'Нативные и кроссплатформенные приложения для iOS и Android с отличным UX.',
      icon: '📱',
      features: ['iOS и Android', 'React Native', 'Flutter'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Облачные решения',
      description:
        'Миграция в облако, DevOps, контейнеризация. Оптимизация инфраструктуры.',
      icon: '☁️',
      features: ['AWS, Azure, GCP', 'Docker & Kubernetes', 'CI/CD'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'UI/UX дизайн',
      description:
        'Создание интуитивных интерфейсов, которые нравятся пользователям и конвертируют.',
      icon: '🎨',
      features: ['Дизайн-системы', 'Прототипирование', 'Юзабилити-тестирование'],
      color: 'from-pink-500 to-rose-500',
    },
    {
      title: 'Интеграции',
      description:
        'Подключение сторонних сервисов, API разработка, автоматизация процессов. Внедрение решений 1С',
      icon: '🔌',
      features: ['REST & GraphQL', 'Платежные системы', 'CRM интеграции', '1С интеграция'],
      color: 'from-orange-500 to-amber-500',
    },
    {
      title: 'Поддержка и масштабирование',
      description:
        'Техническая поддержка, мониторинг, оптимизация производительности.',
      icon: '🚀',
      features: ['24/7 мониторинг', 'Оптимизация', 'Масштабирование'],
      color: 'from-indigo-500 to-purple-500',
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
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
              Наши услуги
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Полный спектр IT-услуг для развития вашего бизнеса
            </motion.p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <motion.div
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 overflow-hidden relative group"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Градиентный фон при наведении */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                <motion.div
                  className="text-5xl mb-4 relative z-10"
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                >
                  {service.icon}
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 relative z-10">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 relative z-10">{service.description}</p>
                <ul className="space-y-2 relative z-10">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-center text-gray-700"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + idx * 0.1 }}
                    >
                      <motion.svg
                        className="w-5 h-5 text-primary-600 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + idx * 0.1 + 0.2 }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </motion.svg>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}