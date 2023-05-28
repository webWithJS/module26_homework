export function definePrime(num) {
  let isPrime, result;
  isPrime = true;
  if (num > 1 && num <= 1000) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false;
      }
    }
  } else if (num <= 1 || num > 1000) {
    result = "Данные неверны";
    return result;
  }
  result = isPrime
    ? `Число ${num} - простое число`
    : `Число ${num} - составное число`;
  return result;
}
