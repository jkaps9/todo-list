import Project from "./project.js";
import ToDo from "./todo.js";
import displayController from "./displayController.js";

//Project Manager has: 
// 1. List of Projects [implemented]

//Project Manager can:
// 1. Create projects [implemented]
// 2. Delete Projects [implemented]
// 3. Add ToDos to a project [implemented]
// 4. Remove ToDos from a project [implemented]
// 5. Update project details
// 6. Update ToDo details

const projectManager = (function () {
    const projects = [];

    // Create a default project if projects is empty
    if (projects.length === 0) {
        projects.push(new Project("Default Project"));
    }

    // Create default todos for testing purposes
    const rand = Math.floor(Math.random() * 3) + 1;
    for (let j = 1; j < rand; j++) {
        const toDoItem = new ToDo(`Task ${j}`, "Todo Description", new Date(2025, 4, 30), "High");
        projects[0].addItem(toDoItem);
    }

    const getIndex = (arr, id) => {
        return arr.map(function (e) {
            return e.id;
        }).indexOf(id);
    };

    const createProject = (title) => {
        projects.push(new Project(title));
    };

    const removeProject = (projectID) => {
        const index = getIndex(projects, projectID);
        if (index !== -1) {
            projects.splice(index, 1);
        }
    };

    const addToDo = (projectID, title, description, dueDate, priority) => {
        const index = getIndex(projects, projectID);
        if (index !== -1) {
            projects[index].addItem(new ToDo(title, description, dueDate, priority));
        } else {
            console.log(`Project with ID ${projectID} does not exist.`);
        }
    };

    const removeToDo = (projectID, todoID) => {
        const projIndex = getIndex(projects, projectID);

        if (projIndex !== -1) {
            const todoIndex = getIndex(projects[projIndex].items, todoID);
            if (todoIndex !== -1) {
                projects[projIndex].removeItem(projects[projIndex].items[todoIndex]);
            }
        }
    };

    return { projects };
})();

export default projectManager;