export const displayController = (function () {
    const projectList = document.querySelector("#project-list");
    const todoList = document.querySelector("#todo-list");

    const clearList = (list) => {
        while (list.firstChild) {
            list.removeChild(list.lastChild);
        }
    };

    const updateProjectList = (projectArr) => {
        clearList(projectList);
        projectArr.forEach(element => {
            const listItem = document.createElement("li");
            const button = document.createElement("button");
            button.classList.add("project-btn");
            button.textContent = element.name;
            listItem.appendChild(button);
            projectList.appendChild(listItem);
        });
    };

    const updateTodoList = (projectArr) => {
        clearList(todoList);

        projectArr.forEach(project => {
            const header = document.createElement("h4");
            header.textContent = project.name;
            todoList.appendChild(header);

            project.items.forEach(todo => {
                if (!todo.isComplete) {
                    const toDoCard = document.createElement("div");
                    toDoCard.classList.add("todo-item");
                    toDoCard.classList.add(`priority-${todo.priority.toLowerCase()}`);

                    const checkBox = document.createElement("button");
                    checkBox.setAttribute("id", todo.id);
                    checkBox.classList.add("todo-isComplete");
                    checkBox.addEventListener('click', () => {
                        todo.toggleComplete();
                    });

                    const title = document.createElement("p");
                    title.classList.add("todo-title");
                    title.textContent = todo.title;

                    const dueDate = document.createElement("p");
                    dueDate.classList.add("todo-dueDate");

                    const month = todo.dueDate.getMonth() + 1;
                    const day = todo.dueDate.getDate();
                    const year = todo.dueDate.getFullYear();

                    dueDate.textContent = `${month}/${day}/${year}`;

                    toDoCard.appendChild(checkBox);
                    toDoCard.appendChild(title);
                    toDoCard.appendChild(dueDate);
                    todoList.appendChild(toDoCard);
                }
            });

        });
    };

    const setTodaysDate = () => {
        const date = document.querySelector("#due-date");
        const todaysDate = new Date();
        let month = todaysDate.getMonth() < 9 ? `0` : ``;
        month += `${todaysDate.getMonth() + 1}`;

        const day = todaysDate.getDate();
        const year = todaysDate.getFullYear();
        date.value = `${year}-${month}-${day}`;
    };

    return { updateProjectList, updateTodoList, setTodaysDate };
})();