# DomStar — Навчальна екосистема для ріелторів та брокерів

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jquery&logoColor=white)](https://jquery.com/)
[![Swiper](https://img.shields.io/badge/Swiper-6332F6?style=flat&logo=swiper&logoColor=white)](https://swiperjs.com/)

*[English version below](#english-version)*

## 📖 Опис проєкту

DomStar — це сучасна навчальна платформа для ріелторів та брокерів нерухомості. Сайт надає доступ до курсів, інструментів, підтримки та бази нерухомості по 4 країнах (ОАЕ, Кіпр, Балі, Україна).

## 🚀 Особливості

- **Адаптивний дизайн** — коректне відображення на всіх пристроях
- **Сучасний інтерфейс** — використання актуальних веб-технологій
- **Інтерактивні елементи** — слайдери, модальні вікна, акордеони
- **Оптимізація продуктивності** — ледача завантаження зображень, мініфікація CSS/JS
- **SEO-оптимізація** — семантична розмітка, мета-теги, Open Graph
- **Accessibility** — підтримка screen readers та навігації з клавіатури

## 🛠 Технологічний стек

### Frontend
- **HTML5** — семантична розмітка
- **CSS3** — стилізація з використанням CSS Custom Properties
- **JavaScript (ES6+)** — інтерактивність та динамічна поведінка
- **jQuery 3.7.0** — спрощення роботи з DOM
- **Swiper.js** — карусельки та слайдери
- **Fancybox** — модальні вікна та галереї

### Шрифти
- **Fixel Text** — основний шрифт (Regular, Medium, SemiBold)
- **Segoe UI** — додатковий шрифт (Regular, SemiBold)
- **Inter** — допоміжний шрифт (Medium)

### Зображення
- **WebP формат** — сучасний формат для кращого стиснення
- **Responsive images** — адаптивні зображення для різних екранів
- **SVG іконки** — векторна графіка для чіткості на всіх екранах

## 📁 Структура проєкту

```
domstar/
├── fonts/                 # Веб-шрифти проєкту
│   ├── FixelText-*.woff2  # Основний шрифт
│   ├── SegoeUI-*.woff2    # Додатковий шрифт
│   └── Inter-*.woff2      # Допоміжний шрифт
├── img/                   # Зображення та іконки
│   ├── *.svg             # Векторні іконки
│   ├── *.webp            # Оптимізовані зображення
│   └── *.jpg/*.png       # Звичайні зображення
├── script/                # JavaScript файли
│   ├── jquery-3.7.0.min.js
│   ├── swiper-bundle.min.js
│   └── main.js           # Основна логіка сайту
├── style/                 # CSS стилі
│   ├── reset.css         # Скидання стилів браузера
│   ├── style.css         # Основні стилі
│   └── swiper-bundle.min.css
├── *.html                # HTML сторінки
├── 404.html              # Сторінка помилки 404
├── thank-you.html        # Сторінка подяки
└── README.md             # Документація проєкту
```

## 📄 Сторінки сайту

- **index.html** — Головна сторінка
- **about-us.html** — Про компанію
- **contact.html** — Контакти
- **courses.html** — Курси та платформа
- **education.html** — Навчання
- **marketing.html** — Маркетингові послуги
- **public_offer.html** — Публічна оферта
- **thank-you.html** — Сторінка подяки
- **404.html** — Сторінка помилки 404

## 🎨 Дизайн система

### Колірна палітра
- **Основні кольори**: Blue-950, Red-50, Red-200
- **Акцентні кольори**: Blue-800, Green-600, Pink-100
- **Додаткові**: Sky-100, Fuchsia-500, Lime-400

### Типографіка
- **Заголовки**: Fixel Text (Medium, SemiBold)
- **Основний текст**: Fixel Text (Regular)
- **Інтерфейс**: Segoe UI (Regular, SemiBold)

### Розміри шрифтів
- 12px, 14px, 16px, 18px, 20px, 24px, 28px, 33px, 40px, 48px, 58px, 83px, 100px

## 🚀 Швидкий старт

### Вимоги
- Веб-браузер з підтримкою сучасних стандартів
- Веб-сервер для локальної розробки (наприклад, Live Server у VS Code)

### Встановлення та запуск

1. **Клонуйте репозиторій:**
   ```bash
   git clone <repository-url>
   cd domstar
   ```

2. **Запустіть локальний сервер:**
   - Використовуйте розширення Live Server у VS Code
   - Або будь-який інший локальний веб-сервер
   ```bash
   # Наприклад, за допомогою Python
   python -m http.server 8000
   ```

3. **Відкрийте у браузері:**
   ```
   http://localhost:8000
   ```

## 🔧 Розробка

### Структура CSS
- **reset.css** — скидання стилів браузера за замовчуванням
- **style.css** — основні стилі з використанням CSS Custom Properties

### JavaScript функціональність
- **Мобільне меню** — адаптивна навігація
- **Слайдери** — карусельки з автопрокруткою
- **Модальні вікна** — форми зворотного зв'язку
- **Акордеони** — розкривні блоки FAQ
- **Таби** — перемикання контенту
- **Плавна прокрутка** — покращена навігація

### Оптимізація
- **Ледача завантаження** зображень
- **Preload** критичних ресурсів
- **WebP** формат для зображень
- **Мініфікація** CSS та JavaScript

## 📱 Адаптивність

Сайт адаптований для наступних дозволів:
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1279px
- **Desktop**: 1280px+

## 🔍 SEO та доступність

- Семантична HTML розмітка
- Мета-теги для пошукових систем
- Open Graph для соціальних мереж
- ARIA-атрибути для accessibility
- Оптимізовані зображення з alt-текстами
- Структуровані дані

## 📋 Функціональні можливості

### Інтерактивні компоненти
- **Слайдери курсів** з автопрокруткою
- **Відео галерея** випускників
- **Форми зворотного зв'язку** з валідацією
- **Модальні вікна** для заявок
- **Акордеони FAQ** з плавною анімацією
- **Таби** для перемикання контенту

### Форми
- Валідація полів у реальному часі
- Кастомні селекти
- Маски для телефонних номерів
- Відправка даних з підтвердженням

## 🌐 Підтримка браузерів

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 📞 Контакти та підтримка

З питань щодо проєкту звертайтеся до команди розробки DomStar.

## 📄 Ліцензія

© 2025 DomStar®. Всі матеріали доступні під ліцензією Creative Commons Attribution 4.0 International, якщо не вказано інше.

---

**Фізична особа-підприємець**: Звєрєва Христина Валеріївна | ІПН: 3377414489

---

# English Version

# DomStar — Training Ecosystem for Realtors and Brokers

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jquery&logoColor=white)](https://jquery.com/)
[![Swiper](https://img.shields.io/badge/Swiper-6332F6?style=flat&logo=swiper&logoColor=white)](https://swiperjs.com/)

## 📖 Project Description

DomStar is a modern educational platform for real estate agents and brokers. The website provides access to courses, tools, support, and a real estate database across 4 countries (UAE, Cyprus, Bali, Ukraine).

## 🚀 Features

- **Responsive Design** — correct display on all devices
- **Modern Interface** — using current web technologies
- **Interactive Elements** — sliders, modal windows, accordions
- **Performance Optimization** — lazy loading of images, CSS/JS minification
- **SEO Optimization** — semantic markup, meta tags, Open Graph
- **Accessibility** — screen reader support and keyboard navigation

## 🛠 Technology Stack

### Frontend
- **HTML5** — semantic markup
- **CSS3** — styling using CSS Custom Properties
- **JavaScript (ES6+)** — interactivity and dynamic behavior
- **jQuery 3.7.0** — DOM manipulation simplification
- **Swiper.js** — carousels and sliders
- **Fancybox** — modal windows and galleries

### Fonts
- **Fixel Text** — main font (Regular, Medium, SemiBold)
- **Segoe UI** — additional font (Regular, SemiBold)
- **Inter** — auxiliary font (Medium)

### Images
- **WebP format** — modern format for better compression
- **Responsive images** — adaptive images for different screens
- **SVG icons** — vector graphics for clarity on all screens

## 📁 Project Structure

```
domstar/
├── fonts/                 # Web fonts
│   ├── FixelText-*.woff2  # Main font
│   ├── SegoeUI-*.woff2    # Additional font
│   └── Inter-*.woff2      # Auxiliary font
├── img/                   # Images and icons
│   ├── *.svg             # Vector icons
│   ├── *.webp            # Optimized images
│   └── *.jpg/*.png       # Regular images
├── script/                # JavaScript files
│   ├── jquery-3.7.0.min.js
│   ├── swiper-bundle.min.js
│   └── main.js           # Main site logic
├── style/                 # CSS styles
│   ├── reset.css         # Browser styles reset
│   ├── style.css         # Main styles
│   └── swiper-bundle.min.css
├── *.html                # HTML pages
├── 404.html              # 404 error page
├── thank-you.html        # Thank you page
└── README.md             # Project documentation
```

## 📄 Website Pages

- **index.html** — Home page
- **about-us.html** — About company
- **contact.html** — Contacts
- **courses.html** — Courses and platform
- **education.html** — Education
- **marketing.html** — Marketing services
- **public_offer.html** — Public offer
- **thank-you.html** — Thank you page
- **404.html** — 404 error page

## 🎨 Design System

### Color Palette
- **Primary colors**: Blue-950, Red-50, Red-200
- **Accent colors**: Blue-800, Green-600, Pink-100
- **Additional**: Sky-100, Fuchsia-500, Lime-400

### Typography
- **Headers**: Fixel Text (Medium, SemiBold)
- **Body text**: Fixel Text (Regular)
- **Interface**: Segoe UI (Regular, SemiBold)

### Font Sizes
- 12px, 14px, 16px, 18px, 20px, 24px, 28px, 33px, 40px, 48px, 58px, 83px, 100px

## 🚀 Quick Start

### Requirements
- Web browser with modern standards support
- Web server for local development (e.g., Live Server in VS Code)

### Installation and Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd domstar
   ```

2. **Start local server:**
   - Use Live Server extension in VS Code
   - Or any other local web server
   ```bash
   # For example, using Python
   python -m http.server 8000
   ```

3. **Open in browser:**
   ```
   http://localhost:8000
   ```

## 🔧 Development

### CSS Structure
- **reset.css** — browser default styles reset
- **style.css** — main styles using CSS Custom Properties

### JavaScript Functionality
- **Mobile menu** — adaptive navigation
- **Sliders** — carousels with auto-scroll
- **Modal windows** — contact forms
- **Accordions** — expandable FAQ blocks
- **Tabs** — content switching
- **Smooth scrolling** — enhanced navigation

### Optimization
- **Lazy loading** of images
- **Preload** critical resources
- **WebP** format for images
- **Minification** of CSS and JavaScript

## 📱 Responsiveness

The site is adapted for the following resolutions:
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1279px
- **Desktop**: 1280px+

## 🔍 SEO and Accessibility

- Semantic HTML markup
- Meta tags for search engines
- Open Graph for social media
- ARIA attributes for accessibility
- Optimized images with alt texts
- Structured data

## 📋 Functional Features

### Interactive Components
- **Course sliders** with auto-scroll
- **Graduate video gallery**
- **Contact forms** with validation
- **Modal windows** for applications
- **FAQ accordions** with smooth animation
- **Tabs** for content switching

### Forms
- Real-time field validation
- Custom selects
- Phone number masks
- Data submission with confirmation

## 🌐 Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 📞 Contacts and Support

For project-related questions, contact the DomStar development team.

## 📄 License

© 2025 DomStar®. All materials are available under Creative Commons Attribution 4.0 International license unless otherwise specified.

---

**Individual Entrepreneur**: Zvereva Khristina Valerievna | TIN: 3377414489
