const generateHTML = require('./utils/generateHTML.js');

// npm install inquirer
const inquirer = require('inquirer'); 
// file system module
const fs = require('fs'); 

// create a team profile generator 
const teamProfile = [];

const promptManager = () => { 
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: (value)=>{ if(value){return true} else {return 'Please enter your name'}},
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your id?',
            validate: (value)=>{ if(value){return true} else {return 'Please enter your ID'}},
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
            validate: (value)=>{ if(value){return true} else {return 'Please enter your email'}},
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number?',
            validate: (value)=>{ if(value){return true} else {return 'Please enter your office number'}},
        }
    ]); 
}
// create a then function to create a team profile 
const then = (manager) => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    teamProfile.push(manager);
    promptEmployee();
}
