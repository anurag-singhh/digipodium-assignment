const names= ['Arvind','Saumya','Shashank','Shujal','Anu'];
const nameswithS = names.filter((n) => {return n.startsWith('s')||n.startsWith('S')});
console.log(nameswithS);

const numbers = [1, 4, 9, 6, 25, 30, 36];

const perfectSquare = numbers.filter(number => {
    const sqrt = Math.sqrt(number);
    return parseInt(sqrt) === sqrt;
});

console.log(perfectSquare);

// create an array to filter all prime numbers

const arr1 = [1, 2, 5, 6, 8, 11];

const filteredPrimeNums = arr1.filter(isPrime);
console.log(filteredPrimeNums);
function isPrime(n){
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i === 0){
            return false;
        }
    }
    return true;
     
}
