export const displayController = (function () {
    const projectList = document.querySelector("#project-list");

    const clearProjectList = () => {
        while (projectList.firstChild) {
            projectList.removeChild(projectList.lastChild);
        }
    };

    return { clearProjectList };
})();