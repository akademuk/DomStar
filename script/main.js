document.addEventListener("DOMContentLoaded", () => {
  initBurgerMenu();
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
