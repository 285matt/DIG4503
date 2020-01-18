const Person = require("./Person.js");
class Matt extends Person {
    constructor(name, favoritePerson) {
        super(name, favoritePerson);
    }
}
module.exports = Matt;
