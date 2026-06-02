/* ================================
   Tanvi.Dev - App Script
================================ */

const $ = (selector) => document.querySelector(selector);

const createElement = (tag, className, content = "") => {
  const element = document.createElement(tag);

  if (className) {
    element.className = className;
  }

  if (content) {
    element.textContent = content;
  }

  return element;
};

/* Header */
const initNavigation = () => {
  const navToggle = $("#nav-toggle");
  const siteNav = $("#site-nav");

  if (!navToggle || !siteNav) return;

  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("active");
    navToggle.setAttribute("aria-expanded", isOpen);
  });
};

/* Typing Roles */
const initRoleTyping = () => {
  const roleElement = $("#profile-role");
  const roles = portfolioData.profile.roles;

  if (!roleElement || !roles.length) return;

  let index = 0;

  roleElement.textContent = roles[index];

  setInterval(() => {
    index = (index + 1) % roles.length;
    roleElement.textContent = roles[index];
  }, 2200);
};

/* Profile */
const renderProfile = () => {
  const profileStatus = $("#profile-status");
  const footerMeta = $("#footer-meta");
  const currentYear = $("#current-year");

  if (profileStatus) {
    profileStatus.textContent = portfolioData.profile.status;
  }

  if (footerMeta) {
    footerMeta.textContent = portfolioData.profile.footerText;
  }

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }
};

/* Social Links */
const renderSocialLinks = () => {
  const container = $("#hero-links");
  if (!container) return;

  container.innerHTML = "";

  portfolioData.socialLinks.forEach((item) => {
    const link = createElement("a", "text-link", item.label);
    link.href = item.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    container.appendChild(link);
  });
};

/* Snapshot */
const renderSnapshot = () => {
  const container = $("#profile-snapshot");
  if (!container) return;

  container.innerHTML = "";

  portfolioData.snapshot.forEach((item) => {
    const card = createElement("article", "card");
    const title = createElement("p", "eyebrow", item.title);
    const value = createElement("h3", "", item.value);

    card.append(title, value);
    container.appendChild(card);
  });
};

/* Focus Tags */
const renderFocusTags = () => {
  const container = $("#focus-tags");
  if (!container) return;

  container.innerHTML = "";

  portfolioData.focusTags.forEach((tagText) => {
    const tag = createElement("span", "tag", tagText);
    container.appendChild(tag);
  });
};

/* Featured Projects */
const renderProjects = () => {
  const container = $("#featured-projects");
  if (!container) return;

  container.innerHTML = "";

  portfolioData.featuredProjects.forEach((project) => {
    const card = createElement("article", "card project-card featured-project-card");

    card.innerHTML = `
      <div class="project-logo-area">
        <img src="${project.image}" alt="${project.title} logo" class="project-logo">
      </div>

      <div class="project-content">
        <h3>${project.title}</h3>
        <p class="project-tagline">${project.tagline}</p>

        <a href="./projects.html" class="btn btn-secondary">
          View Details
        </a>
      </div>
    `;

    container.appendChild(card);
  });
};

/* Tech Stack */
const renderTechStack = () => {
  const container = $("#tech-stack");
  if (!container) return;

  container.innerHTML = "";

  portfolioData.techStack.forEach((group) => {
    const card = createElement("article", "card");
    const title = createElement("h3", "", group.title);
    const list = createElement("div", "mini-tags");

    group.items.forEach((item) => {
      list.appendChild(createElement("span", "tag", item));
    });

    card.append(title, list);
    container.appendChild(card);
  });
};

/* Init */
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initRoleTyping();

  renderProfile();
  renderSocialLinks();
  renderSnapshot();
  renderFocusTags();
  renderProjects();
  renderTechStack();
});