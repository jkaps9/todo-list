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

    return { clearProjectList, updateProjectList };
})();