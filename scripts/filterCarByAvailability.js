function filterCarByAvailability(cars) {
  // Tempat penampungan hasil
  const result = [];

  // FASTER APPROACH
  for (let i = 0; i < cars.length; i++) {
    const car = cars[i];
    if (car.available) result.push(car);
  }

  // SIMPLER MORE READABLE APPROACH
  /* cars.forEach(car => {
    if (car.available) result.push(car);
  }); */

  return result;
}
