"strict mode";

(function(exports) {

  function Drawing() {
    this.coordinates = [];
  }

  Drawing.prototype.addCoordinates = function(x, y, colour, toolSize) {
    this.coordinates.push(new Coordinates(x, y, colour, toolSize));
  };

  Drawing.prototype.returnLastCoordinates = function () {
    return this.coordinates.slice(-1)[0];
  };

  exports.Drawing = Drawing;

})(this);
