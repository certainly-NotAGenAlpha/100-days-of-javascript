const myArray = [1, 2, 3, 4, 5];

Array.prototype.findMin = function () {
    console.log(Math.min(...this)); 
}

myArray.findMin();