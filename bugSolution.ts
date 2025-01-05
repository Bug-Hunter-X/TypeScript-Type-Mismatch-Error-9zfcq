function add(a: number, b: number): number {
  return a + b;
}

const num1 = 1;
const num2 = parseFloat('2'); //Convert string to number
const result = add(num1, num2); // Type error resolved
console.log(result); //Output: 3