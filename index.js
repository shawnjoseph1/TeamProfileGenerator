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
            validate: (value)=>{ if(value){return true} else {return 'Please enter your name'}}, // validation function
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
    ])


 .then(managerInput => { // create a team profile
    const {name, id, email, officeNumber} = managerInput; // destructuring the manager input
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber); // create a new manager object

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
            message: 'What is your role?',
            choices: ['Engineer', 'Intern', 'I don\'t want to add anyone else'], // choices for the role   
            validate: (value)=>{ if(value){return true} else {return 'Please enter your role'}}, 
        }

    ]).then(answers => { // then function to create a team profile
        if(answers.role === 'Engineer'){ // if the role is engineer
            addEngineer(); // prompt the engineer for information
        } else if(answers.role === 'Intern'){ // if the role is intern
            addIntern(); // prompt the intern for information
        } else { // if the role is neither engineer nor intern 
            generateHTML(teamProfile); // generate the html file
        }
    }).catch(err => { // catch any errors
        console.log(err); // log the error
    }
    );
}

 // prompt the engineer for information
const addEngineer = () => {  
    return inquirer.prompt([
        {
            type: 'input',  // type of input
            name: 'name', // name of input
            message: 'What is your name?', // message to display
            validate: (value)=>{ if(value){return true} else {return 'Please enter your name'}}, // validation function
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
            name: 'github',
            message: 'What is your github username?',
            validate: (value)=>{ if(value){return true} else {return 'Please enter your github username'}},
        }
    ]).then(answers => { // then function to create a team profile 

        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github); // create a new engineer object
        teamMembers.push(engineer); // push the new engineer object to the team profile array
        promptEmployee();
    })
}

const addIntern = () => { // prompt the intern for information
    return inquirer.prompt([
        {
            type: 'input', // type of input
            name: 'name', // name of input
            message: 'What is your name?', // message to display
            validate: (value)=>{ if(value){return true} else {return 'Please enter your name'}}, // validation function
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
            name: 'school',
            message: 'What is your school?',
            validate: (value)=>{ if(value){return true} else {return 'Please enter your school'}},
        }
        
    ]).then(answers => { // then function to create a team profile
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school); // create a new intern object
        teamMembers.push(intern); // push the new intern object to the team profile array
        promptEmployee();
    })
}

const writeFile = date => {
    fs.writeFile('./dist/index.html', date, err => { // write the file
        if(err){ // if there is an error
            console.log(err); // log the error
        } else { // if there is no error
            console.log('Successfully wrote to file'); // log the success
        }
    }
    );
}

addManager()
  .then(addEmployee)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });

