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
  $("#hero-description").textContent = portfolioData.profile.heroDescription;
  $("#quick-intro").textContent = portfolioData.profile.quickIntro;
  $("#profile-status").textContent = portfolioData.profile.status;
  $("#contact-preview").textContent = portfolioData.contact.message;
  $("#footer-meta").textContent = portfolioData.profile.footerText;
  $("#current-year").textContent = new Date().getFullYear();
};

/* Social Links */
const renderSocialLinks = () => {
  const container = $("#hero-links");
  if (!container) return;

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

  portfolioData.focusTags.forEach((tagText) => {
    const tag = createElement("span", "tag", tagText);
    container.appendChild(tag);
  });
};

/* Projects */
const renderProjects = () => {
  const container = $("#featured-projects");
  if (!container) return;

  portfolioData.featuredProjects.forEach((project) => {
    const card = createElement("article", "card project-card");

    card.innerHTML = `
      <div class="project-image-wrap">
        <img src="${project.image}" alt="${project.title} preview" class="project-image">
      </div>

      <div class="project-content">
        <span class="project-status">${project.status}</span>
        <p class="eyebrow">${project.category}</p>
        <h3>${project.title}</h3>
        <p class="project-tagline">${project.tagline}</p>
        <p>${project.description}</p>

        <div class="project-stack">
          ${project.stack.map((tech) => `<span>${tech}</span>`).join("")}
        </div>

        <div class="project-actions">
          <a href="${project.github}" class="text-link" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="${project.live}" class="text-link" target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
};

/* Tech Stack */
const renderTechStack = () => {
  const container = $("#tech-stack");
  if (!container) return;

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

/* AI Companions */
const renderAICompanions = () => {
  const container = $("#ai-companions");
  if (!container) return;

  portfolioData.aiCompanions.forEach((tool) => {
    const card = createElement("article", "card");
    const title = createElement("h3", "", tool.name);
    const usage = createElement("p", "", tool.usage);

    card.append(title, usage);
    container.appendChild(card);
  });
};

/* Currently Building */
const renderCurrentlyBuilding = () => {
  const container = $("#currently-building");
  if (!container) return;

  portfolioData.currentlyBuilding.forEach((item) => {
    const card = createElement("article", "card");
    const title = createElement("h3", "", item.title);
    const description = createElement("p", "", item.description);

    card.append(title, description);
    container.appendChild(card);
  });
};

/* Capabilities */
const renderCapabilities = () => {
  const container = $("#services");
  if (!container) return;

  portfolioData.capabilities.forEach((item) => {
    const card = createElement("article", "card");
    const title = createElement("h3", "", item.title);
    const description = createElement("p", "", item.description);

    card.append(title, description);
    container.appendChild(card);
  });
};

/* Leadership */
const renderLeadership = () => {
  const container = $("#leadership-preview");
  if (!container) return;

  portfolioData.leadership.forEach((item) => {
    const card = createElement("article", "card");
    const title = createElement("h3", "", item.title);
    const description = createElement("p", "", item.description);

    card.append(title, description);
    container.appendChild(card);
  });
};

/* Resume Preview */
const renderResumePreview = () => {
  const container = $("#resume-preview-actions");
  if (!container) return;

  portfolioData.resumes.forEach((resume) => {
    const link = createElement("a", "btn btn-secondary", resume.title);
    link.href = resume.file;

    container.appendChild(link);
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
  renderAICompanions();
  renderCurrentlyBuilding();
  renderCapabilities();
  renderLeadership();
  renderResumePreview();
});