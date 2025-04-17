import React from 'react';

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Условия использования</h1>
          
          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Общие положения</h2>
              <p className="text-gray-300 mb-4">
                Настоящие Условия использования (далее – Условия) регулируют отношения между ООО "ДорСпецМонтаж" (далее – Компания) и пользователями сайта dorspecmontazh.ru (далее – Сайт).
              </p>
              <p className="text-gray-300">
                Используя Сайт, вы соглашаетесь с настоящими Условиями. Если вы не согласны с Условиями, пожалуйста, не используйте Сайт.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Использование сайта</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Сайт предназначен для предоставления информации о деятельности Компании и ее услугах;</li>
                <li>Пользователь обязуется использовать Сайт только в законных целях;</li>
                <li>Запрещается использовать Сайт для распространения вредоносного программного обеспечения;</li>
                <li>Запрещается пытаться получить несанкционированный доступ к системам Сайта;</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Интеллектуальная собственность</h2>
              <div className="space-y-4 text-gray-300">
                <p>3.1. Все материалы, размещенные на Сайте, включая, но не ограничиваясь:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Текстовые материалы;</li>
                  <li>Графические изображения;</li>
                  <li>Логотипы и товарные знаки;</li>
                  <li>Дизайн и структура Сайта;</li>
                </ul>
                <p>3.2. Защищены авторским правом и иными правами интеллектуальной собственности.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Ограничение ответственности</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Компания не гарантирует бесперебойную работу Сайта;</li>
                <li>Компания не несет ответственности за ущерб, причиненный в результате использования Сайта;</li>
                <li>Компания не несет ответственности за содержание внешних сайтов, на которые могут ссылаться материалы Сайта;</li>
                <li>Компания оставляет за собой право вносить изменения в материалы Сайта без предварительного уведомления;</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Изменения условий</h2>
              <p className="text-gray-300">
                Компания оставляет за собой право вносить изменения в настоящие Условия в любое время. Изменения вступают в силу с момента их публикации на Сайте. Продолжение использования Сайта после внесения изменений означает ваше согласие с новыми Условиями.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Контактная информация</h2>
              <div className="space-y-2 text-gray-300">
                <p>ООО "ДорСпецМонтаж"</p>
                <p>Адрес: г. Москва, ул. Примерная, д. 123</p>
                <p>Телефон: +7 (123) 456-78-90</p>
                <p>Email: info@dorspecmontazh.ru</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse; 