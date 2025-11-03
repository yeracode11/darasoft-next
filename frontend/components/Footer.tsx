export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold text-white mb-4">Darasoft</div>
            <p className="text-sm">
              Профессиональная разработка программного обеспечения для вашего
              бизнеса.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Веб-разработка
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Мобильная разработка
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Облачные решения
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  UI/UX дизайн
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Компания</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Портфолио
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Процесс работы
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm">
              <li>info@darasoft.kz</li>
              <li>+7 (775) 766-69-86</li>
              <li className="mt-4">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                    aria-label="Telegram"
                  >
                    Telegram
                  </a>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    Instagram
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <div className="space-y-2">
            <p>&copy; {new Date().getFullYear()} Darasoft. Все права защищены.</p>
            <p className="flex items-center justify-center gap-2">
              <span>Powered by</span>
              <img src="/astanahub.png" alt="Astana IT Hub" className="inline-block h-6 w-auto" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
