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
        checkBox.setAttribute("id", todo.id);
        checkBox.setAttribute("name", todo.title);

        const checkBoxLabel = document.createElement("label");
        checkBoxLabel.setAttribute("for", todo.id);
        checkBoxLabel.classList.add("todo-title");
        checkBoxLabel.textContent = todo.title;

        toDoCard.appendChild(checkBox);
        toDoCard.appendChild(checkBoxLabel);

        return toDoCard;
    };

    return { clearProjectList, updateProjectList };
})();