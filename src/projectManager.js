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

    const createProject = (title) => {
        projects.push(new Project(title));
    };


})();

export default projectManager;