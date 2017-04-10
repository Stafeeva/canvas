 describe("Drawing", function() {
   
   beforeEach(function() {
     drawing = new Drawing();
   });

   it("should create and save coordinates", function() {
     drawing.addCoordinates(1,2);
     expect(drawing.coordinates[0].x).toEqual(1);
     expect(drawing.coordinates[0].y).toEqual(2);
   });
 })
