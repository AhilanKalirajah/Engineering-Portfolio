const projects = [
  {
    id: "paint-line",
    title: "Paint Line Beam Lift System",
    category: "Plant Layout / AutoCAD",
    filters: ["layout", "manufacturing"],
    summary: "Workers were manually lifting heavy beams on the paint line, creating an ergonomic and safety risk. I recreated the existing line in AutoCAD to identify physical constraints before lift concepts were developed.",
    featuredImage: "images/North American Steel Paint Line Layout for Racking Lift/Modified Layout showing actual top view.jpg",
    featuredAlt: "AutoCAD top view of the modified paint line layout",
    problem: "Operators were exposed to repetitive manual lifting of heavy beams during the paint process.",
    constraints: [
      "Existing production equipment could not be relocated.",
      "Structural steel, conveyor elevations, and cooling tunnel clearances limited possible lift locations.",
      "Operator and maintenance access needed to remain available.",
      "The future lifting system could not interfere with normal production."
    ],
    role: "Surveyed the paint line, recreated the existing facility in AutoCAD, produced plan, front, side, and cross-sectional views, and documented constraints for lift concept development.",
    process: [
      "Reviewed the existing paint line and where manual lifting occurred.",
      "Built accurate AutoCAD layouts from field measurements.",
      "Created cross-sectional views to understand clearances and elevations.",
      "Added the beam position to evaluate possible lift paths and interference points."
    ],
    tools: ["AutoCAD", "Plant layout", "Field measurement", "Engineering documentation"],
    skills: ["Workplace safety", "Constraint identification", "Manufacturing support", "Layout planning", "Cross-section development"],
    outcome: "The completed layouts became the engineering foundation for a safer beam lifting solution and reduced uncertainty before concept development.",
    gallery: [
      ["images/North American Steel Paint Line Layout for Racking Lift/Original Layout.jpg", "Original Layout"],
      ["images/North American Steel Paint Line Layout for Racking Lift/Modified Layout showing actual top view.jpg", "Modified Top View"],
      ["images/North American Steel Paint Line Layout for Racking Lift/Modified Layout Showing Front View.jpg", "Front View"],
      ["images/North American Steel Paint Line Layout for Racking Lift/Modified Layout Showing Side View.jpg", "Side View"],
      ["images/North American Steel Paint Line Layout for Racking Lift/Modified Layout Showing Cross Sectional View.jpg", "Cross Section"],
      ["images/North American Steel Paint Line Layout for Racking Lift/Cross Sectional View with Beam On Line.jpg", "Cross Section with Beam"]
    ]
  },
  {
    id: "legacy-cad",
    title: "Production Component Reverse Engineering / Legacy CAD Modernization",
    category: "CAD Modernization / Reverse Engineering",
    filters: ["cad", "manufacturing"],
    summary: "AutoCAD production drawings were converted into SolidWorks models, with dimensions verified so the new CAD reflected shop-floor changes made over years of production.",
    featuredImage: "images/North American Steel AutoCAD to Solidworks conversion/Cross-Member.jpg",
    featuredAlt: "SolidWorks model of a cross-member production component",
    problem: "Production components existed mainly as 2D AutoCAD drawings, limiting future design changes, assembly review, and documentation updates.",
    constraints: [
      "Models needed to preserve the intent of legacy manufacturing drawings.",
      "Shop-floor revisions had to be reflected instead of blindly copying outdated drawings.",
      "Critical dimensions and manufacturing features needed verification.",
      "The resulting files needed to be editable production CAD, not simple imported geometry."
    ],
    role: "Reviewed legacy drawings, verified dimensions, rebuilt parts as SolidWorks parametric models, and prepared accurate CAD files for the engineering library.",
    process: [
      "Interpreted AutoCAD drawings for design intent, tolerances, slots, threads, bends, and mounting features.",
      "Checked production dimensions against current components and documentation.",
      "Rebuilt parts with SolidWorks feature-based modelling.",
      "Reviewed final models against drawings before adding them to the CAD library."
    ],
    tools: ["SolidWorks", "AutoCAD", "Manufacturing drawings", "Parametric modelling"],
    skills: ["Reverse engineering", "Dimension verification", "Drawing interpretation", "Sheet metal design", "Production CAD library modernization"],
    outcome: "Created accurate SolidWorks models that simplified future modifications, documentation updates, and manufacturing support.",
    gallery: [
      ["images/North American Steel AutoCAD to Solidworks conversion/1052 - Bracing Line - Bottom Shaft DWG.1.jpg", "Bottom Shaft Drawing"],
      ["images/North American Steel AutoCAD to Solidworks conversion/1052 - Bracing Line - Bottom Shaft.jpg", "Bottom Shaft Model"],
      ["images/North American Steel AutoCAD to Solidworks conversion/Cross-Member Flat Pattern.jpg", "Cross-Member Flat Pattern"],
      ["images/North American Steel AutoCAD to Solidworks conversion/Cross-Member.jpg", "Cross-Member Model"],
      ["images/North American Steel AutoCAD to Solidworks conversion/Front Upright Component.jpg", "Front Upright Component"],
      ["images/North American Steel AutoCAD to Solidworks conversion/Shaft.jpg", "Shaft Model"]
    ]
  },
  {
    id: "safety-clip",
    title: "Safety Clip Development",
    category: "Manufacturing Design & Production Support",
    filters: ["manufacturing", "prototype", "cad"],
    summary: "A generic shop-floor safety clip was reverse engineered in SolidWorks, prototyped with 3D printing, test-fitted on production racking, revised, and released for mass production.",
    featuredImage: "images/North American Steel Projects/W4810 Safet Clip 3D Model.jpg",
    featuredAlt: "SolidWorks model of a safety clip",
    problem: "A replacement safety clip was required for an existing racking system, but no usable CAD model existed.",
    constraints: [
      "The clip had to match the functional geometry of the existing shop-floor component.",
      "Fit and retention needed to be validated on the actual racking.",
      "The final version needed usable manufacturing documentation.",
      "Prototype revisions had to happen quickly enough to support production needs."
    ],
    role: "Reverse engineered the clip, created the SolidWorks sheet metal model, produced drawings, 3D printed prototypes, validated fit, revised the design, and supported final release.",
    process: [
      "Measured and analyzed the existing component geometry, bends, and retention features.",
      "Built a parametric SolidWorks sheet metal model.",
      "3D printed prototypes and test-fitted them on production racking.",
      "Updated the model and drawing before final manufacturing release."
    ],
    tools: ["SolidWorks", "Sheet metal", "3D printing", "Manufacturing drawings"],
    skills: ["Reverse engineering", "Rapid prototyping", "Fit validation", "Production support", "Manufacturing release"],
    outcome: "Developed a production-ready replacement safety clip that moved from physical sample to CAD, prototype validation, and mass production.",
    gallery: [
      ["images/North American Steel Projects/W4810 Safet Clip 3D Model.jpg", "Safety Clip 3D Model"],
      ["images/North American Steel Projects/W4810 Safet Clip DWG.jpg", "Safety Clip Drawing"]
    ]
  },
  {
    id: "manufacturing-prototypes",
    title: "Manufacturing Support Prototypes",
    category: "Manufacturing Design & Production Support",
    filters: ["manufacturing", "prototype", "cad"],
    summary: "Shop-floor workers requested practical prototypes to support production, including a beam rack prototype and a powder coating holder prototype.",
    featuredImage: "images/North American Steel Projects/Beam Rack Prototype.jpg",
    featuredAlt: "Beam rack prototype model",
    problem: "Production teams needed practical support fixtures and prototype concepts that could be fabricated and tested quickly.",
    constraints: [
      "Concepts needed to be simple enough for fabrication.",
      "Designs had to reflect how operators handled parts on the shop floor.",
      "Drawings needed to communicate geometry clearly for manufacturing.",
      "Prototype work had to stay practical, not over-engineered."
    ],
    role: "Collaborated with shop-floor workers, created SolidWorks models, developed weldment and sheet metal concepts, and produced drawings for prototype review.",
    process: [
      "Collected requirements from production workers.",
      "Created CAD concepts for fixtures and holders.",
      "Prepared drawings to communicate fabrication details.",
      "Reviewed concepts for manufacturability and production usefulness."
    ],
    tools: ["SolidWorks", "Weldments", "Sheet metal", "Manufacturing drawings"],
    skills: ["Shop-floor collaboration", "Rapid prototyping", "Design for fabrication", "Practical production support", "Tooling concepts"],
    outcome: "Provided usable prototype concepts that helped production evaluate fixture and holder ideas before fabrication.",
    gallery: [
      ["images/North American Steel Projects/Beam Rack Prototype.jpg", "Beam Rack Prototype"],
      ["images/North American Steel Projects/Powder Coating Holder Prototype Model.jpg", "Powder Coating Holder Model"],
      ["images/North American Steel Projects/Powder Coating Holder Prototype DWG.jpg", "Powder Coating Holder Drawing"]
    ]
  },
  {
    id: "personal-projects",
    title: "Personal Engineering Projects",
    category: "Self-Directed Design Projects",
    filters: ["cad"],
    summary: "Self-directed SolidWorks projects completed to strengthen complex modelling, assembly design, mechanism design, manufacturability thinking, and engineering visualization.",
    featuredImage: "images/Hobby Projects/Honda V8 Engine.jpg",
    featuredAlt: "SolidWorks model of a Honda V8 engine",
    problem: "Continued CAD development required challenging projects outside professional work that exercised assembly design and mechanism thinking.",
    constraints: [
      "Models needed to be complex enough to build real CAD skill.",
      "Assemblies needed organized parts, mates, and component relationships.",
      "The can crusher mechanism needed clear force transmission and pivot geometry.",
      "Designs needed to remain understandable and manufacturable."
    ],
    role: "Created self-directed mechanical models and assemblies to improve SolidWorks proficiency and design judgment.",
    process: [
      "Modelled a detailed Honda V8 engine assembly to practice complex part relationships.",
      "Designed a manual can crusher with pivoting linkage geometry.",
      "Worked through manufacturability, assembly, and motion considerations.",
      "Used each project to strengthen CAD discipline and mechanical design fundamentals."
    ],
    tools: ["SolidWorks", "Assembly design", "Part modelling", "Mechanism design"],
    skills: ["Personal initiative", "Mechanical modelling", "Assembly mates", "Design learning", "Engineering visualization"],
    outcome: "Strengthened mechanical design capability through self-directed work in complex assemblies and practical mechanism design.",
    gallery: [
      ["images/Hobby Projects/Honda V8 Engine.jpg", "Honda V8 Engine Model"],
      ["images/Hobby Projects/Can Crusher.jpg", "Manual Can Crusher Model"]
    ]
  },
  {
    id: "methods-documentation",
    title: "Controlled Methods Documentation Experience",
    category: "Professional Experience Note",
    filters: ["experience"],
    summary: "A concise experience section covering confidential methods-engineering work: process documentation, technician support, SAP documentation control, and cross-functional coordination. No proprietary examples are shown.",
    featuredImage: "images/North American Steel AutoCAD to Solidworks conversion/1052 - Bracing Line - Bottom Shaft DWG.2.jpg",
    featuredAlt: "Technical production drawing representing documentation work",
    problem: "Production and repair environments require clear, controlled documentation so technicians can follow approved inspection, repair, assembly, or rework steps consistently.",
    constraints: [
      "Proprietary customer drawings, repair layouts, and internal documentation cannot be shown.",
      "Documentation needed to align with engineering requirements, quality expectations, and controlled processes.",
      "Technicians needed clear instructions during inspection, repair, and reassembly.",
      "Changes required coordination across Engineering, Quality, Supply Chain, and Production."
    ],
    role: "Developed and revised process documentation, interpreted technical documents, supported technicians, coordinated cross-functionally, and maintained SAP documentation control.",
    process: [
      "Interpreted drawings, technical manuals, NCRs, instructions, and engineering documentation.",
      "Developed or revised process sheets and repair/assembly instructions.",
      "Supported technicians during inspection, repair, and reassembly work.",
      "Coordinated documentation updates through controlled systems and stakeholder review."
    ],
    tools: ["SAP", "Technical manuals", "Process sheets", "Engineering drawings", "Documentation control"],
    skills: ["Methods engineering", "Technical documentation", "Production support", "Cross-functional coordination", "Confidential documentation control"],
    outcome: "Supported controlled production work with accurate process documentation and hands-on engineering support while maintaining confidentiality.",
    gallery: []
  }
];

