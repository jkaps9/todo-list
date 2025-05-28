export class Project {
    constructor(name) {
        this.name = name;
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(item) {
        const index = this.items.indexOf(item);
        index >= 0 ? this.items.splice(index, 1) : console.log("Invalid item");
    }
}