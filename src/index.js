import "./styles.css";

(function () {
  const LOCAL_STORAGE_PROJECT_KEY = "projects.list";
  const LOCAL_STORAGE_SELECTED_ID_KEY = "projects.selectedlistid";
  const projects = {
    allProjects:
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [],
    selectedProjId: localStorage.getItem(LOCAL_STORAGE_SELECTED_ID_KEY),
    init() {
      this.cacheDom();
      this.bindEvents();
      this.saveAndRender();
    },
    cacheDom() {
      this.projectAddBtn = document.getElementById("projectAdd");
      this.projectsUl = document.getElementById("projectsUl");
      this.projectsCont = document.getElementById("projectsCont");
      this.delProjectBtn = document.getElementById("delProj");
      this.projectNameInput = document.getElementById("userProjInput");
      this.projectNameForm = document.getElementById("projForm");
      this.projectNameSubmit = document.getElementById("submitName");
    },
    bindEvents() {
      this.projectAddBtn.addEventListener(
        "click",
        this.changeToForm.bind(this)
      );
      this.projectsCont.addEventListener(
        "click",
        this.activateProject.bind(this)
      );
      this.delProjectBtn.addEventListener(
        "click",
        this.confirmDelete.bind(this)
      );
      this.projectNameSubmit.addEventListener(
        "click",
        this.getUserData.bind(this)
      );
    },
    changeToForm() {
      this.projectAddBtn.style.display = "none";
      this.projectNameForm.style.display = "flex";
    },
    getUserData() {
      const uPName = this.projectNameInput.value;
      this.projectNameInput.value = "";
      if (uPName != null && uPName.length > 0) {
        const newProject = this.createNewProject(uPName);
        this.allProjects.push(newProject);
        this.saveAndRender();
      }
      this.projectAddBtn.style.display = "inline";
      this.projectNameForm.style.display = "none";
    },
    createNewProject(name) {
      return { id: Date.now().toString(), name, tasks: [] };
    },
    saveAndRender() {
      this.save();
      this.renderProjects();
    },
    save() {
      localStorage.setItem(
        LOCAL_STORAGE_PROJECT_KEY,
        JSON.stringify(this.allProjects)
      );
      localStorage.setItem(LOCAL_STORAGE_SELECTED_ID_KEY, this.selectedProjId);
    },
    renderProjects() {
      this.clearProjects();
      this.allProjects.forEach((project) => {
        const newLi = document.createElement("li");
        newLi.innerText = project.name;
        newLi.setAttribute("id", project.id);
        if (project.id === this.selectedProjId) {
          newLi.classList.add("activatedProj");
        }
        this.projectsUl.appendChild(newLi);
      });
    },
    clearProjects() {
      this.projectsUl.innerHTML = "";
    },
    activateProject(evt) {
      this.saveAndRender();
      if (evt.target.tagName.toLowerCase() === "li") {
        this.selectedProjId = evt.target.id;
        this.saveAndRender();
      }
    },
    confirmDelete() {
      if (this.selectedProjId !== "") {
        // eslint-disable-next-line no-restricted-globals, no-alert
        const confirmed = confirm(
          "Are you sure you want to delete the project?"
        );
        if (confirmed) {
          this.delProject();
        }
      }
    },
    delProject() {
      this.allProjects.forEach((project) => {
        if (project.id === this.selectedProjId) {
          this.allProjects.splice(this.allProjects.indexOf(project), 1);
          this.saveAndRender();
        }
      });
    },
  };

  projects.init();
  const tasks = {};
})();
