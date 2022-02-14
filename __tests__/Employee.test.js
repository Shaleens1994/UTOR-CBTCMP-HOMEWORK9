const Employee = require ('../lib/Employee');



const empTest = new Employee ("Shaleen", "shaleen@fake.com", 3 , "Employee");


describe('Employee', () => {
    it('has a name', () => {
        expect(empTest.name).toEqual(expect.any(String))
        expect(empTest.name.length).toBeGreaterThan(2)
    })

    it('has an email id', () =>{
        expect(empTest.email).toEqual(expect.stringContaining('@'))
    })

    it('has an id that is a num', () => {
        expect(empTest.id).toEqual(expect.any(Number))
    })

    it('has a role of employee', () => {
        expect(empTest.role).toBe('Employee')
    })

})