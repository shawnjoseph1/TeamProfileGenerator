class Employee { // Export Employee class to be used in other files
    constructor(name, id, email) { // Constructor for Employee class
        this.name = name; // Set name property
        this.id = id; // Set id property
        this.email = email; // Set email property
    }
    getName() { // Get name property
        return this.name; // Return name property
    }

    getId() { // Get id property
        return this.id; // Return id property
    }

    getEmail() {  // Get email property
        return this.email; // Return email property
    }

    getRole() { // Get role property
        return "Employee"; // Return Employee
    }
}

module.exports = Employee; 