

let arrayExercicio = (array) => {
  
    let indiceMaior = 0;
    let indiceMenor = 0;
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[indiceMaior]) {
        indiceMaior = i;
      } else if (array[i] < array[indiceMenor]) {
        indiceMenor = i;
      }
    }
  
    return [indiceMaior, indiceMenor];
  }

  console.log(arrayExercicio([12,21,55,73,78,54,32,19,71,35,77, 9]))
  