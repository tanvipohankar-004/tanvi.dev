/* ================================
   Tanvi.Dev - Contact Page
================================ */

const navToggle = document.querySelector("#nav-toggle");
const siteNav = document.querySelector("#site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("active");
    navToggle.setAttribute("aria-expanded", isOpen);
  });
}

const contactData = portfolioData.contact;
const contactLinksContainer = document.querySelector("#contact-links");
const contactMessage = document.querySelector("#contact-message");
const contactLocation = document.querySelector("#contact-location");

contactMessage.textContent = contactData.message;
contactLocation.textContent = contactData.location;

/* Contact Links */
const links = [
  {
    label: "Email",
    value: contactData.email,
    href: `mailto:${contactData.email}`,
    icon: "mail"
  },
  {
    label: "GitHub",
    value: "View GitHub Profile",
    href: contactData.github,
    icon: "github"
  },
  {
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: contactData.linkedin,
    icon: "linkedin"
  },
  {
    label: "WhatsApp",
    value: "Start Conversation",
    href: contactData.whatsapp,
    icon: "whatsapp"
  }
];

const icons = {
  mail: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 6h16v12H4V6Z"></path>
      <path d="m4 7 8 6 8-6"></path>
    </svg>
  `,
  github: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.78.61-3.37-1.19-3.37-1.19-.46-1.15-1.12-1.46-1.12-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.35 1.08 2.92.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.5 9.5 0 0 1 12 6.03c.85 0 1.71.11 2.51.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"></path>
    </svg>
  `,
  linkedin: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.94 8.75H3.75v11.5h3.19V8.75Z"></path>
      <path d="M5.34 3.75a1.84 1.84 0 1 0 0 3.68 1.84 1.84 0 0 0 0-3.68Z"></path>
      <path d="M20.25 14.25c0-3.08-1.65-4.51-3.85-4.51a3.32 3.32 0 0 0-3.01 1.65h-.04V8.75h-3.05v11.5h3.18v-5.69c0-1.5.28-2.96 2.15-2.96 1.84 0 1.86 1.72 1.86 3.05v5.6h3.18v-6Z"></path>
    </svg>
  `,
  whatsapp: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.04 3.5a8.44 8.44 0 0 0-7.22 12.8L3.75 20.5l4.31-1.03a8.45 8.45 0 1 0 3.98-15.97Z"></path>
      <path d="M8.8 8.25c.18-.4.37-.41.54-.42h.46c.15 0 .38-.05.59.45.22.52.73 1.78.79 1.91.06.13.1.28.02.45-.08.17-.12.28-.25.43-.12.15-.26.33-.37.44-.12.12-.25.26-.11.51.14.25.63 1.04 1.35 1.68.93.83 1.72 1.09 1.97 1.21.25.13.4.11.55-.06.15-.17.63-.73.8-.98.17-.25.34-.21.57-.13.24.08 1.5.71 1.76.84.26.13.43.19.49.3.06.11.06.65-.15 1.27-.21.62-1.22 1.19-1.69 1.27-.43.06-.98.09-1.58-.1-.36-.11-.83-.27-1.43-.52-2.52-1.09-4.16-3.62-4.29-3.79-.13-.17-1.02-1.35-1.02-2.58s.65-1.84.88-2.09c.23-.25.5-.31.66-.31Z"></path>
    </svg>
  `
};

links.forEach((item) => {
  const linkCard = document.createElement("a");

  linkCard.className = "contact-link-card";
  linkCard.href = item.href;
  linkCard.target = "_blank";
  linkCard.rel = "noopener noreferrer";

  linkCard.innerHTML = `
    <div class="contact-link-icon">${icons[item.icon]}</div>

    <div>
      <span>${item.label}</span>
      <p>${item.value}</p>
    </div>
  `;

  contactLinksContainer.appendChild(linkCard);
});

/* Contact Form */
const form = document.querySelector("#contact-form");
const submitButton = document.querySelector("#submit-btn");
const statusText = document.querySelector("#form-status");

if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    submitButton.textContent = "Sending...";
    submitButton.disabled = true;
    statusText.textContent = "";

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      statusText.textContent = "Message sent successfully.";
      statusText.classList.remove("error");
      statusText.classList.add("success");

      form.reset();
    } catch (error) {
      statusText.textContent = "Something went wrong. Please try again.";
      statusText.classList.remove("success");
      statusText.classList.add("error");
    } finally {
      submitButton.textContent = "Send Message";
      submitButton.disabled = false;
    }
  });
}

/* Footer Year */
document.querySelector("#current-year").textContent = new Date().getFullYear();