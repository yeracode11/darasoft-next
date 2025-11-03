import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Валидация
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Все обязательные поля должны быть заполнены' },
        { status: 400 }
      )
    }

    // Получаем токен бота и chat ID из переменных окружения
    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!botToken || !chatId) {
      console.error('Telegram credentials not configured')
      return NextResponse.json(
        { error: 'Серверная ошибка конфигурации' },
        { status: 500 }
      )
    }

    // Форматируем сообщение для Telegram
    const telegramMessage = `
🎯 <b>Новая заявка с сайта</b>

👤 <b>Имя:</b> ${name}
📧 <b>Email:</b> ${email}
${phone ? `📱 <b>Телефон:</b> ${phone}` : ''}

💬 <b>Сообщение:</b>
${message}
    `.trim()

    // Отправляем сообщение в Telegram
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`
    
    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: 'HTML',
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error('Telegram API error:', data)
      return NextResponse.json(
        { error: 'Ошибка при отправке сообщения' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Сообщение успешно отправлено' },
      { status: 200 }
    )
  } catch (error) {
    console.error('API route error:', error)
    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера' },
      { status: 500 }
    )
  }
}
