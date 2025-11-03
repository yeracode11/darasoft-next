'use client'

import ScrollAnimation from './ScrollAnimation'
import { motion } from 'framer-motion'

export default function Portfolio() {
  const projects = [
    {
      title: 'E-commerce платформа для кондитерской',
      description:
        'Масштабируемая платформа для онлайн-торговли с интеграцией платежных систем и CRM.',
      tech: ['Next.js', 'TypeScript', 'Java/Spring Boot', 'PostgreSQL'],
      category: 'Веб-разработка',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Мобильное приложение для записи на автосервисы и покупка запчастей',
      description:
        'iOS и Android приложение с real-time трекингом и push-уведомлениями.',
      tech: ['Dart/Flutter', 'Nest JS', 'PostgreSQL'],
      category: 'Мобильная разработка',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'IoT решение для мониторинга производственного оборудования',
      description:
        'Мониторинг производственного оборудования с помощью IoT устройств и веб-интерфейса.',
      tech: ['Zabbix', 'Arduino'],
      category: 'Веб-разработка',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Десктоп приложение для управления складом',
      description:
        'Enterprise решение для автоматизации складских операций и инвентаризации.',
      tech: ['Flutter', 'Nest JS', 'PostgreSQL', 'BloC Pattern'],
      category: 'Desktop-разработка',
      gradient: 'from-orange-500 to-red-500',
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
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
              Наши проекты
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Реализованные решения для различных отраслей
            </motion.p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollAnimation key={index} delay={index * 0.15}>
              <motion.div
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 group cursor-pointer"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="text-white text-6xl font-bold relative z-10"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  >
                    {project.title[0]}
                  </motion.div>
                  {/* Анимированный паттерн */}
                  <motion.div
                    className="absolute inset-0 opacity-20"
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                    style={{
                      backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }}
                  />
                </motion.div>
                <div className="p-6">
                  <motion.div
                    className="text-sm text-primary-600 font-semibold mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {project.category}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.1 + idx * 0.1 + 0.3,
                          type: 'spring',
                          stiffness: 200,
                        }}
                        whileHover={{ scale: 1.1, backgroundColor: '#e5e7eb' }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}