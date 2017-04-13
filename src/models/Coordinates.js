"strict mode";

( function(exports) {

  function Coordinates(x, y, colour, brush) {
    this.x = x;
    this.y = y;
    this.colour = colour;
    this.brush = brush;
  }

  exports.Coordinates = Coordinates;

})(this);
