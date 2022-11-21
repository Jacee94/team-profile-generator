const Manager = require('../lib/Manager')

test("Creates a new Employee and retrieves it's information", () => {
    const testManager = new Manager('Hugh Mungus', 2, 'Hugh@mungus.com', 232)
    
    expect(testManager.getName()).toEqual('Hugh Mungus');
    expect(testManager.getId()).toEqual(2);
    expect(testManager.getEmail()).toEqual('Hugh@mungus.com');
    expect(testManager.getOfficeNumber()).toEqual(232);
    expect(testManager.getRole()).toEqual('Manager');
})
