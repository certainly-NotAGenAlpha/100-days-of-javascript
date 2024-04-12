const myArray = [6,4,6,7,32,7,75,3];

Array.prototype.findMin = function () {
    console.log(Math.min(...this)); 
}

myArray.findMin();