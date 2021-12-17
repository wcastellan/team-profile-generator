const Intern = require('../lib/intern');

test('creates intern object', () => {
    const intern = new Intern('Jane', 74, 'Jane@gmail.com', 'SDSU');

    expect(intern.school).toEqual(expect.any(String));
});

test('get intern school value', () => {
    const intern = new Intern('Jane', 74, 'Jane@gmail.com', 'SDSU');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('get role of employee', () => {
    const intern = new Intern('Jane', 74, 'Jane@gmail.com', 'SDSU');

    expect(intern.getRole()).toEqual('Intern');
});