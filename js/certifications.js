/* ================================
   Tanvi.Dev - Certifications
================================ */

const certificationGrid =
  document.querySelector("#certification-grid");

const navToggle =
  document.querySelector("#nav-toggle");

const siteNav =
  document.querySelector("#site-nav");

if (navToggle && siteNav) {

  navToggle.addEventListener("click", () => {

    const isOpen =
      siteNav.classList.toggle("active");

    navToggle.setAttribute(
      "aria-expanded",
      isOpen
    );

  });

}

const renderCertifications = () => {

  if (!certificationGrid) return;

  certificationGrid.innerHTML = "";

  portfolioData.certifications.forEach((cert) => {

    const card =
      document.createElement("article");

    card.className =
      "card certification-card";

    card.innerHTML = `

      <div class="certification-image-wrap">

        <img
          src="${cert.image}"
          alt="${cert.title}"
          class="certification-image"
        >

      </div>

      <div class="certification-content">

        <div class="certification-topline">

          <span class="certification-category">
            ${cert.category}
          </span>

          <span class="certification-issuer">
            ${cert.issuer}
          </span>

        </div>

        <h3>${cert.title}</h3>

        <p class="certification-description">
          ${cert.description}
        </p>

        <a
          href="${
            cert.credential &&
            cert.credential !== "#"

            ? cert.credential

            : cert.certificateFile
          }"

          class="btn btn-secondary"

          target="_blank"

          rel="noopener noreferrer"
        >
          View Certificate
        </a>

      </div>

    `;

    certificationGrid.appendChild(card);

  });

};

renderCertifications();

document.querySelector("#current-year").textContent =
  new Date().getFullYear();