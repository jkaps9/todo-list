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

    const getIndex = (arr, id) => {
        return arr.map(function (e) {
            return e.id;
        }).indexOf(id);
    };

    const createProject = (title) => {
        projects.push(new Project(title));
        addProjectsToStorage();
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
            const dueDt = new Date(Number(dueDate.slice(0, 4)), Number(dueDate.slice(5, 7)) - 1, Number(dueDate.slice(8, 10)));
            projects[index].addItem(new ToDo(title, description, dueDt, priority));
        } else {
            console.log(`Project with ID ${projectID} does not exist.`);
        }
        addProjectsToStorage();
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

    const updateToDo = (todoID, newTitle, newDescription, newDueDate, newPriority) => {
        let todoIndex = -1;
        for (let i = 0; i < projects.length; i++) {
            todoIndex = getIndex(projects[i].items, todoID);
            if (todoIndex >= 0) {
                projects[i].items[todoIndex].setTitle(newTitle);
                projects[i].items[todoIndex].setDescription(newDescription);
                projects[i].items[todoIndex].setDueDate(newDueDate);
                projects[i].items[todoIndex].setPriority(newPriority);
                break;
            }
        }
        addProjectsToStorage();
    };

    const getProjectsFromStorage = () => {
        let projectString = localStorage.getItem("projects");
        let projectObjects = JSON.parse(projectString);
        console.log(projectObjects);
        for (let i = 0; i < projectObjects.length; i++) {
            createProject(projectObjects[i].name);
            if (projectObjects[i].items.length > 0) {
                for (let j = 0; j < projectObjects[i].items.length; j++) {
                    addToDo(projects[i].id, projectObjects[i].items[j].title, projectObjects[i].items[j].description, projectObjects[i].items[j].dueDate, projectObjects[i].items[j].priority);
                }
            }
        }
    };

    const addProjectsToStorage = () => {
        localStorage.setItem("projects", JSON.stringify(projects));
    };

    getProjectsFromStorage();

    // Create a default project if projects is empty
    if (projects.length === 0) {
        createProject("My Tasks");
    }

    return { projects, addToDo, createProject, updateToDo };
})();

export default projectManager;