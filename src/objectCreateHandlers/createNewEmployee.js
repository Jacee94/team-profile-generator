const inquirer = require("inquirer");
const employeeQuestions = require('../static/employeeQuestions');
const Engineer = require('../../lib/Engineer');
const Intern = require('../../lib/Intern');

async function createEmployeeBasedOnRole(name, id, email, role) {
    if(role === 0) {
        const { github } = await inquirer.prompt([{
            type: 'input',
            name: 'github',
            message: 'What is this Engineers GitHub profile?',
            validate: (input) => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter a name for this Employee');
                    return false;
                }
            }
        }])

        return new Engineer(name, id, email, github);
    }

    if(role === 1) {
        const { school } = await inquirer.prompt([{
            type: 'input',
            name: 'school',
            message: 'What is this Interns school?',
            validate: (input) => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter a School for this Intern');
                    return false;
                }
            }
        }])

        return new Intern(name, id, email, school);
    }
}

async function createNewEmployee(roleId) {
    const { employeeName , employeeId, employeeEmail } = await inquirer.prompt(employeeQuestions);

    return createEmployeeBasedOnRole(employeeName , employeeId, employeeEmail, roleId);
}

module.exports = createNewEmployee