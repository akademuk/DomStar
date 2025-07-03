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
  menu.classList.toggle("open");
  burger.classList.toggle("open");

  const isMenuOpen = menu.classList.contains("open");
  menu.setAttribute("aria-hidden", !isMenuOpen);

  if (isMenuOpen) {
    overlay.classList.add("active");
    body.style.overflow = "hidden";
    body.classList.add("menu-open");
  } else {
    overlay.classList.remove("active");
    body.style.overflow = "";
    body.classList.remove("menu-open");
  }
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

document.addEventListener('DOMContentLoaded', () => {
  const firstAccordionItem = document.querySelector('.accordion-item');
  const firstAccordionContent = firstAccordionItem.querySelector('.accordion-content');

  firstAccordionContent.style.display = 'block';
  firstAccordionItem.classList.add('active');

  document.querySelectorAll(".accordion-item").forEach((item) => {
    item.addEventListener("mouseenter", () => {
      if (window.innerWidth > 768) {
        const content = item.querySelector(".accordion-content");

        const firstContent = document.querySelector('.accordion-item .accordion-content');
        const firstItem = document.querySelector('.accordion-item');
        if (firstContent && firstItem) {
          firstContent.style.display = 'none';
          firstItem.classList.remove('active');
        }

        item.classList.add("active");
        content.style.display = "block";
      }
    });

    item.addEventListener("mouseleave", () => {
      if (window.innerWidth > 768) {
        const content = item.querySelector(".accordion-content");

        item.classList.remove("active");
        content.style.display = "none";
      }
    });

    item.querySelector(".accordion-header").addEventListener("click", () => {
      const content = item.querySelector(".accordion-content");

      if (window.innerWidth <= 768) {
        document.querySelectorAll(".accordion-content").forEach((content) => {
          content.style.display = "none";
          content.closest(".accordion-item").classList.remove("active");
        });

        if (content.style.display !== "block") {
          content.style.display = "block";
          item.classList.add("active");
        }
      }
    });
  });
});


