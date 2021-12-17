const Engineer = require('../lib/engineer');

jest.mock('../lib/engineer');

test('creates engineer object', () => {
    const engineer = new Engineer('Adam', 25, 'adam@gmail.com', 'adamG08');

    expect(engineer.github).toEqual(expect.any(String));
});

test('get engineer github value', () => {
    const engineer = new Engineer('Adam', 25, 'adam@gmail.com', 'adamG08');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('get role of employee', () => {
    const engineer = new Engineer('Adam', 25, 'adam@gmail.com', 'adamG08');

    expect(engineer.getRole().toEqual('Engineer'));
});