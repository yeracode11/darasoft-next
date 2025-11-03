import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Darasoft - IT Аутсорсинг | Разработка Программного Обеспечения',
  description: 'Профессиональная разработка программного обеспечения на заказ. Веб-приложения, мобильные приложения, облачные решения. Опытная команда разработчиков для вашего бизнеса.',
  keywords: 'IT аутсорсинг, разработка ПО, веб-разработка, мобильная разработка, облачные решения, программное обеспечение на заказ',
  authors: [{ name: 'Darasoft' }],
  openGraph: {
    title: 'Darasoft - IT Аутсорсинг | Разработка Программного Обеспечения',
    description: 'Профессиональная разработка программного обеспечения на заказ. Веб-приложения, мобильные приложения, облачные решения.',
    type: 'website',
    locale: 'ru_RU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Darasoft - IT Аутсорсинг',
    description: 'Профессиональная разработка программного обеспечения на заказ.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
