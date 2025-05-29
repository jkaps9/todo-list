import "./styles.css";
import displayController from "./displayController.js";
import projectManager from "./projectManager.js";

displayController.updateProjectList(projectManager.projects);

// for (let i = 2; i <= 6; i++) {
//     const newProj = new Project(`Project ${i}`);
//     projects.push(newProj);
//     const rand = Math.floor(Math.random() * 3) + 2;
//     for (let j = 1; j < rand; j++) {
//         const toDoItem = new ToDo(`Task ${j}`, "Todo Description", new Date(2025, 4, 30), "High");
//         projects[i - 1].addItem(toDoItem);
//     }
// }

// FORM FUNCTIONS
displayController.setTodaysDate();
displayController.setFormProjects(projectManager.projects);
displayController.closeButtonClick();

displayController.updateProjectList(projectManager.projects);
displayController.updateTodoList(projectManager.projects);

displayController.addTaskButtonClick();