import { Project } from "./project";

export const displayController = (function () {
    const projectList = document.querySelector("#project-list");

    const clearProjectList = () => {
        while (projectList.firstChild) {
            projectList.removeChild(projectList.lastChild);
        }
    };

    const updateProjectList = (arr) => {
        if (typeof arr === Array) {
            arr.forEach(element => {
                if (typeof element === Project) {
                    const listItem = document.createElement("li");
                    const button = document.createElement("button");
                    button.classList.add("project-btn");
                    button.textContent = element.name;
                    listItem.appendChild(button);
                    projectList.appendChild(listItem);
                } else {
                    console.log(`Element is a ${Object.getPrototypeOf(element)} instead of a Project`);
                }


            });
        } else {
            console.log("Invalid type passed to updateProjectList function");
        }
    };

    return { clearProjectList, updateProjectList };
})();