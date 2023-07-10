const addNumber = (num1: string, num2: string) => {
  const addResult = parseInt(num1, 10) + parseInt(num2, 10);
  return addResult;
};
const subtractNumber = (num1: string, num2: string) => {
  const subtractResult = parseInt(num1, 10) - parseInt(num2, 10);
  return subtractResult;
};
const multiplyNumber = (num1: string, num2: string) => {
  const multiplyResult = parseInt(num1, 10) * parseInt(num2, 10);
  return multiplyResult;
};
const divideNumber = (num1: string, num2: string) => {
  const divideResult = parseInt(num1, 10) / parseInt(num2, 10);
  return divideResult;
};

export { addNumber, subtractNumber, multiplyNumber, divideNumber };
