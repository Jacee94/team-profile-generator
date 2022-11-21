const Engineer = require('../lib/Engineer');

test("Creates a new Engineer and retrieves it's information", () => {
    const testEngineer = new Engineer('Bob', 1, 'Bob@bobmail.com', 'Engineer@github.com')

    expect(testEngineer.getName()).toEqual('Bob');
    expect(testEngineer.getId()).toEqual(1);
    expect(testEngineer.getEmail()).toEqual('Bob@bobmail.com');
    expect(testEngineer.getGithub()).toEqual('Engineer@github.com');
    expect(testEngineer.getRole()).toEqual('Engineer');
})