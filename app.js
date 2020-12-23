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
        if (managerAnswer.role === 'Engineer'){
            engineerPrompt()
        }
        else if (managerAnswer.role === 'Intern'){
            internPrompt()
        }
       const manager = new Manager(managerAnswer.name, managerAnswer.Id, managerAnswer.email, managerAnswer.office);
       teamMembers.push(manager)
        fs.writeFile(outputPath, teamHTML, (err) => {
            if (err) throw err;
          });
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
            if (engineerAnswer.role === 'Engineer'){
                engineerPrompt()
            }
            else if (engineerAnswer.role === 'Intern'){
                internPrompt()
            }
            const engineer = new Engineer (engineerAnswer.name, engineerAnswer.Id, engineerAnswer.email, engineerAnswer.Github);
            teamMembers.push(engineer)
            fs.writeFile(outputPath, teamHTML, (err) => {
                if (err) throw err;
              });
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
            if (internAnswer.role === 'Engineer'){
                engineerPrompt()
            }
            else if (internAnswer.role === 'Intern'){
                internPrompt()
            }
            const intern = new Intern(internAnswer.name, internAnswer.Id, internAnswer.email, internAnswer.school);
            teamMembers.push(intern)
            fs.writeFile(outputPath, teamHTML, (err) => {
                if (err) throw err;
              });
        })

let teamHTML = render(teamMembers)
    

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
initApp()