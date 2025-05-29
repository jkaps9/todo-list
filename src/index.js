import "./styles.css";
import displayController from "./displayController.js";
import projectManager from "./projectManager.js";

// FORM FUNCTIONS
displayController.setTodaysDate();
displayController.setFormProjects(projectManager.projects);
displayController.closeButtonClick();
displayController.createTaskClick(projectManager);

//Others
displayController.updateProjectList(projectManager.projects);
displayController.updateTodoList(projectManager.projects);
displayController.addTaskButtonClick();
displayController.addProjectButtonClick(projectManager);