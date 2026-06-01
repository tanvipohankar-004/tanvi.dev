/* ================================
   Tanvi.Dev - Project Details
================================ */

const container = document.querySelector("#project-details");
const params = new URLSearchParams(window.location.search);
const projectId = params.get("id");

const project = portfolioData.featuredProjects.find((item) => item.id === projectId);

if (!project) {
  container.innerHTML = `
    <section class="section-padding">
      <div class="container">
        <h1>Project not found.</h1>
        <a href="./projects.html" class="btn btn-primary">Back to Projects</a>
      </div>
    </section>
  `;
} else {
  container.innerHTML = `
    <section class="page-hero section-padding">
      <div class="container project-detail-hero">
        <div>
          <p class="eyebrow">${project.category}</p>
          <h1>${project.title}</h1>
          <p class="page-description">${project.tagline}</p>
        </div>

        <div class="project-detail-logo">
          <img src="${project.image}" alt="${project.title} logo">
        </div>
      </div>
    </section>

    <section class="section-padding section-muted">
      <div class="container project-detail-grid">
        <article class="card">
          <p class="eyebrow">Overview</p>
          <h2>Project Summary</h2>
          <p>${project.description}</p>
        </article>

        <article class="card">
          <p class="eyebrow">Status</p>
          <h2>${project.status}</h2>
          <p>This project is part of my practical development work and portfolio progression.</p>
        </article>

        <article class="card">
          <p class="eyebrow">Tech Stack</p>
          <div class="mini-tags">
            ${project.stack.map((tech) => `<span class="tag">${tech}</span>`).join("")}
          </div>
        </article>

        <article class="card">
          <p class="eyebrow">Links</p>
          <div class="project-actions">
            <a href="${project.github}" class="btn btn-secondary" target="_blank">GitHub</a>
            ${
              project.live && project.live !== "#"
                ? `<a href="${project.live}" class="btn btn-primary" target="_blank">Live Demo</a>`
                : `<span class="btn btn-secondary">Live Demo Soon</span>`
            }
          </div>
        </article>
      </div>
    </section>
  `;
}

const navToggle = document.querySelector("#nav-toggle");
const siteNav = document.querySelector("#site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    siteNav.classList.toggle("active");
  });
}

document.querySelector("#current-year").textContent = new Date().getFullYear();