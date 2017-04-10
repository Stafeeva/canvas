"strict mode";

(function(exports) {

  function Drawing() {
    this.coordinates = [];
  }

  Drawing.prototype.addCoordinates = function(x, y) {
    this.coordinates.push(new Coordinates(x, y));
  };

  exports.Drawing = Drawing;

})(this);
