const Employee = require('../lib/employee');

jest.mock('../lib/employee');

test('creates an employee object', () => {
    const employee = new Employee('David', 1, 'david@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee name', () => {
    const employee = new Employee('David', 1, 'david@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('get employee id', () => {
    const employee = new Employee('David', 1, 'david@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('get employee email', () => {
    const employee = new Employee('David', 1, 'david@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('gets role of employee', () => {
    const employee = new Employee('David', 1, 'david@gmail.com');

    expect(employee.getRole()).toEqual('Employee');
});
