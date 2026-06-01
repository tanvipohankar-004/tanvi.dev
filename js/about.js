/* ================================
   Tanvi.Dev - About Page
================================ */

const navToggle = document.querySelector("#nav-toggle");
const siteNav = document.querySelector("#site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("active");
    navToggle.setAttribute("aria-expanded", isOpen);
  });
}

const renderTextBlocks = (selector, items) => {
  const container = document.querySelector(selector);
  if (!container) return;

  container.innerHTML = items
    .map((item) => `<p class="section-text">${item}</p>`)
    .join("");
};

const renderCards = (selector, items) => {
  const container = document.querySelector(selector);
  if (!container) return;

  container.innerHTML = items
    .map(
      (item) => `
        <article class="card">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>
      `
    )
    .join("");
};
const renderEducation = () => {
  const container = document.querySelector("#education-section");

  if (!container) return;

  const education = portfolioData.about.education;

  container.innerHTML = `
    <article class="card education-card">

      <div class="education-layout">

        <div class="education-primary">

          <p class="eyebrow">Education</p>

          <h3>${education.degree}</h3>

          <p class="education-branch">
            ${education.branch}
          </p>

          <p class="education-college">
            ${education.college}
          </p>

          <p class="education-location">
            ${education.location}
          </p>

        </div>

        <div class="education-secondary">

          <div class="education-item">
            <span>Duration</span>
            <p>${education.duration}</p>
          </div>

          <div class="education-item">
            <span>Academic Status</span>
            <p>Graduated</p>
          </div>

          <div class="education-item">
            <span>Current Focus</span>
            <p>Backend Systems & SQL</p>
          </div>

          <div class="education-item">
            <span>Research</span>
            <p>Published IJIRT Research Paper</p>
          </div>

        </div>

      </div>

    </article>
  `;
};

const renderResearch = () => {
  const container = document.querySelector("#research-section");

  if (!container) return;

  container.innerHTML = portfolioData.about.research
    .map(
      (item) => `
        <article class="card">

          <span class="project-status">${item.status}</span>

          <h3>${item.title}</h3>

          <p>${item.description}</p>

          <div class="mini-tags">
            ${item.technologies
              .map((tech) => `<span class="tag">${tech}</span>`)
              .join("")}
          </div>

          <div class="research-meta">
            <p>
              <strong>Publication:</strong>
              ${item.publication}
            </p>

            <p>
              <strong>Paper ID:</strong>
              ${item.paperId}
            </p>
          </div>

          <a
            href="${item.link}"
            class="text-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Publication
          </a>

        </article>

        <article class="card">

          <div class="research-contribution">

            <h3>Contribution</h3>

            <ul>
              ${item.contribution
                .map((point) => `<li>${point}</li>`)
                .join("")}
            </ul>

          </div>

        </article>
      `
    )
    .join("");
};

renderTextBlocks("#about-intro", portfolioData.about.intro);
renderTextBlocks("#about-workflow", portfolioData.about.workflow);

renderCards("#about-interests", portfolioData.about.interests);
renderCards("#about-personality", portfolioData.about.personality);

renderEducation();
renderResearch();

document.querySelector("#current-year").textContent =
  new Date().getFullYear();
