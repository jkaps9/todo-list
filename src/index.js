import "./styles.css";
import { ToDo } from "./todo.js";
import { Project } from "./project.js";
import { displayController } from "./displayController.js";

const toDoItem = new ToDo("Sleep", "Go to sleep", new Date(2025, 4, 27), "High");
console.log(toDoItem);

toDoItem.toggleComplete();
console.log(toDoItem);

toDoItem.changePriority("Low");
console.log(toDoItem);

const defaultProject = new Project("My To Dos");
console.log(defaultProject);

defaultProject.addItem(toDoItem);
console.log(defaultProject);

defaultProject.removeItem(toDoItem);
console.log(defaultProject);

const projects = [];
projects.push(defaultProject);

displayController.clearProjectList();