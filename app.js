const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const teamArray = [];

function addManager () {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the name of the manager?"
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the id of the manager?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the email of the manager?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the office number of the manager?"
        }
    ]).then(answers => {

        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber)
        //console.log(manager)

        teamArray.push(manager)


        // rendering the file
        const renderedHTML = render(teamArray);
        fs.writeFileSync(outputPath, renderedHTML);
    })
}
//engineer function
function addEngineer () {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the name of the engineer?"
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is the id of the engineer?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the email of the engineer?"
        },
        {
            type: "input",
            name: "github",
            message: "What is the gitHub username of the engineer?"
        }
    ]).then(answers => {

        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.gitHub)
        //console.log(engineer)

        teamArray.push(engineer)


        // rendering the file
        const renderedHTML = render(teamArray);
        fs.writeFileSync(outputPath, renderedHTML);
    })
}

//intern function
function addInter () {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the name of the intern?"
        },
        {
            type: "input",
            name: "internId",
            message: "What is the id of the intern?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the email of the intern?"
        },
        {
            type: "input",
            name: "github",
            message: "What is the gitHub username of the intern?"
        }
    ]).then(answers => {

        const engineer = new Engineer(answers.internName, answers.internId, answers.internEmail, answers.gitHub)
        //console.log(intern)

        teamArray.push(intern)


        // rendering the file
        const renderedHTML = render(teamArray);
        fs.writeFileSync(outputPath, renderedHTML);
    })
}

function startTeamBuilding () {
    addManager();
    addEngineer();
    addIntern();

    // add engineer
    // add intern
}


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


startTeamBuilding();