const { Employee } = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, position, officeNumber){
        super(name, id, email, position, officeNumber)
        this.officeNumber = officeNumber;
    }
}

exports.Manager = Manager;