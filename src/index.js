import "./styles.css";
import displayController from "./displayController.js";
import projectManager from "./projectManager.js";

// FORM FUNCTIONS
displayController.setTodaysDate();
displayController.setFormProjects();
displayController.closeButtonClick();
displayController.createTaskClick();

//Others
displayController.updateProjectList();
displayController.updateTodoList();
displayController.addTaskButtonClick();
displayController.addProjectButtonClick();