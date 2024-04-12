const sumOfSquares = (arrayOfNumbers)=>{
    let result = new Number();
    for(let i = 0; i<arrayOfNumbers.length; i++){
        let curr = arrayOfNumbers[i]**2;
        result += curr;
    }
    return result;
}
console.log(sumOfSquares([2,3,5]));
