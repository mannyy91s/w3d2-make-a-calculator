function FizzBuzz(n) {
    var fizzbuzz = '';
    for (var i=1; i<=n; i++) {
        if ( i % 5 === 0 && i % 3 === 0) {
            fizzbuzz += 'fizzbuzz';
        }
        else if ( i % 3 === 0) {
            fizzbuzz += 'fizz';
        }
        else if ( i % 5 === 0) {
            fizzbuzz += 'buzz';
        }
        else {
            fizzbuzz += '.';
        }
    }
    return fizzbuzz;
}
console.log(FizzBuzz(200))
console.assert(FizzBuzz(1) === '.')
console.assert(FizzBuzz(2) === '..')
console.assert(FizzBuzz(3) === '..fizz')
console.assert(FizzBuzz(5) === '..fizz.buzz')
console.assert(FizzBuzz(10) === '..fizz.buzzfizz..fizzbuzz')
