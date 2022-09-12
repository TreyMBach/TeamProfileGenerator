const { Intern } = require("../lib/intern")

describe("Intern class", () => {

    describe("Initialization", () => {

        it("Creates an object for the name, intern id, intern email and school based off the intern class.", () => {

            const intern = new Intern("Trey", 1, "trey@gmail.com", "UofA")

            expect(intern.name).toEqual("Trey");

            expect(intern.id).toEqual(1);

            expect(intern.email).toEqual("trey@gmail.com")

            expect(intern.school).toEqual("UofA")

        });
        //Error Catches
        it("should give an error if there is no input.", () => {

            const cb = () => new Intern();
      
            expect(cb).toThrow();

        });
        it("should give an error if not provided an id", () => {

            const cb = () => new Intern("Trey", "trey@gmail.com", "UofA");

            const err = new Error("Expected parameter 'id' to be a non-negative number");
      
            expect(cb).toThrowError(err);

        });
      
        it("should give an error if 'name' is not provided a string", () => {

            const cb = () => new Intern(3, 2, "trey@gmail.com", "UofA");

            const err = new Error("Expected parameter 'name' to be a non-empty string");
      
            expect(cb).toThrowError(err);

        });
      
        it("should give an error if 'id' is not a number", () => {

            const cb = () => new Intern("Trey", "1", "trey@gmail.com", "UofA");

            const err = new Error("Expected parameter 'id' to be a non-negative number");
      
            expect(cb).toThrowError(err);

        });
      
        it("should give an error if 'id' is less than 0 or a negative number", () => {

            const cb = () => new Intern("Trey", -1, "trey@gmail.com", "UofA");

            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect(cb).toThrowError(err);

        });
        it("should give an error if 'email' is not provided a string", () => {

            const cb = () => new Intern("Trey", 1, 3, "UofA");

            const err = new Error("Expected parameter 'email' to be a non-empty string");

            expect(cb).toThrowError(err);

        });
        it("should give an error if 'github' is not provided a string", () => {

            const cb = () => new Intern("Trey", 1, "trey@gmail.com", 2);

            const err = new Error("Expected parameter 'school' to be a non-empty string");

            expect(cb).toThrowError(err);

        });
        it("should throw an error if 'github' is not provided in the input.", () => {

            const cb = () => new Intern("Trey", 1, "trey@gmail.com");

            const err = new Error("Expected parameter 'school' to be a non-empty string");

            expect(cb).toThrowError(err);
        
        });
    })

    describe('internName method', () => {
        it("Returns the intern name as a string", () => {

            const intern = new Intern("Trey", 1, "trey@gmail.com", "UofA")

            expect(intern.internName()).toBe("Trey")

        })
    })

    describe('internID method', () => {
        it("Returns the intern ID as an int", () => {

            const intern = new Intern("Trey", 1, "trey@gmail.com", "UofA")

            expect(intern.internID()).toBe(1)

        })
    })

    describe('internEmail method', () => {
        it("Returns the intern email as a string", () => {

            const intern = new Intern("Trey", 1, "trey@gmail.com", "UofA")

            expect(intern.internEmail()).toBe("trey@gmail.com")

        })
    })

    describe('internSchool method', () => {
        it("Returns the interns School.", () => {

            const intern = new Intern("Trey", 1, "trey@gmail.com", "UofA")

            expect(intern.internSchool()).toBe("UofA")

        })
    })

    describe('getPosition method', () => {
        it("Returns the interns role", () => {

            const intern = new Intern("Trey", 1, "trey@gmail.com", "UofA")

            expect(intern.getPosition()).toBe("Intern")

        })
    })
})