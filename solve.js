function isPerfectSquare(num) {
  // Find the square root of the number
  const squareRoot = Math.sqrt(num);

  // Check if the square root is an integer
  return Number.isInteger(squareRoot);
}

// Test cases
console.log(isPerfectSquare(25)); // Output: true (25 is a perfect square of 5)
console.log(isPerfectSquare(20)); // Output: false (20 is not a perfect square)
console.log(isPerfectSquare(144)); // Output: true (144 is a perfect square of 12)


function factorialIterative(num) {
    if (num === 0 || num === 1) {
      return 1;
    }
  
    let factorial = 1;
    for (let i = 2; i <= num; i++) {
      factorial *= i;
    }
  
    return factorial;
  }
  
  const number = 5;
  const resultIterative = factorialIterative(number);
  console.log(`Factorial of ${number} is: ${resultIterative}`);


  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
  
    if (num % 2 === 0 || num % 3 === 0) return false;
  
    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
    }
  
    return true;
  }
  
  function findPrimesInRange(min, max) {
    const primes = [];
  
    for (let num = min; num <= max; num++) {
      if (isPrime(num)) {
        primes.push(num);
      }
    }
  
    return primes;
  }
  
  const minNumber = 50;
  const maxNumber = 350;
  const primeNumbers = findPrimesInRange(minNumber, maxNumber);
  console.log("Prime numbers between", minNumber, "and", maxNumber, "are:", primeNumbers);


  function Palindrome()
	{
		var rem, temp, final = 0;
		var number = Number(document.getElementById("N").value);

		temp = number;
		while(number>0)
		{
			rem = number%10;
			number = parseInt(number/10);
			final = final*10+rem;
		}
		if(final==temp)
		{
			window.alert("The inputed number is Palindrome");
		}
		else
		{
			window.alert("The inputted number is not palindrome");
		}
	}
