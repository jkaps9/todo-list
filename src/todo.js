export default class ToDo {
    id = crypto.randomUUID();

    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isComplete = false;
    }

    toggleComplete() {
        this.isComplete = !this.isComplete;
    }

    changePriority(newPriority) {
        this.priority = newPriority;
    }
}