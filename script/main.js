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