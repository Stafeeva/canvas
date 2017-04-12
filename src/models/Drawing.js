"strict mode";

(function(exports) {

  function Drawing() {
    this.coordinates = [];
  }

  Drawing.prototype.addCoordinates = function(x, y) {
    this.coordinates.push(new Coordinates(x, y));
  };

  Drawing.prototype.returnLastCoordinates = function () {
    console.log(this.coordinates);
    console.log(this.coordinates.slice(-1));
    return this.coordinates.slice(-1);
  };

  exports.Drawing = Drawing;

})(this);
