import { definePrime } from "../definePrime.js";

describe("tests for definePrime function", () => {
  const simpleNumber = 17;
  const complexNumber = 18;
  const incorrectNumber = 5000;
  const simpleNumberMessage = `Число ${simpleNumber} - простое число`;
  const complexNumberMessage = `Число ${complexNumber} - составное число`;
  const error = `Данные неверны`;

  it("Should operate correctly with simple, complex and invalid numbers", () => {
    expect(definePrime(simpleNumber)).toBe(simpleNumberMessage);
    expect(definePrime(complexNumber)).toBe(complexNumberMessage);
    expect(definePrime(incorrectNumber)).toBe(error);
  });
});
