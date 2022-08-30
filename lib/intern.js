const  { Employee } = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, position, school){ 
        super(name, id, email, position, school)
        this.school = school;
    }
}

exports.Intern = Intern;