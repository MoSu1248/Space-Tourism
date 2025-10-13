const sections = document.querySelectorAll(".section");
const links = document.querySelectorAll(".link-styling");
const wrapper = document.querySelector(".content-wrapper");

const mobileOpenBtn = document.querySelector(".mobile-icon");
const mobileCloseBtn = document.querySelector(".mobile-close");
const mobileMenu = document.querySelector(".mobile-menu");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = link.getAttribute("href").slice(1);

    wrapper.className = `content-wrapper ${targetId}-bg`;

    links.forEach((l) => l.classList.remove("active-link"));
    link.classList.add("active-link");
    mobileMenu.classList.remove("visible");

    sections.forEach((section) => {
      if (section.id === targetId) {
        section.classList.remove("hidden");
      } else {
        section.classList.add("hidden");
      }
    });
  });
});

mobileOpenBtn.addEventListener("click", (e) => {
  mobileMenu.classList.add("visible");
});

mobileCloseBtn.addEventListener("click", (e) => {
  mobileMenu.classList.remove("visible");
});
