import projectManager from "./projectManager";

const displayController = (function () {
    const projectList = document.querySelector("#project-list");
    const todoList = document.querySelector("#todo-list");
    const newTaskFormContainer = document.querySelector("#new-task-container");
    const newTaskForm = document.querySelector("#new-task-form");
    const formProjects = document.querySelector("#project");

    const todoDetailFormContainer = document.querySelector("#todo-detail-container");

    const clearList = (list) => {
        while (list.firstChild) {
            list.removeChild(list.lastChild);
        }
    };

    const updateProjectList = () => {
        clearList(projectList);
        projectManager.projects.forEach(project => {
            const listItem = document.createElement("li");
            const button = document.createElement("button");
            button.classList.add("project-btn");
            button.textContent = project.name;
            button.addEventListener('click', () => {
                updateTodoList(button.textContent);
            });
            listItem.appendChild(button);
            projectList.appendChild(listItem);
        });
    };

    const updateTodoList = (projectFilter = "") => {
        clearList(todoList);
        const filteredProjects = projectFilter === "" ? projectManager.projects : projectManager.projects.filter((project) => project.name === projectFilter);

        filteredProjects.forEach(project => {

            const filteredItems = project.items.filter((item) => !item.isComplete);
            if (filteredItems.length > 0) {
                const header = document.createElement("h4");
                header.textContent = project.name;
                todoList.appendChild(header);

                project.items.forEach(todo => {
                    if (!todo.isComplete) {
                        const toDoCard = document.createElement("div");
                        toDoCard.classList.add("todo-item");
                        toDoCard.classList.add(`priority-${todo.priority.toLowerCase()}`);

                        const checkBox = document.createElement("button");
                        checkBox.classList.add("todo-isComplete");
                        checkBox.addEventListener('click', () => {
                            todo.toggleComplete();
                            updateTodoList();
                        });

                        const title = document.createElement("p");
                        title.classList.add("todo-title");
                        title.textContent = todo.title;
                        title.addEventListener('click', () => {
                            todoDetailFormContainer.classList.remove("hidden");
                            todoFormSetup(todo);
                        });

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
            }
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

    const setFormProjects = () => {
        clearList(formProjects);
        projectManager.projects.forEach(project => {
            const option = document.createElement("option");
            option.value = project.id;
            option.textContent = project.name;
            formProjects.appendChild(option);
        });
    };

    const addTaskButtonClick = () => {
        const addTaskButton = document.querySelector("#add-task");
        addTaskButton.addEventListener('click', () => {
            formSetup();
            newTaskFormContainer.classList.remove("hidden");
            document.querySelector("#title").focus();
        });
    };

    const closeButtonClick = () => {
        const closeButton = document.querySelector("#close-task-form");
        closeButton.addEventListener('click', () => {
            newTaskFormContainer.classList.add("hidden");
        });
    };

    const createTaskClick = () => {
        const createTaskBtn = document.querySelector("#create-task");
        formSubmit();
        createTaskBtn.addEventListener('click', (e) => {

        });
    };

    const formSubmit = () => {
        newTaskForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = new FormData(newTaskForm);
            if (formData.get("title") !== "") {
                projectManager.addToDo(formData.get("project-id"), formData.get("title"), formData.get("description"), formData.get("due-date"), formData.get("priority"));
                newTaskForm.reset();
                setTodaysDate();
                updateTodoList();
                document.querySelector("#title").focus();
            }
        });
    };

    const addProjectButtonClick = () => {
        const addProjectButton = document.querySelector("#add-project");
        addProjectButton.addEventListener('click', () => {
            const title = prompt("Project Title", "New Project");
            projectManager.createProject(title);
            updateProjectList();
            setFormProjects();
        });
    };

    const projectClick = () => {

    };

    const initialize = () => {
        updateProjectList();
        updateTodoList();
        addTaskButtonClick();
        addProjectButtonClick();
        const allProjects = document.querySelector("#all-projects");
        allProjects.addEventListener('click', () => {
            updateTodoList();
        });
    };

    const formSetup = () => {
        setTodaysDate();
        setFormProjects();
        closeButtonClick();
        createTaskClick();
    };

    const todoFormSetup = (todo) => {
        const closeButton = document.querySelector("#close-todo-form");
        closeButton.addEventListener('click', () => {
            todoDetailFormContainer.classList.add("hidden");
        });

        todoDetailFormContainer.querySelector("#todo-title").value = todo.title;
        todoDetailFormContainer.querySelector("#todo-description").value = todo.description;

        const dueDate = todo.dueDate;
        let month = dueDate.getMonth() < 9 ? `0` : ``;
        month += `${dueDate.getMonth() + 1}`;
        const day = dueDate.getDate();
        const year = dueDate.getFullYear();
        todoDetailFormContainer.querySelector("#todo-due-date").value = `${year}-${month}-${day}`;

        todoDetailFormContainer.querySelector("#todo-priority").value = todo.priority;

        const updateButton = document.querySelector("#update-todo");
        updateButton.addEventListener('click', () => {
            const newTitle = todoDetailFormContainer.querySelector("#todo-title").value;
            const newDescription = todoDetailFormContainer.querySelector("#todo-description").value;
            const dueDt = todoDetailFormContainer.querySelector("#todo-due-date").value;
            const newDueDate = new Date(Number(dueDt.slice(0, 4)), Number(dueDt.slice(5, 7)) - 1, Number(dueDt.slice(8, 10)));
            const newPriority = todoDetailFormContainer.querySelector("#todo-priority").value;
            projectManager.updateToDo(todo.id, newTitle, newDescription, newDueDate, newPriority);
            updateTodoList();
        });
    };

    return { initialize };
})();

export default displayController;