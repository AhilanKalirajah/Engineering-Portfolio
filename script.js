const projects = [
  ["page-09-01.jpg", "cad", "Shaft Model", "SolidWorks shaft model"],
  ["page-09-02.jpg", "cad", "Shaft Model Variant", "Second SolidWorks shaft model"],
  ["page-10-01.jpg", "drawing", "Shaft Drawing", "Manufacturing drawing for shaft component"],
  ["page-11-01.jpg", "drawing", "Shaft Drawing Detail", "Second manufacturing drawing for shaft component"],
  ["page-12-02.jpg", "cad", "Step-Up Beam Plate", "Step-up beam plate SolidWorks model"],
  ["page-12-03.jpg", "cad", "Step-Up Beam Plate", "Angled step-up beam plate model"],
  ["page-13-01.jpg", "cad", "Cross-Member Part", "Cross-member component side view"],
  ["page-13-02.jpg", "cad", "Cross-Member Part", "Cross-member SolidWorks model"],
  ["page-15-01.jpg", "cad", "Safety Clip", "Safety clip SolidWorks model"],
  ["page-16-01.jpg", "drawing", "Safety Clip Drawing", "Manufacturing drawing for safety clip"],
  ["page-17-01.jpg", "cad", "Paint Line Lift", "Paint line lift assembly model"],
  ["page-17-02.jpg", "cad", "Paint Line Lift Assembly", "Alternate paint line lift assembly view"],
  ["page-18-01.jpg", "cad", "Basket Holder Assembly", "Basket holder assembly model"],
  ["page-19-01.jpg", "cad", "Paint Line Hopper", "Paint line hopper model"],
  ["page-20-01.jpg", "drawing", "Paint Line Hopper Drawing", "Manufacturing drawing for paint line hopper"],
  ["page-23-01.jpg", "layout", "Compressor Room Top View", "AutoCAD compressor room top-view layout"],
  ["page-24-01.jpg", "layout", "Compressor Room Front View", "AutoCAD compressor room front-view layout"],
  ["page-25-01.jpg", "layout", "Duct Layout", "AutoCAD compressor room duct layout"],
  ["page-27-01.jpg", "layout", "Paint Line Old Layout", "AutoCAD paint line old top-view layout"],
  ["page-28-01.jpg", "layout", "Paint Line Updated Layout", "AutoCAD paint line updated top-view layout"],
  ["page-29-01.jpg", "layout", "Paint Line Front View", "AutoCAD paint line front-view layout"],
  ["page-30-01.jpg", "layout", "Paint Line Cross Section", "AutoCAD paint line cross-sectional layout"],
  ["page-31-01.jpg", "layout", "Paint Line With Beam", "AutoCAD paint line cross-sectional view with beam"],
  ["page-32-01.jpg", "layout", "Paint Line Side View", "AutoCAD paint line side-view layout"],
  ["page-36-01.jpg", "cad", "Gasoline Engine Concept", "Gasoline engine concept CAD assembly"],
  ["page-36-02.jpg", "cad", "Can Crusher Concept", "Can crusher concept CAD model"],
  ["page-37-01.jpg", "layout", "Walk-In Closet Layout", "Walk-in closet AutoCAD top-view layout"],
  ["page-37-02.jpg", "layout", "Walk-In Closet Front View", "Walk-in closet AutoCAD front-view layout"],
  ["page-37-03.jpg", "layout", "Walk-In Closet Cabinet View", "Walk-in closet cabinet layout drawing"]
];

const filterButtons = document.querySelectorAll(".filter");
const projectGrid = document.querySelector("#projectGrid");

function categoryLabel(category) {
  return {
    cad: "CAD",
    drawing: "Drawing",
    layout: "Layout",
    prototype: "Prototype"
  }[category];
}

function renderProjects() {
  projectGrid.innerHTML = projects
    .map(([file, category, title, alt]) => `
      <article class="project-card" data-category="${category}">
        <a href="images/${file}" target="_blank" rel="noopener">
          <img src="images/${file}" alt="${alt}" loading="lazy">
        </a>
        <div class="project-content">
          <span>${categoryLabel(category)}</span>
          <h3>${title}</h3>
          <p>${alt}</p>
        </div>
      </article>
    `)
    .join("");
}

function applyFilter(selected) {
  document.querySelectorAll(".project-card").forEach((card) => {
    const shouldShow = selected === "all" || card.dataset.category === selected;
    card.hidden = !shouldShow;
  });
}

renderProjects();

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.filter;

    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    applyFilter(selected);
  });
});
