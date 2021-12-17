const Manager = require('../lib/manager');

test('creates manager object', () => {
    const manager = new Manager('Eve', 32, 'eve@gmail.com', 4);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('get role of employee', () => {
    const manager = new Manager('Eve', 32, 'eve@gmail.com');

    expect(manager.getRole()).toEqual('Manager');
});