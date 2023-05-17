let somaResto5e7 = (indice) => {
    let soma = 0;
    for (let i = 0; i < indice; i++) {
      if (i % 5 === 0 || i % 7 === 0) {
        soma = soma + i;
      }
    }
    return soma;
  }

  module.exports = somaResto5e7;