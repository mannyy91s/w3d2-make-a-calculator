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
