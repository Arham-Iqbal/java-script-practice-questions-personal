console.log("factory function se object  creation");
function createRectangle(l, b) {
    return {
        length: l,
        breadth: b,
        areaOfRectangle: function() {
            return this.length * this.breadth;
        }
    };
}

const crrect = createRectangle(10, 20);
console.log(crrect.length); // Access length property of the crrect object
console.log(crrect.breadth); // Access breadth property of the crrect object
console.log(crrect.areaOfRectangle()); // Calculate and log the area of the rectangle


// console.log(rectangle.lenght);
// console.log(rectangle.breadth);
// console.log(rectangle.areaOfRectangle());
