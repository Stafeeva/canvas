"strict mode";

(function(exports) {

  function Drawing() {
    this.coordinates = [];
  }

  Drawing.prototype.addCoordinates = function(x, y) {
    this.coordinates.push(new Coordinates(x, y));
  };

  Drawing.prototype.returnLastCoordinates = function () {
    return this.coordinates.slice(-1)[0];
  };

  exports.Drawing = Drawing;

})(this);
