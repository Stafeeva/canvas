"strict mode";

describe("Coordinates", function() {

  var coords;

  beforeEach(function() {
    coords = new Coordinates(1, 2, '#adadad', 10);
  });

  it("should save x and y values when instantiated", function() {
    expect(coords.x).toEqual(1);
    expect(coords.y).toEqual(2);
  });

  it("should save colour", function() {
    expect(coords.colour).toEqual('#adadad');
  });

  it("should save toolsize", function() {
    expect(coords.toolSize).toEqual(10);
  });

});
