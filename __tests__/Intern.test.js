const Intern = require('../lib/Intern');

test("Creates a new Employee and retrieves it's information", () => {
    const testIntern = new Intern('Bob', 1, 'Bob@bobmail.com', 'University of Utah')

    expect(testIntern.getName()).toEqual('Bob');
    expect(testIntern.getId()).toEqual(1);
    expect(testIntern.getEmail()).toEqual('Bob@bobmail.com');
    expect(testIntern.getSchool()).toEqual('University of Utah');
    expect(testIntern.getRole()).toEqual('Intern');
})
