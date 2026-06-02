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

/*Email.js Initiation */

emailjs.init("smZ0y3byHtEiYGfxl");

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const submitBtn = contactForm.querySelector("button");
  const originalBtnText = submitBtn.innerText;

  submitBtn.innerText = "Sending...";
  submitBtn.disabled = true;

  const templateParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value
  };

  try {

    // MAIN MESSAGE TO YOU
    await emailjs.send(
      "service_yx72loj",
      "template_reblpis",
      templateParams
    );

    // AUTO REPLY TO USER
    await emailjs.send(
      "service_yx72loj",
      "template_xuy3ips",
      templateParams
    );

    alert("Message sent successfully.");

    contactForm.reset();

  } catch (error) {

    console.error("EmailJS Error:", error);

    alert("Something went wrong. Please try again.");

  } finally {

    submitBtn.innerText = originalBtnText;
    submitBtn.disabled = false;

  }
});