const { Employee } = require("../lib/employee");


describe('Employee class', () => {

    describe("Initialization", () => {

        it("Creates an object for the name, employee id and employee email.", () => {

            const employee = new Employee("Trey", 1, "trey@gmail.com")

            expect(employee.name).toEqual("Trey");

            expect(employee.id).toEqual(1);

            expect(employee.email).toEqual("trey@gmail.com")

        });

        it("should give an error if there is no input.", () => {

            const cb = () => new Employee();

            const err = new Error("Expected parameter 'name' to be a non-empty string")

            expect(cb).toThrowError(err);

        });
        it("should give an error if not provided an id", () => {

            const cb = () => new Employee("trey", "trey@gmail.com");

            const err = new Error("Expected parameter 'id' to be a non-negative number");
      
            expect(cb).toThrowError(err);

        });
      
        it("should give an error if 'name' is not provided a string", () => {

            const cb = () => new Employee(3, 2, "trey@gmail.com" );

            const err = new Error("Expected parameter 'name' to be a non-empty string");
      
            expect(cb).toThrowError(err);

        });
      
        it("should give an error if 'id' is not a number", () => {

            const cb = () => new Employee("trey", "1", "trey@gmail.com");

            const err = new Error("Expected parameter 'id' to be a non-negative number");
      
            expect(cb).toThrowError(err);

        });
      
        it("should give an error if 'id' is less than 0", () => {

            const cb = () => new Employee("trey", -1, "trey@gmail.com");

            const err = new Error("Expected parameter 'id' to be a non-negative number");
      
            expect(cb).toThrowError(err);

        });
        it("should give an error if 'email' is not a string", () => {

            const cb = () => new Employee("trey", 1, 3);

            const err = new Error("Expected parameter 'email' to be a non-empty string");
      
            expect(cb).toThrowError(err);

        });
        it("should give an error if 'email' is not provided", () => {

            const cb = () => new Employee("trey", 1);

            const err = new Error("Expected parameter 'email' to be a non-empty string");
      
            expect(cb).toThrowError(err);

        });
    })

    describe('the employees name', () => {

        it("Returns employee name as a string", () => {

            const employee = new Employee("trey", 1, "trey@gmail.com")

            expect(employee.name).toBe("trey")

        })

    })

    describe('the employees Id', () => {

        it("Returns employee ID as an int", () => {

            const employee = new Employee("trey", 1, "trey@gmail.com")

            expect(employee.id).toBe(1)

        })
        
    })

    describe('the employees email', () => {

        it("Returns employee email as a string", () => {

            const employee = new Employee("trey", 1, "trey@gmail.com")

            expect(employee.email).toBe("trey@gmail.com")
        })

    })

    describe('The employees position', () => {

        it("Returns employees position", () => {

            const employee = new Employee("trey", 1, "trey@gmail.com", "Employee")

            expect(employee.position).toBe("Employee")

        })

    })

});
