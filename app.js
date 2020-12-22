const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let teamMembers = []

const Manager = () =>
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
    .then((answer) => {
        if (answers.role === 'Engineer'){
            Engineer()
        }
        else if (answers.role === 'Intern'){
            Intern()
        }
        else (// Push answers from Engineer answers to the Team Members array)
        {
            
        }
    })

const Engineer = () =>
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
        .then((answer) => {
            if (answers.role === 'Engineer'){
                Engineer()
            }
            else if (answers.role === 'Intern'){
                Intern()
            }
            else (// Push answers from Engineer answers to the Team Members array)
            {
                
            }
        })

const Intern = () =>
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
                type: 'list',
                name: 'role',
                message: 'What type of employee would you like to add next?',
                choices: ['Engineer', 'Intern', 'Do not add another employee'],
            },
        ])
        .then((answer.role) => {
            if (answers.role === 'Engineer'){
                Engineer()
            }
            else if (answers.role === 'Intern'){
                Intern()
            }
            else (// Push answers from Intern answers to the Team Members array)
            {
                
            }
        })

let TeamHTML = render(teamMembers)

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
