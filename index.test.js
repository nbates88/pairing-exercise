const Something = require("./index");
//const SomethingElse = require("./something_else");

describe("something class", () => {
  let something;
  let somethingElse;

  beforeEach(() => {
    //mock a dependency
    somethingElse = jest.mock("./something_else");
    somethingElse.subtract = jest.fn();

    something = new Something(somethingElse);
  });

  it("has an add fn", () => {
    expect(something.add(2, 2)).toEqual(4);
  });

  it("calls the subtract fn on SomethingElse", () => {
    //new somethingElse in the something constructor, not as dependency
    //const result = something.subtract(2, 2);
    //expect(result).toEqual(0);

    expect(somethingElse.subtract).toHaveBeenCalled();
  });
});
