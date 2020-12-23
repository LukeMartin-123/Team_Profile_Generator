const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

function initApp() {
    managerPrompt()
}

let teamMembers = []


const managerPrompt = () =>
    inquirer.prompt([

        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the manager?',
        },

        {
            type: 'input',
            name: 'Id',
            message: 'What is their ID number?',
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is their email address?'
        },

        {
            type: 'input',
            name: 'office',
            message: 'What is their office number'
        },

        {
            type: 'list',
            name: 'role',
            message: 'What type of employee would you like to add next?',
            choices: ['Engineer', 'Intern', 'Do not add another employee'],
        },

    ])
        .then((managerAnswer) => {
            const manager = new Manager(managerAnswer.name, managerAnswer.Id, managerAnswer.email, managerAnswer.office);
            teamMembers.push(manager)
            if (managerAnswer.role === 'Engineer') {
                engineerPrompt()
            }
            else if (managerAnswer.role === 'Intern') {
                internPrompt()
            }

            else (fs.writeFile(outputPath, render(teamMembers), (err) => {
                if (err) throw err;
            }))

        })

const engineerPrompt = () =>
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the engineer?',
        },

        {
            type: 'input',
            name: 'Id',
            message: 'What is their ID number?',
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is their email address?',
        },

        {
            type: 'input',
            name: 'Github',
            message: 'What is your Github Username?',
        },

        {
            type: 'list',
            name: 'role',
            message: 'What type of employee would you like to add next?',
            choices: ['Engineer', 'Intern', 'Do not add another employee'],
        },
    ])
        .then((engineerAnswer) => {
            const engineer = new Engineer(engineerAnswer.name, engineerAnswer.Id, engineerAnswer.email, engineerAnswer.Github);
            teamMembers.push(engineer)
            if (engineerAnswer.role === 'Engineer') {
                engineerPrompt()
            }
            else if (engineerAnswer.role === 'Intern') {
                internPrompt()
            }
            else (fs.writeFile(outputPath, render(teamMembers), (err) => {
                if (err) throw err;
            }))

        })


const internPrompt = () =>
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the intern?',
        },

        {
            type: 'input',
            name: 'Id',
            message: 'What is their ID number?',
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is their email address?',
        },

        {
            type: 'input',
            name: 'school',
            message: 'What school do they attend?',
        },

        {
            type: 'list',
            name: 'role',
            message: 'What type of employee would you like to add next?',
            choices: ['Engineer', 'Intern', 'Do not add another employee'],
        },
    ])
        .then((internAnswer) => {
            const intern = new Intern(internAnswer.name, internAnswer.Id, internAnswer.email, internAnswer.school);
            teamMembers.push(intern)
            if (internAnswer.role === 'Engineer') {
                engineerPrompt()
            }
            else if (internAnswer.role === 'Intern') {
                internPrompt()
            }
            else (fs.writeFile(outputPath, render(teamMembers), (err) => {
                if (err) throw err;
            }))

        })

let teamHTML = render(teamMembers)

initApp()