const projectGrid = document.querySelector("#projectGrid");
const filterButtons = document.querySelectorAll(".filter");

function listMarkup(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function tagsMarkup(items) {
  return items.map((item) => `<span>${item}</span>`).join("");
}

function galleryMarkup(project) {
  if (!project.gallery.length) {
    return `<p class="confidential-note">Images are omitted for this experience note to protect confidential technical documentation.</p>`;
  }

  return project.gallery.map(([src, label]) => `
    <a class="gallery-item" href="${src}" target="_blank" rel="noopener">
      <img src="${src}" alt="${label}" loading="lazy">
      <span>${label}</span>
    </a>
  `).join("");
}

function projectMarkup(project) {
  return `
    <article class="project-card" data-filters="${project.filters.join(" ")}">
      <button class="project-summary" type="button" aria-expanded="false" aria-controls="${project.id}-details">
        <img src="${project.featuredImage}" alt="${project.featuredAlt}" loading="lazy">
        <span class="project-meta">${project.category}</span>
        <h3>${project.title}</h3>
        <p>${project.summary}</p>
        <span class="tag-row">${tagsMarkup(project.tools.slice(0, 4))}</span>
        <span class="open-label">Open case study</span>
      </button>
      <div class="project-details" id="${project.id}-details" hidden>
        <div class="detail-grid">
          <section>
            <h4>Problem / Objective</h4>
            <p>${project.problem}</p>
          </section>
          <section>
            <h4>Constraints</h4>
            <ul>${listMarkup(project.constraints)}</ul>
          </section>
          <section>
            <h4>My Role</h4>
            <p>${project.role}</p>
          </section>
          <section>
            <h4>Engineering Process</h4>
            <ol>${listMarkup(project.process)}</ol>
          </section>
          <section>
            <h4>Tools Used</h4>
            <div class="chip-list">${tagsMarkup(project.tools)}</div>
          </section>
          <section>
            <h4>Skills Demonstrated</h4>
            <div class="chip-list">${tagsMarkup(project.skills)}</div>
          </section>
          <section class="wide">
            <h4>Outcome / Result</h4>
            <p>${project.outcome}</p>
          </section>
        </div>
        <div class="gallery">
          ${galleryMarkup(project)}
        </div>
      </div>
    </article>
  `;
}

function renderProjects() {
  projectGrid.innerHTML = projects.map(projectMarkup).join("");

  document.querySelectorAll(".project-summary").forEach((button) => {
    button.addEventListener("click", () => {
      const details = document.getElementById(button.getAttribute("aria-controls"));
      const isOpen = button.getAttribute("aria-expanded") === "true";

      button.setAttribute("aria-expanded", String(!isOpen));
      details.hidden = isOpen;
      button.closest(".project-card").classList.toggle("expanded", !isOpen);
    });
  });
}

function applyFilter(selected) {
  document.querySelectorAll(".project-card").forEach((card) => {
    const filters = card.dataset.filters.split(" ");
    card.hidden = selected !== "all" && !filters.includes(selected);
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    applyFilter(button.dataset.filter);
  });
});

renderProjects();
