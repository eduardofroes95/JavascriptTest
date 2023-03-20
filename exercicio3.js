let somaresto5e7 = () => {
    let soma = 0;
    for (let i = 0; i < 1001; i++) {
      if (i % 5 === 0 || i % 7 === 0) {
        soma = soma + i;
      }
    }
    return soma;
  }
  
  console.log(somaresto5e7())