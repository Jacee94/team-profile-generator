const employeeQuestions = [
    {
        type: 'input',
        name: 'employeeName',
        message: 'What is the Name of this Employee?',
        validate: (input) => {
            if (input) {
                return true;
            } else {
                console.log('Please enter a name for this Employee');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'employeeId',
        message: 'What is the Employee Id of this Employee?',
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
        name: 'employeeEmail',
        message: 'What is the Email Address of this Employee?',
        validate: (input) => {
            if (input) {
                return true;
            } else {
                console.log('Please enter a name for this Employee');
                return false;
            }
        }
    }
]

module.exports = employeeQuestions;