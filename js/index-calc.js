document.getElementById('addButton').addEventListener('click', function() {
    var firstValue = Number(document.getElementById('firstValue').value)
    var secondValue = Number(document.getElementById('secondValue').value)

    var answer = add(firstValue, secondValue)

    document.getElementById('firstValue').value = answer
})
document.getElementById('subButton').addEventListener('click', function() {
    var firstValue = document.getElementById('firstValue').value
    var secondValue = document.getElementById('secondValue').value

    var answer = subtract(firstValue, secondValue)

    document.getElementById('firstValue').value = answer
})
document.getElementById('mulButton').addEventListener('click', function() {
    var firstValue = document.getElementById('firstValue').value
    var secondValue = document.getElementById('secondValue').value

    var answer = multiply (firstValue, secondValue)

    document.getElementById('firstValue').value = answer
})
document.getElementById('divdButton').addEventListener('click', function() {
    var firstValue = document.getElementById('firstValue').value
    var secondValue = document.getElementById('secondValue').value

    var answer = divide (firstValue, secondValue)

    document.getElementById('firstValue').value = answer
})
document.getElementById('clearButton').addEventListener('click', function() {
    var firstValue = document.getElementById('firstValue').value
    var secondValue = document.getElementById('secondValue').value

    var answer = clear (firstValue,secondValue)

    document.getElementById('firstValue').value = answer
})
document.getElementById('remainderButton').addEventListener('click', function() {
    var firstValue = document.getElementById('firstValue').value
    var secondValue = document.getElementById('secondValue').value

    var answer = remainder (firstValue,secondValue)

    document.getElementById('firstValue').value = answer
})
document.getElementById('incrementButton').addEventListener('click', function() {
    var firstValue = document.getElementById('firstValue').value
    var secondValue = document.getElementById('secondValue').value

    var answer = increment (firstValue,secondValue)

    document.getElementById('firstValue').value = answer
})
document.getElementById('decrementButton').addEventListener('click', function() {
    var firstValue = document.getElementById('firstValue').value
    var secondValue = document.getElementById('secondValue').value

    var answer = decrement (firstValue,secondValue)

    document.getElementById('firstValue').value = answer
})
document.getElementById('num').addEventListener('click'),
    function(){
        document.getElementById('firstValue').value = 1
    }
