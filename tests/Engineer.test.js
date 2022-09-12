const { Engineer } = require("../lib/engineer");

describe("Engineer class", () => {

    describe("Initialization", () => {

        it("Creates an object for the name, employee id and employee email with the github based off the employee class.", () => {

            const engineer = new Engineer("Trey", 1, "trey@gmail.com", "github.com/trey")

            expect(engineer.name).toEqual("Trey");

            expect(engineer.id).toEqual(1);

            expect(engineer.email).toEqual("trey@gmail.com")

            expect(engineer.github).toEqual("github.com/trey")

        });
        //Error Catches
        it("should give an error if there is no input.", () => {

            const cb = () => new Engineer();
      
            expect(cb).toThrowError();

        });
        it("should give an error if not provided an id", () => {

            const cb = () => new Engineer("Trey", "trey@gmail.com", "github.com/trey");

            const err = new Error("Expected parameter 'id' to be a non-negative number");
      
            expect(cb).toThrowError(err);

        });
      
        it("should give an error if 'name' is not provided a string", () => {

            const cb = () => new Engineer(3, 2, "trey@gmail.com", "github.com/trey");

            const err = new Error("Expected parameter 'name' to be a non-empty string");
      
            expect(cb).toThrowError(err);

        });
      
        it("should give an error if 'id' is not a number", () => {

            const cb = () => new Engineer("Trey", "1", "trey@gmail.com", "github.com/trey");

            const err = new Error("Expected parameter 'id' to be a non-negative number");
      
            expect(cb).toThrowError(err);

        });
      
        it("should give an error if 'id' is less than 0 or a negative number", () => {

            const cb = () => new Engineer("Trey", -1, "trey@gmail.com", "github.com/trey");

            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect(cb).toThrowError(err);

        });
        it("should give an error if 'email' is not provided a string", () => {

            const cb = () => new Engineer("Trey", 1, 3, "github.com/trey");

            const err = new Error("Expected parameter 'email' to be a non-empty string");

            expect(cb).toThrowError(err);

        });
        it("should give an error if 'github' is not provided a string", () => {

            const cb = () => new Engineer("Trey", 1, "trey@gmail.com", "");

            const err = new Error("Expected parameter 'github' to be a non-empty string");

            expect(cb).toThrowError(err);

        });
        it("should throw an error if 'github' is not provided in the input.", () => {

            const cb = () => new Engineer("Trey", 1, "trey@gmail.com");

            const err = new Error("Expected parameter 'github' to be a non-empty string");

            expect(cb).toThrowError(err);
        
        });
    })

    describe('getName method', () => {
        it("Returns the employee name as a string", () => {

            const engineer = new Engineer("Trey", 1, "trey@gmail.com", "github.com/trey")

            expect(engineer.engineerName()).toBe("Trey")

        })
    })

    describe('getId method', () => {
        it("Returns the employee ID as an int", () => {

            const engineer = new Engineer("Trey", 1, "trey@gmail.com", "github.com/trey")

            expect(engineer.engineerID()).toBe(1)

        })
    })

    describe('getEmail method', () => {
        it("Returns the employee email as a string", () => {

            const engineer = new Engineer("Trey", 1, "trey@gmail.com", "github.com/trey")

            expect(engineer.engineerEmail()).toBe("trey@gmail.com")

        })
    })

    describe('getGithub method', () => {
        it("Returns the employees github URL", () => {

            const engineer = new Engineer("Trey", 1, "trey@gmail.com", "github.com/trey")

            expect(engineer.engineerGithub()).toBe("github.com/trey")

        })
    })

    describe('getRole method', () => {
        it("Returns the employees role", () => {

            const engineer = new Engineer("Trey", 1, "trey@gmail.com", "github.com/trey")

            expect(engineer.getPosition()).toBe("Engineer")

        })
    })
})