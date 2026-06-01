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

const renderTimeline = () => {
  const container = document.querySelector("#about-timeline");
  if (!container) return;

  container.innerHTML = portfolioData.about.timeline
    .map(
      (item) => `
        <article class="timeline-item">
          <span>${item.year}</span>
          <div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
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
renderTimeline();

document.querySelector("#current-year").textContent = new Date().getFullYear();