function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  /* console.log(cars); */

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini

  // INSERTION SORT APPROACH
  for (let i = 1; i < result.length; i++) {
    let currentCar = result[i];
    let prevCarIndex = i - 1;

    while (prevCarIndex >= 0 && currentCar.year > result[prevCarIndex].year) {
      result[prevCarIndex + 1] = result[prevCarIndex];
      prevCarIndex--;
    }

    result[prevCarIndex + 1] = currentCar;
  }

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
