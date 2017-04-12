var drawing = new Drawing();
var drawingController = new DrawingController(drawing);
drawingController.listenForMouseDown();
drawingController.listenForColorChange();
drawingController.listenForMouseUp();
drawingController.listenForMouseMove();
drawingController.listenForReset();
