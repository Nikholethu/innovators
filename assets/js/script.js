document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      navToggle.classList.toggle("active", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
      document.body.classList.toggle("menu-open", isOpen);
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navToggle.classList.remove("active");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
      });
    });
  }

  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const hash = link.getAttribute("href");
      if (!hash || hash === "#") {
        event.preventDefault();
        return;
      }
      const target = document.querySelector(hash);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  const form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      let valid = true;

      form.querySelectorAll("[required]").forEach((field) => {
        const error = document.querySelector(`#${field.id}-error`);
        let message = "";

        if (!field.value.trim()) {
          message = "This field is required.";
        } else if (field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
          message = "Enter a valid email address.";
        } else if (field.type === "tel" && field.value.replace(/\D/g, "").length < 7) {
          message = "Enter a valid phone number.";
        }

        field.setAttribute("aria-invalid", String(Boolean(message)));
        if (error) error.textContent = message;
        if (message) valid = false;
      });

      const status = document.querySelector("#form-status");
      if (status) {
        status.style.display = "block";
        status.textContent = valid
          ? "Thank you. Your details passed validation. A backend or email integration is required before messages can be delivered."
          : "Please correct the highlighted fields before submitting.";
        status.style.background = valid ? "#edf7f0" : "#fff1f2";
        status.style.color = valid ? "#15803d" : "#b91c1c";
      }
    });
  }
});
