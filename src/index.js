/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import "./styles.css";
import deleteImg from "./delete.png";
import expand from "./expand.png";
import ghLogo from "./ghLogo.png";
import logo from "./logo.png";

// eslint-disable-next-line func-names
(function () {
  const LOCAL_STORAGE_PROJECT_KEY = "projects.list";
  const LOCAL_STORAGE_SELECTED_ID_KEY = "projects.selectedlistid";

  const projects = {
    allProjects:
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [],
    selectedProjId: localStorage.getItem(LOCAL_STORAGE_SELECTED_ID_KEY),
    selectedProj: "",
    uColor: "",
    textColor: "",
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
      this.projectNameSubmit = document.getElementById("submitProj");
      this.projectTitle = document.getElementById("projectTitle");
      this.taskCont = document.getElementById("tasksUl");
      this.projectForm = document.getElementById("projectForm");
      this.projectColorInput = document.getElementById("projColor");
      this.exampleProj = document.getElementById("exampleProj");
      this.cancelProj = document.getElementById("cancelProj");
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
      this.projectNameInput.addEventListener(
        "input",
        this.createExampleProj.bind(this)
      );
      this.projectColorInput.addEventListener(
        "input",
        this.createExampleProj.bind(this)
      );
      this.cancelProj.addEventListener("click", this.cancelProjEvnt.bind(this));
    },

    changeToForm() {
      this.exampleProj.style.backgroundColor = this.projectColorInput.value;
      this.projectAddBtn.style.display = "none";
      this.projectForm.style.display = "flex";
    },
    getUserData() {
      const uPName = this.projectNameInput.value;
      this.uColor = this.projectColorInput.value;
      this.projectNameInput.value = "";
      if (uPName != null && uPName.length > 0) {
        const newProject = this.createNewProject(uPName, this.uColor);
        this.allProjects.push(newProject);
        this.saveAndRender();
        this.projectNameInput.style.border = "none";
        this.projectForm.style.display = "none";
        this.projectAddBtn.style.display = "inline";
      } else {
        this.projectNameInput.style.border = "1px solid red";
      }
    },
    createNewProject(name, color) {
      return { id: Date.now().toString(), name, tasks: [], color };
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
        newLi.style.color = this.getContrastYIQ(project.color);
        newLi.style.background = project.color;
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
          this.textColor = this.getContrastYIQ(this.selectedProj.color);
        }
      });
    },
    renderProjectTitle() {
      this.getSelectedProj();
      if (this.selectedProj !== "") {
        this.projectTitle.innerText = this.selectedProj.name;
        this.taskCont.style.background = this.selectedProj.color;
        this.projectTitle.style.color = this.textColor;
      }
    },
    getContrastYIQ(hexcolor) {
      const r = parseInt(hexcolor.substring(1, 3), 16);
      const g = parseInt(hexcolor.substring(3, 5), 16);
      const b = parseInt(hexcolor.substring(5, 7), 16);
      const yiq = (r * 299 + g * 587 + b * 114) / 1000;
      return yiq >= 128 ? "black" : "white";
    },
    createExampleProj() {
      this.exampleProj.style.backgroundColor = this.projectColorInput.value;
    },
    cancelProjEvnt() {
      this.projectNameInput.value = "";
      this.projectAddBtn.style.display = "inline";
      this.projectForm.style.display = "none";
    },
  };

  projects.init();
  const tasks = {
    uInputTaskName: "",
    uInputTaskColor: "",
    clickedTask: "",
    textColor: "",
    svgColor: "",

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
      this.taskDescInput = document.getElementById("taskDesc");
      this.cancelTask = document.getElementById("cancelTask");
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
      document.body.addEventListener("click", this.expandImgEvnt.bind(this));
      document.body.addEventListener("click", this.checkboxEvnt.bind(this));
      document.body.addEventListener("click", this.delTaskEvnt.bind(this));
      this.cancelTask.addEventListener("click", this.cancelTaskEvnt.bind(this));
    },
    cancelTaskEvnt() {
      this.addTaskForm.style.display = "none";
      projects.projectAddBtn.style.display = "inline";
      this.taskNameInput.value = "";
      this.taskDescInput.value = "";
    },

    showTaskForm() {
      if (
        projects.allProjects.length !== 0 &&
        (projects.projectAddBtn.style.display === "inline" ||
          projects.projectAddBtn.style.display === "")
      ) {
        this.addTaskForm.style.display = "flex";
        projects.projectAddBtn.style.display = "none";
        this.createExampleItem();
      }
    },

    submitTaskForm() {
      if (
        this.taskNameInput.value !== "" &&
        this.taskNameInput.value.length > 1
      ) {
        this.uInputTaskName = this.taskNameInput.value;
        this.uInputTaskDesc = this.taskDescInput.value;
        this.uInputTaskColor = this.colorPickForm.value;
        this.addTaskForm.style.display = "none";
        this.taskNameInput.value = "";
        this.taskDescInput.value = "";
        this.addNewTasks();
        projects.projectAddBtn.style.display = "";
        this.taskNameInput.style.border = "none";
      } else {
        this.taskNameInput.style.border = "1px solid red";
      }
    },
    createNewTasks(
      task,
      desc,
      color,
      textColor,
      svgColor,
      id,
      // eslint-disable-next-line no-shadow
      expand = false,
      check = false
    ) {
      return {
        task,
        desc,
        color,
        textColor,
        svgColor,
        expand,
        id: Date.now().toString(),
        check,
      };
    },
    addNewTasks() {
      projects.getSelectedProj();
      const newTask = this.createNewTasks(
        this.uInputTaskName,
        this.uInputTaskDesc,
        this.uInputTaskColor,
        this.textColor,
        this.svgColor
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
          const taskItemDiv = document.createElement("div");
          taskItemDiv.setAttribute("data-id", task.id);
          const taskNameDiv = document.createElement("div");
          const taskItemName = document.createElement("span");
          const taskItemDesc = document.createElement("span");
          const taskItemDelImg = document.createElement("img");
          taskItemDelImg.src = deleteImg;
          taskItemDelImg.classList.add("delImg");
          taskItemName.classList.add("taskItemName");
          const taskItemCheck = document.createElement("span");
          taskItemCheck.classList.add("taskItemCheck");
          taskItemCheck.style.border = "1px solid black";
          const expandImg = document.createElement("img");
          taskItemDiv.classList.add("taskItem");
          taskNameDiv.classList.add("taskNameDiv");
          expandImg.src = expand;
          expandImg.classList.add("expandImg");
          taskItemDesc.classList.add("taskItemDesc");
          taskItemName.innerText = task.task;
          taskItemDiv.style.color = task.textColor;
          taskItemDiv.style.background = task.color;
          taskItemDesc.innerText = task.desc;
          taskItemDesc.style.display = "none";
          taskNameDiv.appendChild(taskItemCheck);
          if (task.desc !== "") {
            taskNameDiv.appendChild(expandImg);
          }
          taskNameDiv.append(taskItemName, taskItemDelImg);
          taskItemDiv.append(taskNameDiv, taskItemDesc);
          this.taskList.appendChild(taskItemDiv);
          if (task.check === false) {
            taskItemCheck.setAttribute("data-checked", false);
            taskItemCheck.style.background = "white";
            taskItemCheck.style.borderRadius = "";
            taskItemCheck.parentNode.parentNode.classList.remove("done");
          } else if (task.check === true) {
            taskItemCheck.setAttribute("data-checked", true);
            taskItemCheck.style.background = "lightgreen";
            taskItemCheck.style.borderRadius = "50%";
            taskItemCheck.parentNode.parentNode.classList.add("done");
          }
          taskItemDelImg.style.filter = task.svgColor;
          expandImg.style.filter = task.svgColor;
        });
      }
    },
    clearTasks() {
      this.taskList.innerHTML = "";
    },
    createExampleItem() {
      this.textColor = projects.getContrastYIQ(this.colorPickForm.value);
      if (this.textColor === "white") {
        this.svgColor =
          "invert(100%) sepia(5%) saturate(0%) hue-rotate(342deg) brightness(106%) contrast(106%)";
      } else if (this.textColor === "black") {
        this.svgColor =
          "invert(0%) sepia(84%) saturate(7436%) hue-rotate(328deg) brightness(114%) contrast(114%)invert(0%) sepia(84%) saturate(7436%) hue-rotate(328deg) brightness(114%) contrast(114%)";
      }
      if (this.textColor === "white") {
        this.exampleItem.style.color = this.textColor;
      } else {
        this.exampleItem.style.color = this.textColor;
      }
      this.exampleItem.style.backgroundColor = this.colorPickForm.value;
    },
    rot: 0,
    expandImgEvnt(evnt) {
      if (evnt.target.id === "exampleExpand") {
        if (this.rot === 0) {
          this.rot = 1;
          evnt.target.style.transform = "rotate(180deg)";
          this.taskDescInput.style.display = "inline";
        } else if (this.rot === 1) {
          this.rot = 0;
          evnt.target.style.transform = "rotate(0deg)";
          this.taskDescInput.style.display = "none";
        }
      }
      if (evnt.target.className === "expandImg") {
        this.getClickedTask(evnt);
        if (this.clickedTask.expand === false) {
          this.clickedTask.expand = true;
          evnt.target.style.transform = "rotate(180deg)";
          evnt.target.parentNode.nextElementSibling.style.display = "inline";
        } else if (this.clickedTask.expand === true) {
          this.clickedTask.expand = false;
          evnt.target.style.transform = "rotate(0deg)";
          evnt.target.parentNode.nextElementSibling.style.display = "none";
        }
      }
    },
    getClickedTask(e) {
      const clickedId = e.target.parentNode.parentNode.dataset.id;
      projects.selectedProj.tasks.forEach((task) => {
        if (clickedId === task.id) {
          this.clickedTask = task;
        }
      });
    },
    checkboxEvnt(e) {
      if (e.target.className === "taskItemCheck") {
        this.getClickedTask(e);
        this.clickedTask.expand = false;
        if (e.target.dataset.checked === "false") {
          e.target.dataset.checked = "true";
          this.clickedTask.check = true;
        } else {
          e.target.dataset.checked = "false";
          this.clickedTask.check = false;
        }
        projects.saveAndRender();
        this.renderTaskInfo();
      }
    },
    delTaskEvnt(e) {
      if (e.target.className === "delImg") {
        this.getClickedTask(e);
        projects.selectedProj.tasks.forEach((task) => {
          if (this.clickedTask.id === task.id) {
            projects.selectedProj.tasks.splice(
              projects.selectedProj.tasks.indexOf(task),
              1
            );
            projects.saveAndRender();
            this.renderTaskInfo();
          }
        });
      }
    },
  };
  tasks.init();
})();
