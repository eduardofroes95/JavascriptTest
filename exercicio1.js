let calcularMdc = (a, b) => {
  let resto;
  while (b !== 0) {
    resto = a % b;
    a = b;
    b = resto;
  }
  return a;
}

const a = 20;
const b = 50;
const mdc = calcularMdc(a, b);
console.log(mdc)


module.exports =  calcularMdc; 