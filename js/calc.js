function add(x,y){
    var xy= x + y;
    return xy
}
function subtract(x,y){
    var xy= x - y;
    return xy
}
function multiply(x,y){
    var xy= x * y;
    return xy
}
function divide(x,y){
    var xy= x / y;
    return xy
}

var answer
answer = add(40, 110)
console.assert(answer === 150)
answer = subtract(answer, 9)
console.assert(answer === 141)
answer = divide(answer, 6)
console.assert(answer === 23.5)
answer = multiply(answer, 2)
console.assert(answer === 47)
