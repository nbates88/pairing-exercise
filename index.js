//const SomethingElse = require("./something_else");

class Something {
  constructor(somethingElse) {
    this.somethingElse = somethingElse;
  }
  add(num1, num2) {
    return num1 + num2;
  }

  subtract(num1, num2) {
    return this.somethingElse.subtract(num1, num2);
  }
}

module.exports = Something;
