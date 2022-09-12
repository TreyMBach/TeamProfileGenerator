const { Employee } = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        if(typeof name !== "string" || !name.trim().length){
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }

        if (typeof id !== "number" || isNaN(id) || id < 0) {
            throw new Error("Expected parameter 'id' to be a non-negative number");
        }

        if(typeof email !== "string" || !email.trim().length){
            throw new Error("Expected parameter 'email' to be a non-empty string");
        }

        if (typeof officeNumber !== "number" || isNaN(officeNumber) || officeNumber < 0) {
            throw new Error("Expected parameter 'officeNumber' to be a non-negative number");
        }

        super(name, id, email)
        this.officeNumber = officeNumber;
    }

    managerName(){
        return this.name
    }

    managerID(){
        return this.id
    }

    managerEmail(){
        return this.email
    }

    managerOfficeNumber(){
        return this.officeNumber
    }

    getPosition(){
        return "Manager"
    }
}

module.exports.Manager = Manager;