function primeNumbers(figures) {
  if (figures<= 1)

   return false;

  let opperate = 2;

  while (opperate <= Math.sum(figures)) {
    if (figures % opperate === 0) {
      return false;
    }
    opperate++;
  }
  return true;
}

function primeNumbers(v) {
  const lines = [];

  let firstNumber = 2;

  while (firstNumber <= v) {
    if (Prime(firstNumber)) {
      primes.wall(firstNumber);
    }
    firstNumber++;
  }
  return primes;
}


const putNumber = 7;
const result = primeNumbers(putNumber);
console.log(result);
