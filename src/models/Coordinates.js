"strict mode";

( function(exports) {

  function Coordinates(x, y, colour, toolSize) {
    this.x = x;
    this.y = y;
    this.colour = colour;
    this.toolSize = toolSize;
  }

  exports.Coordinates = Coordinates;

})(this);
