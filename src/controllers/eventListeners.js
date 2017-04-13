"strict mode";

(function(exports) {


  listenForMouseDown = function(controller) {
    document.addEventListener('mousedown', function(e) {
      controller.drawingView.isDrawing = true;
      controller.addCoordinatesToDrawing(e.offsetX, e.offsetY);
    });
  };

  listenForMouseUp = function (controller) {
    document.addEventListener('mouseup', function(e) {
      controller.drawingView.isDrawing = false;
    });
  };

  listenForMouseMove= function (controller) {
    document.addEventListener('mousemove', function(e) {
      controller.addCoordinatesToDrawing(e);
    });
  };

  listenForReset = function (controller) {
    var reset = document.getElementById("reset");
    reset.addEventListener('click', controller.resetDrawing.bind(controller));
  };

  listenForColorChange = function(controller) {
    var colorOptions = document.getElementById('hex-colors').addEventListener('change', function(e) {
      var color = "#" + e.target.value;
      controller.updateColor(color);
    });
  }

  exports.eventListener = {
    listenForMouseDown: listenForMouseDown,
    listenForMouseMove : listenForMouseMove,
    listenForMouseUp : listenForMouseUp,
    listenForColorChange : listenForColorChange,
    listenForReset : listenForReset
  };

})(this);
