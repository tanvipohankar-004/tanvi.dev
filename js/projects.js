/* ================================
   Tanvi.Dev - Projects Page
================================ */

const projectGrid = document.querySelector("#projects-grid");
const searchInput = document.querySelector("#project-search");
const filterButtons = document.querySelectorAll(".filter-btn");
const navToggle = document.querySelector("#nav-toggle");
const siteNav = document.querySelector("#site-nav");

let activeFilter = "all";
const allProjects = portfolioData.featuredProjects;

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("active");
    navToggle.setAttribute("aria-expanded", isOpen);
  });
}

const getProjectType = (project) => {
  const text = `${project.category} ${project.status} ${project.stack.join(" ")}`.toLowerCase();

  if (text.includes("upcoming") || text.includes("currently")) return "building";
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
      <div class="project-image-wrap">
        <img src="${project.image}" alt="${project.title} logo" class="project-image">
      </div>

      <div class="project-content">
        <span class="project-status">${project.status}</span>
        <p class="eyebrow">${project.category}</p>
        <h3>${project.title}</h3>
        <p class="project-tagline">${project.tagline}</p>

        <div class="project-stack">
          ${project.stack.slice(0, 4).map((tech) => `<span>${tech}</span>`).join("")}
        </div>

        <div class="project-actions">
          <a href="./project-details.html?id=${project.id}" class="btn btn-secondary">View Details</a>
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