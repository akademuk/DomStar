document.addEventListener("DOMContentLoaded", () => {
  initBurgerMenu();
  initClientLogosSwiper();
});

function initBurgerMenu() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".mobile-links");
  const body = document.body;
  const overlay = document.querySelector(".menu-overlay");

  if (burger && menu && overlay) {
    burger.addEventListener("click", () => {
      toggleMobileMenu(menu, burger, body, overlay);
    });

    document.addEventListener("click", (event) => {
      const menuContainer = document.querySelector(".mobile-menu");
      if (
        menuContainer &&
        !menuContainer.contains(event.target) &&
        menu.classList.contains("open")
      ) {
        toggleMobileMenu(menu, burger, body, overlay);
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menu.classList.contains("open")) {
        toggleMobileMenu(menu, burger, body, overlay);
      }
    });
  }
}

function toggleMobileMenu(menu, burger, body, overlay) {
  const isCurrentlyOpen = menu.classList.contains("open");
  
  if (isCurrentlyOpen) {
    // При закрытии - сначала убираем класс open, затем через небольшую задержку убираем overflow
    menu.classList.remove("open");
    burger.classList.remove("open");
    overlay.classList.remove("active");
    
    // Небольшая задержка перед разблокировкой скролла для завершения анимации
    setTimeout(() => {
      body.style.overflow = "";
      body.classList.remove("menu-open");
    }, 100);
  } else {
    // При открытии - сразу блокируем скролл и добавляем классы
    body.style.overflow = "hidden";
    body.classList.add("menu-open");
    overlay.classList.add("active");
    
    // Небольшая задержка для плавности анимации
    setTimeout(() => {
      menu.classList.add("open");
      burger.classList.add("open");
    }, 10);
  }

  menu.setAttribute("aria-hidden", isCurrentlyOpen);
}

function initClientLogosSwiper() {
  const wrapper = document.querySelector(".realEstateSection-swiper-wrapper");
  if (!wrapper) return;

  const originalSlides = Array.from(wrapper.children);
  const neededClones = 10;
  for (let i = 0; i < neededClones; i++) {
    const slide = originalSlides[i % originalSlides.length].cloneNode(true);
    wrapper.appendChild(slide);
  }

  /* global Swiper */
  new Swiper(".realEstateSection-swiper", {
    loop: true,
    speed: 5000,
    slidesPerView: "auto",
    spaceBetween: 16,
    autoplay: { delay: 0, disableOnInteraction: false },
    allowTouchMove: false,
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const firstAccordionItem = document.querySelector(".accordion-item");
  
  // Проверяем, есть ли аккордеон на странице
  if (firstAccordionItem) {
    // Убираем старый способ инициализации
    // Первый элемент уже имеет класс active в HTML
  }

  document.querySelectorAll(".accordion-item").forEach((item) => {
    item.addEventListener("mouseenter", () => {
      if (window.innerWidth > 768) {
        // Убираем active у всех элементов
        document.querySelectorAll(".accordion-item").forEach((otherItem) => {
          otherItem.classList.remove("active");
        });

        // Добавляем active к текущему элементу
        item.classList.add("active");
      }
    });

    item.addEventListener("mouseleave", () => {
      if (window.innerWidth > 768) {
        // На мобильных не убираем active при mouseleave
        // Возвращаем active первому элементу
        document.querySelectorAll(".accordion-item").forEach((otherItem) => {
          otherItem.classList.remove("active");
        });
        
        const firstItem = document.querySelector(".accordion-item");
        if (firstItem) {
          firstItem.classList.add("active");
        }
      }
    });

    item.querySelector(".accordion-header").addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        const isCurrentlyActive = item.classList.contains("active");
        
        // Убираем active у всех элементов
        document.querySelectorAll(".accordion-item").forEach((otherItem) => {
          otherItem.classList.remove("active");
        });

        // Если текущий элемент не был активным, делаем его активным
        if (!isCurrentlyActive) {
          item.classList.add("active");
        }
      }
    });
  });
});

const swiperContainer = document.querySelector(".graduates__slider");
if (swiperContainer) {
  const swiper = new Swiper(".graduates__slider", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 24,
    slidesPerView: "auto",
  });
}

// Проверяем наличие элементов для Fancybox
const fancyboxElements = document.querySelectorAll('[data-fancybox="graduates-videos"]');
if (fancyboxElements.length > 0) {
  Fancybox.bind('[data-fancybox="graduates-videos"]', {
    type: "iframe",
    Toolbar: false,
    smallBtn: true,
    iframe: {
      preload: false,
    },
  });
}

const faqButtons = document.querySelectorAll('.faq-question');

if (faqButtons.length > 0) {
  faqButtons.forEach(button => {
      button.addEventListener('click', function () {
          const expanded = this.getAttribute('aria-expanded') === 'true';
          const answer = document.getElementById(this.getAttribute('aria-controls'));

          // Меняем состояние aria-expanded
          this.setAttribute('aria-expanded', !expanded);

          // Анимация раскрытия и скрытия
          if (expanded) {
              answer.style.maxHeight = '0';
          } else {
              answer.style.maxHeight = answer.scrollHeight + 'px'; // Вычисляем высоту ответа
          }
      });
  });
}