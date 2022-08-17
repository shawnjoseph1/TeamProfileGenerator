const Employee = require("./Employee"); // Import Employee class

class Engineer extends Employee { // Export Engineer class 
    constructor(name, id, email, github) { // Constructor for Engineer class
        super(name, id, email); // Call super class constructor

        this.github = github; // Set github property
    }

    getGithub() { // Get github property 
        return this.github; // Return github property 
    }

    getRole() { // Get role property 
        return "Engineer"; // Return Engineer
    }
}

module.exports = Engineer; // Export Engineer class to be used in other files