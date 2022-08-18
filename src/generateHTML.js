// creating manager card 
const generateManager = function (manager) {    
    return `
    <div class="col-md-4">
        <div class="card">
            <div class="card-header">
                <h2 class="card-title">${manager.name}</h2>
                <h3 class="card-title">${manager.role}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.id}</li>
                    <li class="list-group-item">Email: ${manager.email}</li>
                    <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                </ul>
            </div>
        </div>
    `;
}

// creating engineer card 
const generateEngineer = function (engineer) {
    return `
    <div class="col-md-4">
        <div class="card">
            <div class="card-header">
                <h2 class="card-title">${engineer.name}</h2>
                <h3 class="card-title">${engineer.role}</h3>
            </div>
            <div class="card-body"> 
                <ul class="list-group">
                    <li class="list-group-item">ID: ${engineer.id}</li>
                    <li class="list-group-item">Email: ${engineer.email}</li>
                    <li class="list-group-item">Github: ${engineer.github}</li>
                </ul>
            </div>
        </div>
    </div>
    
    `
}

// creating intern card 
const generateIntern = function (intern) {
    return `
    <div class="col-md-4">
        <div class="card">
            <div class="card-header">
                <h2 class="card-title">${intern.name}</h2>
                <h3 class="card-title">${intern.role}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${intern.id}</li>
                    <li class="list-group-item">Email: ${intern.email}</li>
                    <li class="list-group-item">School: ${intern.school}</li>
                </ul>
            </div>
        </div>
    </div>

    `
};

 
generateHTML = (data) => { 

    // create a switch case
 
    // array for cards 
    pageArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 


        // call manager function
        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }

        // call engineer function
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }

        // call intern function 
        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }
        
    }
    
    

    const employeeCards = pageArray.join(''); // join all the cards together

   
    const generateTeam = generateTeamProfile(employeeCards);   // generate team profile page
    return generateTeam;

}

// generate html page 
const generateTeamProfile = function (employeeCards) {  // generate team profile page  
  return`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <header>
          <nav class="navbar" id="navbar">
              <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
          </nav>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
                  <!--Team Cards-->
                  ${employeeCards}
              </div>
          </div>
      </main>
      
  </body>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  </html>


`;
}

module.exports = generateHTML;  // export generateHTML function to other files