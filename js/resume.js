/* ================================
   Tanvi.Dev - Resume Hub
================================ */

const resumeGrid = document.querySelector("#resume-grid");
const navToggle = document.querySelector("#nav-toggle");
const siteNav = document.querySelector("#site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("active");
    navToggle.setAttribute("aria-expanded", isOpen);
  });
}

const renderResumes = () => {
  if (!resumeGrid) return;

  resumeGrid.innerHTML = "";

  portfolioData.resumes.forEach((resume) => {
    const card = document.createElement("article");
    card.className = "card resume-card";

    card.innerHTML = `
      <div class="resume-icon">
        <span>PDF</span>
      </div>

      <div class="resume-content">
        <div class="resume-topline">
          <span class="resume-status">${resume.status}</span>
          ${resume.ats ? `<span class="resume-ats">ATS Ready</span>` : ""}
        </div>

        <h3>${resume.title}</h3>
                    <div class="resume-focus">
           ${(Array.isArray(resume.focus) ? resume.focus : [resume.focus])
  .map((item) => `<span>${item}</span>`)
  .join("")}
            </div>
        <p class="resume-description">${resume.description}</p>

        <a
          href="./assets/resumes/${resume.filename}"
          class="btn btn-primary"
          download
        >
          Download Resume
        </a>
      </div>
    `;

    resumeGrid.appendChild(card);
  });
};

renderResumes();

document.querySelector("#current-year").textContent = new Date().getFullYear();