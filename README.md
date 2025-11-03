# Darasoft - IT Аутсорсинг Лендинг

Современный продающий лендинг для IT-компании по разработке программного обеспечения на Next.js с полной SEO оптимизацией.

## Технологии

- **Next.js 14** - React фреймворк с App Router
- **TypeScript** - типизированный JavaScript
- **Tailwind CSS** - утилитарный CSS фреймворк
- **Framer Motion** - библиотека для плавных анимаций
- **SEO оптимизация** - metadata, sitemap, robots.txt
- **Telegram Bot Integration** - отправка заявок в Telegram

## Структура проекта

```
darasoft-next/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts      # API route для отправки в Telegram
│   ├── layout.tsx            # Главный layout с SEO метаданными
│   ├── page.tsx              # Главная страница
│   ├── globals.css           # Глобальные стили
│   ├── sitemap.ts            # Генерация sitemap.xml
│   └── robots.ts             # Генерация robots.txt
├── components/
│   ├── Header.tsx            # Навигационное меню
│   ├── Hero.tsx              # Главный баннер
│   ├── Services.tsx          # Секция услуг
│   ├── Benefits.tsx          # Преимущества
│   ├── Portfolio.tsx         # Портфолио проектов
│   ├── Process.tsx           # Процесс работы
│   ├── Testimonials.tsx      # Отзывы клиентов
│   ├── ContactForm.tsx       # Форма обратной связи
│   ├── CTA.tsx               # Призыв к действию
│   ├── Footer.tsx            # Футер
│   └── ScrollAnimation.tsx   # Компонент для анимаций
└── public/                   # Статические файлы
```

## Установка и запуск

1. Установите зависимости:
```bash
npm install
```

2. Настройте переменные окружения:
```bash
cp .env.example .env.local
```

Отредактируйте `.env.local` и укажите:
- `TELEGRAM_BOT_TOKEN` - токен вашего Telegram бота (получите у @BotFather)
- `TELEGRAM_CHAT_ID` - ваш Chat ID (получите у @userinfobot)

3. Запустите dev сервер:
```bash
npm run dev
```

4. Откройте [http://localhost:3001](http://localhost:3001) в браузере

## Настройка Telegram бота

### Шаг 1: Создание бота
1. Откройте Telegram и найдите [@BotFather](https://t.me/botfather)
2. Отправьте команду `/newbot`
3. Следуйте инструкциям для создания бота
4. Скопируйте полученный токен и вставьте в `.env.local` как `TELEGRAM_BOT_TOKEN`

### Шаг 2: Получение Chat ID
1. Найдите в Telegram [@userinfobot](https://t.me/userinfobot)
2. Отправьте команду `/start`
3. Бот вернет ваш Chat ID
4. Скопируйте ID и вставьте в `.env.local` как `TELEGRAM_CHAT_ID`

### Альтернативный способ получения Chat ID:
1. Добавьте бота в группу или начните с ним личный чат
2. Отправьте боту любое сообщение
3. Откройте в браузере: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
4. Найдите `chat.id` в ответе

## Сборка для продакшена

```bash
npm run build
npm start
```

## SEO оптимизация

Проект включает:
- Метатеги (title, description, keywords)
- Open Graph метаданные
- Twitter Card метаданные
- Автоматическая генерация sitemap.xml
- robots.txt конфигурация
- Семантическая HTML разметка

## Анимации

Лендинг включает множество плавных анимаций:
- **Scroll animations** - элементы появляются при прокрутке
- **Hover effects** - интерактивные эффекты при наведении
- **Stagger animations** - последовательное появление элементов
- **Particle effects** - анимированные частицы на фоне
- **Gradient animations** - анимированные градиенты
- **Smooth transitions** - плавные переходы между состояниями

Все анимации оптимизированы для производительности и используют Framer Motion.

## Настройка

Перед деплоем обновите:
- URL в `app/sitemap.ts` и `app/robots.ts`
- Google verification код в `app/layout.tsx`
- Контактную информацию в компонентах
- Социальные сети в Footer
- Telegram Bot Token и Chat ID в `.env.local`

## API Route

Форма обратной связи использует API route `/api/contact`, который:
- Валидирует данные формы
- Отправляет сообщение в Telegram через Bot API
- Возвращает статус отправки клиенту

Сообщения в Telegram форматируются с использованием HTML и содержат:
- Имя клиента
- Email
- Телефон (если указан)
- Сообщение

## Деплой

Проект готов к деплою на:
- **Vercel** (рекомендуется для Next.js)
- **Netlify**
- **AWS Amplify**
- Любой хостинг с поддержкой Node.js

**Важно:** Не забудьте добавить переменные окружения (`TELEGRAM_BOT_TOKEN` и `TELEGRAM_CHAT_ID`) в настройках хостинга!

## Лицензия

MIT