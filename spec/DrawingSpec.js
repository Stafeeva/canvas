"strict mode";

 describe("Drawing", function() {

   var drawing;

   beforeEach(function() {
     drawing = new Drawing();
     drawing.addCoordinates(1,2);
   });

   it("should create and save coordinates", function() {
     expect(drawing.coordinates[0].x).toEqual(1);
     expect(drawing.coordinates[0].y).toEqual(2);
   });

   it("should return last coordinates", function() {
     drawing.addCoordinates(1,200);
     expect(drawing.returnLastCoordinates()).toEqual(jasmine.objectContaining([{
       x: 1,
       y: 200
     }]));
   })
 })
