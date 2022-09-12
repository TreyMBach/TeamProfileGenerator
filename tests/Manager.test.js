const { Manager } = require("../lib/Manager");


describe('Manager class', () => {

    describe("Initialization", () => {

        it("Creates an object for the name, Manager id and Manager email.", () => {

            const manager = new Manager("Trey", 1, "trey@gmail.com", 23)

            expect(manager.name).toEqual("Trey");

            expect(manager.id).toEqual(1);

            expect(manager.email).toEqual("trey@gmail.com")

        });

        it("should give an error if there is no input.", () => {

            const cb = () => new Manager();

            const err = new Error("Expected parameter 'name' to be a non-empty string")

            expect(cb).toThrowError(err);

        });
        it("should give an error if not provided an id", () => {

            const cb = () => new Manager("trey", "trey@gmail.com", 23);

            const err = new Error("Expected parameter 'id' to be a non-negative number");
      
            expect(cb).toThrowError(err);

        });
      
        it("should give an error if 'name' is not provided a string", () => {

            const cb = () => new Manager(3, 2, "trey@gmail.com", 23);

            const err = new Error("Expected parameter 'name' to be a non-empty string");
      
            expect(cb).toThrowError(err);

        });
      
        it("should give an error if 'id' is not a number", () => {

            const cb = () => new Manager("trey", "1", "trey@gmail.com", 23);

            const err = new Error("Expected parameter 'id' to be a non-negative number");
      
            expect(cb).toThrowError(err);

        });
      
        it("should give an error if 'id' is less than 0", () => {

            const cb = () => new Manager("trey", -1, "trey@gmail.com", 23);

            const err = new Error("Expected parameter 'id' to be a non-negative number");
      
            expect(cb).toThrowError(err);

        });
        it("should give an error if 'email' is not a string", () => {

            const cb = () => new Manager("trey", 1, 3);

            const err = new Error("Expected parameter 'email' to be a non-empty string");
      
            expect(cb).toThrowError(err);

        });
        it("should give an error if 'email' is not provided", () => {

            const cb = () => new Manager("trey", 1);

            const err = new Error("Expected parameter 'email' to be a non-empty string");
      
            expect(cb).toThrowError(err);

        });

        it("should give an error if 'office number' is not a number", () => {

            const cb = () => new Manager("Trey", 1, "trey@gmail.com", "23")

            const err = new Error("Expected parameter 'officeNumber' to be a non-negative number");
      
            expect(cb).toThrowError(err);

        });
        it("should give an error if 'office number' is less than zero", () => {

            const cb = () => new Manager("Trey", 1, "trey@gmail.com", -1)

            const err = new Error("Expected parameter 'officeNumber' to be a non-negative number");
      
            expect(cb).toThrowError(err);

        });
    })

    describe('the Managers name', () => {

        it("Returns Manager name as a string", () => {

            const manager = new Manager("trey", 1, "trey@gmail.com", 23)

            expect(manager.managerName()).toBe("trey")

        })

    })

    describe('the Managers Id', () => {

        it("Returns Manager ID as an int", () => {

            const manager = new Manager("trey", 1, "trey@gmail.com", 23)

            expect(manager. managerID()).toBe(1)

        })
        
    })

    describe('the Managers email', () => {

        it("Returns Manager email as a string", () => {

            const manager = new Manager("trey", 1, "trey@gmail.com", 23)

            expect(manager.managerEmail()).toBe("trey@gmail.com")
        })

    })

    describe('the Manager Office Number', () => {

        it("Returns the Manager Office Number as an int", () => {

            const manager = new Manager("trey", 1, "trey@gmail.com", 23)

            expect(manager.managerOfficeNumber()).toBe(23)

        })
    })

    describe('The Managers position', () => {

        it("Returns Managers position", () => {

            const manager = new Manager("trey", 1, "trey@gmail.com", 23)

            expect(manager.getPosition()).toBe("Manager")

        })

    })

});
