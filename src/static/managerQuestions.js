const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: 'What is the name of the manager of this team?',
        validate: (input) => {
            if (input) {
                return true;
            } else {
                console.log('Please enter a name for your Manager!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'employeeId',
        message: 'What is the Managers employee id?',
        validate: (input) => {
            if (input) {
                return true;
            } else {
                console.log('Please enter an Employee Id!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'Enter an email for the Manager:',
        validate: (titleInput) => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter an email!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the office number for this team?',
        validate: (input) => {
            if (input) {
                return true;
            } else {
                console.log('Please enter an office number!');
                return false;
            }
        }
    },
]

module.exports = managerQuestions;