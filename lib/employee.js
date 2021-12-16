class Employee {
    constructor(name = '') {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return `Hello ${this.name}!`
    };

    getId() {

    };

    getEmail() {
        return this.email;
    };

    getRole() {
        return 'Employee';
    };
}

module.exports = Employee;