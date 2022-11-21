const inquirer = require('inquirer');
const createManager = require('./src/objectCreateHandlers/createNewManager');
const createNewEmployee = require('./src/objectCreateHandlers/createNewEmployee');
const promptNewEmployeeRole = require('./src/objectCreateHandlers/promptNewEmployeeRole');
const managerQuestions = require('./src/static/managerQuestions');
const generateHtml = require('./src/htmlHelpers/generateHtml');

const teamArray = [];

async function initApp() {
    console.log("WELCOME TO THE PROJECT TEAM GENERATOR");

    const manager = await inquirer.prompt(managerQuestions)
    .then((answers) => createManager(answers));

    teamArray.push(manager);

    let keepAddingEmployees = true;
    while(keepAddingEmployees) {
        const roleId = await promptNewEmployeeRole();

        const employee = await createNewEmployee(roleId);

        console.log(`New ${employee.getRole()} added!`);
        teamArray.push(employee);
        
        const { addAnotherEmployee } = await inquirer.prompt([
            {
                type: 'confirm',
                name: 'addAnotherEmployee',
                message: 'Add another employee?',
                default: true
            }
        ])
        
        if(teamArray.length < 5) keepAddingEmployees = addAnotherEmployee;
        else {
            console.log("Team limit reached");
            keepAddingEmployees = false;
        }
    }

    console.log(teamArray);

    generateHtml(teamArray);
}

initApp();