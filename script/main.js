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
    // centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 24,
    slidesPerView: "auto",
    breakpoints: {
      0: {
        spaceBetween: 16,
      },
      1280: {
        spaceBetween: 24,
      },
    },
  });
}

// Проверяем наличие элементов для Fancybox
const fancyboxElements = document.querySelectorAll(
  '[data-fancybox="graduates-videos"]'
);
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

const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach((button) => {
  const answer = document.getElementById(button.getAttribute("aria-controls"));

  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";

    faqButtons.forEach((btn) => {
      const ans = document.getElementById(btn.getAttribute("aria-controls"));
      btn.setAttribute("aria-expanded", "false");
      ans.classList.remove("open");
    });

    if (!isExpanded) {
      button.setAttribute("aria-expanded", "true");
      answer.classList.add("open");
    }
  });
});



function initClientLogosSwiper() {
  const wrapper = document.querySelector(".main-education__partners-wrapper");
  if (!wrapper) return;

  const originalSlides = Array.from(wrapper.children);
  const neededClones = 10;
  for (let i = 0; i < neededClones; i++) {
    const slide = originalSlides[i % originalSlides.length].cloneNode(true);
    wrapper.appendChild(slide);
  }

  /* global Swiper */
  new Swiper(".main-education__partners-swiper", {
    loop: true,
    speed: 5000,
    slidesPerView: "auto",
    spaceBetween: 24,
    autoplay: { delay: 0, disableOnInteraction: false },
    allowTouchMove: false,
  });
}

// Селекторы для вкладок
const tabs = document.querySelectorAll(".information__tab");
const contents = document.querySelectorAll(".information__content");

// Переключение вкладок
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("information__tab--active"));
    tab.classList.add("information__tab--active");
    const target = tab.dataset.tab;
    contents.forEach((content) => {
      content.classList.remove("information__content--active");
      if (content.id === `tab-${target}`) {
        content.classList.add("information__content--active");
      }
    });
  });
});

// Селекторы для аккордеона
const headers = document.querySelectorAll(".information__accordion-header");

headers.forEach((header) => {
  header.addEventListener("click", () => {
    const item = header.parentElement;
    item.classList.toggle("active");

    // Закрытие других элементов
    headers.forEach((h) => {
      if (h !== header) h.parentElement.classList.remove("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  let swiperInstance = null;

  function toggleSwiper() {
    const isMobile = window.innerWidth <= 1280;

    if (isMobile && !swiperInstance) {
      swiperInstance = new Swiper(".education-step__slider", {
        slidesPerView: "auto",
        spaceBetween: 16,
        loop: false,
        navigation: false,
        pagination: false,
      });
    }

    if (!isMobile && swiperInstance) {
      swiperInstance.destroy(true, true);
      swiperInstance = null;
    }
  }

  toggleSwiper();
  window.addEventListener("resize", toggleSwiper);
});


const otherCoursesSlider = document.querySelector(".other-courses__slider");
if (swiperContainer) {
  const swiper = new Swiper(".other-courses__slider", {
    loop: false,
    // centeredSlides: true,
    navigation: {
      nextEl: ".other-courses__next",
      prevEl: ".other-courses__prev",
    },
    spaceBetween: 24,
    slidesPerView: "auto",
    breakpoints: {
      0: {
        spaceBetween: 16,
      },
      1280: {
        spaceBetween: 24,
      },
    },
  });
}


const modal = document.getElementById("myModal");
const openModalBtns = document.querySelectorAll(".open-modal-btn");
const closeBtn = document.getElementsByClassName("close")[0];


openModalBtns.forEach(button => {
    button.onclick = function() {
        modal.style.display = "flex";
        document.body.style.overflow = "hidden"; 
    }
});


closeBtn.onclick = function() {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; 
}


window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; 
    }
}
