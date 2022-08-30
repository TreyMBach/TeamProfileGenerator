
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
            name: 'enginnnerID'
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
        let newEngineer = new Engineer.Engineer(answer.engineerName, answer.engineerID, answer.engineerEmail, `Engineer`, answer.engineerGithub)
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
    let newIntern = new Intern.Intern(answer.internName, answer.internId, answer.internEmail, `Intern`, answer.internSchool);
    employees.push(newIntern);
    newEmployee();
})}

function generateHtml() {
    htmlContent = ``
}
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
            message: `What is the Manager's email?`,
            name: `managerEmail`
        },
        {
            type: `input`,
            message: `What is the Manager's office number?`,
            name: `officeNumber`
        },
    ]).then(function(answer){
        let teamManager = new Manager.Manager(answer.managerName, answer.managerID, answer.managerEmail, 'Manager', answer.officeNumber);
        employees.push(teamManager)
        projectName = answer.projectName
        newEmployee();
    })
};

start();