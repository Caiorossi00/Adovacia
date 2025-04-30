document.querySelector(".menu-toggle").addEventListener("click", function () {
  const nav = document.querySelector(".nav-links");
  nav.classList.toggle("active");

  this.textContent = nav.classList.contains("active") ? "✖" : "☰";
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", function () {
    document.querySelector(".nav-links").classList.remove("active");
    document.querySelector(".menu-toggle").textContent = "☰";
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 70,
      behavior: "smooth",
    });
  });
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  item.querySelector(".faq-question").addEventListener("click", () => {
    item.classList.toggle("open");
  });
});

window.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav-links");
  const toggle = document.querySelector(".menu-toggle");

  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
    toggle.textContent = "☰";
  }
});
