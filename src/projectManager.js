import Project from "./project.js";
import ToDo from "./todo.js";
import displayController from "./displayController.js";

//Project Manager has: 
// 1. List of Projects

//Project Manager can:
// 1. Create projects
// 2. Delete Projects
// 3. Add ToDos to a project
// 4. Remove ToDos from a project
// 5. Update project details
// 6. Update ToDo details
// 7. Tell the DOM to update

const projectManager = (function () {
    const projects = [];

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

})();

export default projectManager;