import { Project } from "./project";

export const displayController = (function () {
    const projectList = document.querySelector("#project-list");

    const clearProjectList = () => {
        while (projectList.firstChild) {
            projectList.removeChild(projectList.lastChild);
        }
    };

    const updateProjectList = (arr) => {
        clearProjectList();
        arr.forEach(element => {
            const listItem = document.createElement("li");
            const button = document.createElement("button");
            button.classList.add("project-btn");
            button.textContent = element.name;
            listItem.appendChild(button);
            projectList.appendChild(listItem);
        });
    };

    const makeTodoCard = (todo) => {
        const toDoCard = document.createElement("div");
        toDoCard.classList.add("todo-item");

        const checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");
        checkBox.setAttribute("id", todo.title);
        checkBox.setAttribute("name", todo.title);
    };

    return { clearProjectList, updateProjectList };
})();