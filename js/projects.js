/* ================================
   Tanvi.Dev - Projects Page
================================ */

const projectGrid = document.querySelector("#projects-grid");
const searchInput = document.querySelector("#project-search");
const filterButtons = document.querySelectorAll(".filter-btn");
const navToggle = document.querySelector("#nav-toggle");
const siteNav = document.querySelector("#site-nav");

let activeFilter = "all";
const allProjects = portfolioData.projects;

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("active");
    navToggle.setAttribute("aria-expanded", isOpen);
  });
}

const getProjectType = (project) => {
  const text = `
    ${project.category}
    ${project.status}
    ${project.stack.join(" ")}
    ${(project.futureStack || []).join(" ")}
  `.toLowerCase();

  if (text.includes("currently") || text.includes("upcoming")) return "building";
  if (text.includes("backend") || text.includes("spring") || text.includes("api")) return "backend";
  if (text.includes("sql") || text.includes("mysql") || text.includes("database")) return "database";

  return "frontend";
};

const renderProjects = (projects) => {
  if (!projectGrid) return;

  projectGrid.innerHTML = "";

  if (!projects.length) {
    projectGrid.innerHTML = `<p class="empty-state">No projects found.</p>`;
    return;
  }

  projects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "card project-card";

    card.innerHTML = `
      <div class="project-logo-area">
        <img src="${project.image}" alt="${project.title} logo" class="project-logo">
      </div>

      <div class="project-content">
        <div class="project-topline">
          <span class="project-status">${project.status}</span>
          <span class="project-category">${project.category}</span>
        </div>

        <h3>${project.title}</h3>
        <p class="project-tagline">${project.tagline}</p>
        <p class="project-description">${project.description}</p>

        <div class="project-stack">
          ${project.stack.map((tech) => `<span>${tech}</span>`).join("")}
        </div>

        ${
          project.futureStack
            ? `
              <div class="project-future">
                <p class="project-mini-title">Future Integration</p>
                <div class="project-stack">
                  ${project.futureStack.map((tech) => `<span>${tech}</span>`).join("")}
                </div>
              </div>
            `
            : ""
        }

        <div class="project-actions project-actions-split">
          <a href="${project.github}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>

          ${
            project.live && project.live !== "#"
              ? `
                <a href="${project.live}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              `
              : `
                <span class="btn btn-secondary">
                  Live Soon
                </span>
              `
          }
        </div>
      </div>
    `;

    projectGrid.appendChild(card);
  });
};

const applyFilters = () => {
  const searchValue = searchInput.value.toLowerCase().trim();

  const filteredProjects = allProjects.filter((project) => {
    const projectType = getProjectType(project);
    const matchesFilter = activeFilter === "all" || projectType === activeFilter;

    const searchText = `
      ${project.title}
      ${project.tagline}
      ${project.category}
      ${project.description}
      ${project.stack.join(" ")}
      ${(project.futureStack || []).join(" ")}
      ${project.status}
    `.toLowerCase();

    return matchesFilter && searchText.includes(searchValue);
  });

  renderProjects(filteredProjects);
};

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    activeFilter = button.dataset.filter;
    applyFilters();
  });
});

if (searchInput) {
  searchInput.addEventListener("input", applyFilters);
}

document.querySelector("#current-year").textContent = new Date().getFullYear();

renderProjects(allProjects);