import "./styles.css";

(function () {
  const LOCAL_STORAGE_PROJECT_KEY = "projects.list";
  const LOCAL_STORAGE_SELECTED_ID_KEY = "projects.selectedlistid";

  const projects = {
    allProjects:
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [],
    selectedProjId: localStorage.getItem(LOCAL_STORAGE_SELECTED_ID_KEY),
    selectedProj: "",
    init() {
      this.cacheDom();
      this.bindEvents();
      this.saveAndRender();
      this.renderProjectTitle();
    },
    cacheDom() {
      this.projectAddBtn = document.getElementById("projectAdd");
      this.projectsUl = document.getElementById("projectsUl");
      this.projectsCont = document.getElementById("projectsCont");
      this.delProjectBtn = document.getElementById("delProj");
      this.projectNameInput = document.getElementById("userProjInput");
      this.projectNameForm = document.getElementById("projForm");
      this.projectNameSubmit = document.getElementById("submitName");
      this.projectTitle = document.getElementById("projectTitle");
      this.taskCont = document.getElementById("tasksUl");
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
        this.renderProjectTitle();
        this.saveAndRender();
      }
    },
    confirmDelete() {
      if (this.allProjects.length !== 0) {
        if (this.selectedProjId !== "") {
          // eslint-disable-next-line no-restricted-globals, no-alert
          const confirmed = confirm(
            "Are you sure you want to delete the project?"
          );
          if (confirmed) {
            this.delProject();
          }
        }
      }
    },
    delProject() {
      this.allProjects.forEach((project) => {
        if (project.id === this.selectedProjId) {
          this.allProjects.splice(this.allProjects.indexOf(project), 1);
          if (this.allProjects.length > 0) {
            // eslint-disable-next-line prefer-destructuring
            this.selectedProj = this.allProjects[0];
            this.selectedProjId = this.selectedProj.id;
          }
          this.saveAndRender();
        }
        this.renderProjectTitle();
        if (this.allProjects.length === 0) {
          this.taskCont.style.display = "none";
        }
      });
    },
    getSelectedProj() {
      projects.allProjects.forEach((project) => {
        if (project.id === projects.selectedProjId) {
          this.selectedProj = project;
        }
      });
    },
    renderProjectTitle() {
      this.getSelectedProj();
      this.projectTitle.innerText = this.selectedProj.name;
    },
  };

  projects.init();
  const tasks = {
    uInputTaskName: "",
    uInputTaskColor: "",

    init() {
      this.cacheDom();
      this.bindEvents();
      this.renderTaskInfo();
    },
    cacheDom() {
      this.addTaskBtn = document.getElementById("addTask");
      this.addTaskForm = document.getElementById("taskForm");
      this.submitTaskFormBtn = document.getElementById("submitTask");
      this.taskNameInput = document.getElementById("taskName");
      this.taskCount = document.getElementById("taskCount");
      this.taskList = document.getElementById("taskList");
      this.taskItems = document.getElementsByClassName("taskItem");
      this.taskCont = document.getElementById("tasksUl");
      this.exampleItem = document.getElementById("exampleItem");
      this.colorPickForm = document.getElementById("taskColor");
    },
    bindEvents() {
      projects.projectsCont.addEventListener(
        "click",
        this.renderTaskInfo.bind(this)
      );
      this.addTaskBtn.addEventListener("click", this.showTaskForm.bind(this));
      this.submitTaskFormBtn.addEventListener(
        "click",
        this.submitTaskForm.bind(this)
      );
      projects.delProjectBtn.addEventListener(
        "click",
        this.renderTaskInfo.bind(this)
      );
      this.taskNameInput.addEventListener(
        "input",
        this.createExampleItem.bind(this)
      );
      this.colorPickForm.addEventListener(
        "input",
        this.createExampleItem.bind(this)
      );
    },
    showTaskForm() {
      if (projects.allProjects.length !== 0) {
        this.addTaskForm.style.display = "flex";
      }
    },

    submitTaskForm() {
      if (
        this.taskNameInput.value !== "" &&
        this.taskNameInput.value.length > 1
      ) {
        this.uInputTaskName = this.taskNameInput.value;
        this.uInputTaskColor = this.colorPickForm.value;
        this.addTaskForm.style.display = "none";
        this.taskNameInput.value = "";
        this.addNewTasks();
      }
    },
    createNewTasks(task, color) {
      return { task, color };
    },
    addNewTasks() {
      projects.getSelectedProj();
      const newTask = this.createNewTasks(
        this.uInputTaskName,
        this.uInputTaskColor
      );
      projects.selectedProj.tasks.push(newTask);
      projects.save();
      this.renderTaskInfo();
    },
    renderTaskInfo() {
      this.clearTasks();
      if (projects.allProjects.length === 0) {
        this.taskCont.style.display = "none";
      } else {
        if (projects.selectedProj === "") {
          // eslint-disable-next-line prefer-destructuring
          projects.selectedProj = projects.allProjects[0];
          projects.selectedProjId = projects.selectedProj.id;
          projects.renderProjectTitle();
          projects.saveAndRender();
        }
        this.taskCont.style.display = "";
        this.taskCount.innerText = `${projects.selectedProj.tasks.length} tasks`;
        projects.selectedProj.tasks.forEach((task) => {
          this.taskItems = document.createElement("span");
          this.taskItems.classList.add("taskItem");
          this.taskItems.innerText = task.task;
          this.taskItems.style.background = task.color;
          this.taskList.appendChild(this.taskItems);
        });
      }
    },
    clearTasks() {
      this.taskList.innerHTML = "";
    },
    createExampleItem() {
      this.exampleItem.innerText = this.taskNameInput.value;
      this.exampleItem.style.backgroundColor = this.colorPickForm.value;
    },
  };
  tasks.init();
})();
