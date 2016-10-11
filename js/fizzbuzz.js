function FizzBuzz() {
    var i;
    for (i=1; i<=30; i++){
        if ( i % 2 === 0){
            console.log('.')
        }
        else if ( i % 5 === 0 && i % 3 ===0){
            console.log('fizzbuzz')
        }
        else if ( i % 3 === 0){
            console.log('fizz')
        }
        else if ( i % 5 === 0){
            console.log('buzz')
        }
        else{
            console.log(i)
        }
}
}
FizzBuzz()
// console.assert(FizzBuzz(1) === '.')
// console.assert(FizzBuzz(2) === '..')
// console.assert(FizzBuzz(3) === '..fizz')
// console.assert(FizzBuzz(5) === '..fizz.buzz')
// console.assert(FizzBuzz(10) === '..fizz.buzzfizz..fizzbuzz')
