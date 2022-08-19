const generateHTML = require('./src/generateHTML.js');

// modules
const inquirer = require('inquirer');  
const fs = require('fs'); 


const Engineer = require('./lib/Engineer');  
const Intern = require('./lib/Intern'); 
const Manager = require('./lib/Manager');

// create an empty array to store the team profile
const teamProfile = []; 

// prompt the manager for information  
const addManager = () => {  
    return inquirer.prompt([ 
        {
            type: 'input', // type of input
            name: 'name', // name of input
            message: 'What is your name?', // message to display
 
        },
        {
            type: 'input', 
            name: 'id', 
            message: 'What is your id?',
        
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
     
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number?',
        
        },
    ])


 .then(managerInput => { // create a team profile
    const {name, id, email, officeNumber} = managerInput; // destructuring the manager input
    const manager = new Manager(name, id, email, officeNumber); // create a new manager object

    teamProfile.push(manager); // push the new manager object to the team profile array
    console.log(manager)
    })
};

// prompt the employee for information
const addEmployee = () => { 
    return inquirer.prompt([ // prompt the employee for information
        {
            type: 'list', 
            name: 'role', 
            message: 'What is your employees role?',
            choices: ['Engineer', 'Intern'], // choices for the role   
        },
        {
            type: 'input', // type of input
            name: 'name', // name of input
            message: 'What is the name of your employee?', // message to display
       
        },
        {
            type: 'input', 
            name: 'id', 
            message: 'Enter your employees id?',
         
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your employees email?',
          
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter your employees office number?',
          
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your employees github username?',        
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add another employee?',
            default: false
           
        }

    ]).then(employeeData => { 

        let  {name, id, email, role, github, confirmAddEmployee} = employeeData; 

        let employee;

        if(role === "Engineer"){ // if the role is engineer
            employee = new Engineer(name, id, email, github); // create a new engineer object

        } else if(role === "Intern"){ // if the role is intern
            employee = new Intern (name, id, email, github); // create a new intern object

        } 

        teamProfile.push(employee); // push the new employee object to the team profile array

        if (confirmAddEmployee) { // if the user wants to add another employee
        return addEmployee(teamProfile); 
        } else {
            return teamProfile; 
        }
    })

};

 
const writeFile = date => {
    fs.writeFile('./dist/index.html', date, err => { // write the file
        if(err){ // if there is an error
            console.log(err); // log the error
            return;
        } else { // if there is no error
            console.log('Successfully created your team'); // log the success
        }
    })
};

    
// create a switch case for addManager and addEmployee to call the functions 


addManager()
    .then(addEmployee)
    .then(teamProfile => {
        const html = generateHTML(teamProfile); // create the html file
        writeFile(html); // write the html file
    }).catch(err => {
        console.log(err); // log the error
    }
)




