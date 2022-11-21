const Employee = require('../lib/Employee')

test("Creates a new Employee and retrieves it's information", () => {
    const testEmployee = new Employee('Bob', 1, 'Bob@bobmail.com')

    expect(testEmployee.getName()).toEqual('Bob');
    expect(testEmployee.getId()).toEqual(1);
    expect(testEmployee.getEmail()).toEqual('Bob@bobmail.com');
    expect(testEmployee.getRole()).toEqual('Employee');
})
