"strict mode";

(function(exports) {

  function DrawingView(drawing) {
    this.drawing = drawing;
    this.canvas = document.getElementById('draw');
    this.context = this.canvas.getContext('2d');
    this.colors = '#000';
  }

  DrawingView.prototype.plotCoords = function(x,y) {
    this.context.fillStyle = this.colors;
    this.context.fillRect(x,y,-5,-5);
  };

  DrawingView.prototype.setColor = function() {
    this.colors = document.getElementById('colors').value;
  }

  exports.DrawingView = DrawingView;

})(this);
