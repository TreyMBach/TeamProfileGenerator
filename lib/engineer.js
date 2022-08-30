const { Employee } = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, position, github){
        super(name, id, email, position, github)
        this.github = github;
    }
}

exports.Engineer = Engineer;