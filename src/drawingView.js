"strict mode";

(function(exports) {

function DrawingView(drawing) {
  this.drawing = drawing;
  this.canvas = document.getElementById('draw');
  this.context = this.canvas.getContext('2d');
  this.canvas = window.innerWidth;
  this.canvas = window.innerHeight;
  console.log(this.context);

}

DrawingView.prototype.plotCoords = function(x,y) {
  // var arr = this.drawing.coordinates;
  // for(var i = 0; i < arr.length; i++){
  //   console.log(this.drawing.coordinates);
    this.context.fillStyle = '#FF0000';
    this.context.fillRect(x,y,10,10);
  // }
};



  exports.DrawingView = DrawingView;
})(this);
