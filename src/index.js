import "./styles.css";
import displayController from "./displayController.js";
import projectManager from "./projectManager.js";

displayController.updateProjectList(projectManager.projects);

// FORM FUNCTIONS
displayController.setTodaysDate();
displayController.setFormProjects(projectManager.projects);
displayController.closeButtonClick();

displayController.updateProjectList(projectManager.projects);
displayController.updateTodoList(projectManager.projects);

displayController.addTaskButtonClick();