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
      console.log(controller.drawing.coordinates)
    });
  };

  listenForMouseMove= function (controller) {
    document.addEventListener('mousemove', function(e) {
      if (controller.drawingView.isDrawing === true) {
      controller.addCoordinatesToDrawing(e);
      }
    });
  };

  listenForReset = function (controller) {
    var reset = document.getElementById("reset");
    reset.addEventListener('click', function() {
      controller.resetDrawing();
    });
  };

  listenForColorChange = function(controller) {
    var colorOptions = document.getElementById('hex-colors').addEventListener('change', function(e) {
      var color = "#" + e.target.value;
      controller.updateColor(color);
    });
  };

  listenForEraser = function(controller) {
    var eraser = document.getElementById('eraser').addEventListener('click', function() {
      var color = "#fff";
      controller.updateColor(color);
    });
  };
  var interval
  listenForUndo = function(controller) {
    var undo = document.getElementById('undo')
    undo.addEventListener('mousedown', function() {
      interval = setInterval(
        function(){controller.undoLast()}, 5);
    });
    undo.addEventListener('mouseup', function() {
      clearInterval(interval);
    });
  }

  exports.eventListener = {
    listenForMouseDown: listenForMouseDown,
    listenForMouseMove : listenForMouseMove,
    listenForMouseUp : listenForMouseUp,
    listenForColorChange : listenForColorChange,
    listenForReset : listenForReset,
    listenForEraser : listenForEraser,
    listenForUndo : listenForUndo
  };

})(this);
