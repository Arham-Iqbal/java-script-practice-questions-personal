console.log("object creation");
var area = {
    length: 5,
    breadth: 6,
    calculateArea: function() {
        return this.length * this.breadth;
    }
};
function sum(a,b) {
    let x, y, z;
    x = a; // Assign a value to x (replace 5 with your desired value)
    y = b; // Assign a value to y (replace 10 with your desired value)
    z = x + y; // Assign the sum of x and y to z

    console.log("The sum is:", z); // Log the sum
}

sum(5,6); // Call the function to execute it


console.log("Area:", area.calculateArea()); // Calculate and log the area
a={
    value:20,
};
console.log(a.value);
