import "./styles.css";
import ToDo from "./todo.js";
import Project from "./project.js";
import displayController from "./displayController.js";

const projects = [];
const defaultProject = new Project("My To Dos");
projects.push(defaultProject);
displayController.updateProjectList(projects);

for (let i = 2; i <= 6; i++) {
    const newProj = new Project(`Project ${i}`);
    projects.push(newProj);
    const rand = Math.floor(Math.random() * 3) + 2;
    for (let j = 1; j < rand; j++) {
        const toDoItem = new ToDo(`Task ${j}`, "Todo Description", new Date(2025, 4, 30), "High");
        projects[i - 1].addItem(toDoItem);
    }
}

// FORM FUNCTIONS
displayController.setTodaysDate();
displayController.setFormProjects(projects);
displayController.closeButtonClick();

displayController.updateProjectList(projects);
displayController.updateTodoList(projects);

displayController.addTaskButtonClick();