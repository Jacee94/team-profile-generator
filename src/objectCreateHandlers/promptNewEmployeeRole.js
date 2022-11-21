const inquirer = require('inquirer');

async function promptNewEmployeeRole() {
    const { role } = await inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Please choose a new role for the Employee',
            choices: [{ name: 'Engineer', value: 0}, { name: 'Intern', value: 1}]
        },
    ])

    return role;
}

module.exports = promptNewEmployeeRole;