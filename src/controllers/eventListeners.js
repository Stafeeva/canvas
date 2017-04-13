"strict mode";

(function(exports) {

  listenForMouseDown = function(controller, view) {
    document.addEventListener('mousedown', function(e) {
      controller.drawingView.isDrawing = true;
      controller.addCoordinatesToDrawing(e.offsetX, e.offsetY, view.colors, view.lineWidth);
    });
  };

  listenForMouseUp = function (controller) {
    document.addEventListener('mouseup', function(e) {
      controller.drawingView.isDrawing = false;
    });
  };

  listenForMouseMove= function (controller, view) {
    document.addEventListener('mousemove', function(e) {
      if (controller.drawingView.isDrawing === true) {
      controller.addCoordinatesToDrawing(e, view.colors, view.lineWidth);
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

  listenForUndo = function(controller) {
    var interval;
    var undo = document.getElementById('undo');
    undo.addEventListener('mousedown', function() {
      interval = setInterval(
        function() {
          controller.undoLast();
        }, 5);
    });
    undo.addEventListener('mouseup', function() {
      clearInterval(interval);
    });
  };

  listenForToolSizeChange = function(controller) {
    var sizeOptions = document.getElementsByClassName('tool-sizes');
    for (var i = 0; i < sizeOptions.length; i++) {
      sizeOptions[i].addEventListener('click', function(e) {
        controller.updateSize(e.target.id);
      });
    }
  };

  listenForSave = function() {
    document.getElementById('save').addEventListener('click', function(e) {
    var canvas = document.getElementById('draw');
    document.location.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    });
  }

  exports.eventListener = {
    listenForMouseDown: listenForMouseDown,
    listenForMouseMove : listenForMouseMove,
    listenForMouseUp : listenForMouseUp,
    listenForColorChange : listenForColorChange,
    listenForReset : listenForReset,
    listenForUndo : listenForUndo,
    listenForSave : listenForSave,
    listenForToolSizeChange : listenForToolSizeChange,
    listenForEraser : listenForEraser
  };

})(this);
