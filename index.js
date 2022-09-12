
const fs = require(`fs`);
const inquirer = require('inquirer');
const Manager = require(`./lib/manager.js`);
const Engineer = require(`./lib/engineer.js`);
const Intern = require(`./lib/intern.js`);

let htmlContent = '';
let employees = [];
let projectName = ''

function newEmployee(){
    inquirer.prompt([
        {
            type: `list`,
            message: `Would you like to add a new employee?`,
            name: `employeeHire`,
            choices: [`Engineer`, `Intern`, `None`]
    }]).then(function(answer){
        if (answer.employeeHire === `Engineer`){
            newEngineer();
        } else if (answer.employeeHire === `Intern`){
            newIntern();
        } else {
            teamFinished();
        }
    })
}


function newEngineer(){
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the engineer?',
            name: 'engineerName'
        },
        {
            type: 'input',
            message: 'What is the id of the engineer?',
            name: 'engineerID'
        },
        {
            type: 'input',
            message: 'What is the email of the engineer?',
            name: 'engineerEmail'
        },
        {
            type: 'input',
            message: 'What is the github username of the engineer?',
            name: 'engineerGithub'
        },
    ]).then(function(answer){
        let newEngineer = new Engineer.Engineer(answer.engineerName, parseInt(answer.engineerID), answer.engineerEmail, answer.engineerGithub)
        employees.push(newEngineer);
        newEmployee();
    })
}

function newIntern(){
    inquirer.prompt([
        {
            type: `input`,
            message: `What is the name of the intern?`,
            name: `internName`
        },
        {
            type: `input`,
            message: `What is the id of the intern?`,
            name: `internID`},
        {
            type: `input`,
            message: `What is the email of the intern?`,
            name: `internEmail`
        },
        {
            type: `input`,
            message: `What school does the intern attend?`,
            name: `internSchool`
        },
    ]).then(function(answer){
    let newIntern = new Intern.Intern(answer.internName, parseInt(answer.internID), answer.internEmail, answer.internSchool);
    employees.push(newIntern);
    newEmployee();
})}

function generateHtml() {
    htmlContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${projectName}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Signika+Negative:wght@300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  </head>
  <body style="background-color: rgb(199, 199, 199); color: rgb(0, 134, 134); font-size: 15; font-family: 'Signika Negative', sans-serif;">
    <header class = "page-header" style="padding-left: 3px; border-bottom: 1px solid rgb(0, 187, 187);">
        <h1>${projectName}  <small>Team Members</small></h1>
    </header>
    <main class="container-fluid" style="display:flex; flex-wrap: wrap;">`;
    for (let i = 0; i < employees.length; i++) { 
        htmlContent += `
        <section class="text-center" style="flex: 1; border: 1px solid rgb(0, 134, 134); padding: 3px;">
            <h3>${employees[i].name}</h3>
            <p>${employees[i].getPosition()}</p>
            <p>Employee ID: ${employees[i].id}</p>
            <p>Email: <a href = "mailto: ${employees[i].email}">${employees[i].email}</a></p>`;
        if (employees[i].position === `Manager`) {
         htmlContent += `
         <p>Office Number: ${employees[i].officeNumber}</p>`;
        } else if (employees[i].position === `Engineer`) {
            htmlContent += `
            <p>GitHub Profile: <a href = "https://github.com/${employees[i].github}" target = "_blank">${employees[i].github}</a></p>`;
        } else if (employees[i].position === `Intern`) {
            htmlContent += `
            <p>School: ${employees[i].school}</p>`;
        }
        htmlContent += `
        </section>`;
}
htmlContent += `
</main>
    </body>
</html>`;
};
function teamFinished(){
    generateHtml()
    fs.writeFile(`${projectName} Team.html`, htmlContent,
    function(err){
       if (err) throw err;
       console.log(`File created under ${projectName}Team.html`);
   });
}


function start(){
    inquirer.prompt([
        {
            type: `input`,
            message: `What is the project's name?`,
            name: `projectName`
        },
        {
            type: `input`,
            message: `What is the Manager's name?`,
            name: `managerName`
        },
        {
            type: `input`,
            message: `What is the Manager's ID?`,
            name: `managerID`
        },
        {
            type: `input`,
            message: `What is the Manager's email?`,
            name: `managerEmail`
        },
        {
            type: `input`,
            message: `What is the Manager's office number?`,
            name: `officeNumber`
        },
    ]).then(function(answer){
        const teamManager = new Manager.Manager(answer.managerName, parseInt(answer.managerID), answer.managerEmail, parseInt(answer.officeNumber));
        employees.push(teamManager)
        projectName = answer.projectName
        newEmployee();
    })
};

start();