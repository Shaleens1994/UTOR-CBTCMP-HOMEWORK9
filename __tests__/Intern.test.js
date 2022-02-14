const Intern = require ('../lib/Intern');


const intTest = new Intern ('Rahul', 'rahul@fake.com', 3 , 'Intern', 'UWA')

describe('Intern', () => {
    it('has a name', () =>{
        expect(intTest.name).toEqual(expect.any(String))
        expect(intTest.name.length).toBeGreaterThan(2)

    })
    it('has an email id', () =>{
        expect(intTest.email).toEqual(expect.stringContaining('@'))
    })

    it('has an id that is a num', () => {
        expect(intTest.id).toEqual(expect.any(Number))
    })

    it('has a role of engineer', () => {
        expect(intTest.role).toBe('Intern')
    })

    it('has a school name', () => {
        keys = Object.keys(intTest )
        optionKey = keys[4]
        expect(optionKey).toBe('school')
        expect(intTest.school).toEqual(expect.any(String))
    })
})
