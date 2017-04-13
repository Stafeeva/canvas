"strict mode";

 describe("Drawing", function() {

   var drawing;

   beforeEach(function() {
     drawing = new Drawing();
     drawing.addCoordinates(1,2, '#adadad', 10);
   });

   it("should create and save coordinates", function() {
     expect(drawing.coordinates[0].x).toEqual(1);
     expect(drawing.coordinates[0].y).toEqual(2);
   });

   it("should return last coordinates", function() {
     drawing.addCoordinates(150,200);
     expect(drawing.returnLastCoordinates().x).toEqual(150);
     expect(drawing.returnLastCoordinates().y).toEqual(200);
   });

   it("should save colour and tool size for each saved coordinates", function() {
     expect(drawing.coordinates[0].colour).toEqual('#adadad');
     expect(drawing.coordinates[0].toolSize).toEqual(10);
   });

 });
