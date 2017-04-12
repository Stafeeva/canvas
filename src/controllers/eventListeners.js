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

  listenForColorChange = function(controller) {
      var colorOptions = document.getElementsByClassName('colors');
      for (var i = 0; i < colorOptions.length; i++) {
        colorOptions[i].addEventListener('click', function(e) {
          controller.updateColor(e.target.id);
        });
      }
    };

  listenForReset = function (controller) {
      var reset = document.getElementById("reset");
      reset.addEventListener('click', controller.resetDrawing.bind(controller));
  };

    exports.eventListener = {
      listenForMouseDown: listenForMouseDown,
      listenForMouseMove : listenForMouseMove,
      listenForMouseUp : listenForMouseUp,
      listenForColorChange : listenForColorChange,
      listenForReset : listenForReset
    };

})(this);
