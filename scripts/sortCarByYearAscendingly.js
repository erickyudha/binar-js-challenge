function sortCarByYearAscendingly(cars) {
  // Clone array untuk menghindari side-effect
  const result = [...cars];

  // INSERTION SORT APPROACH
  for (let i = 1; i < result.length; i++) {
    // select setiap element array dan index elemen sebelumnya mulai dari index 1
    let currentCar = result[i];
    let prevCarIndex = i - 1;

    // Cek apakah tahun mobil yang selected lebih kecil dari tahun mobil index sebelumnya
    // Jika iya, swap elemen kebelakang satu persatu sampai posisi benar dan tak bisa di-swap lagi
    while (prevCarIndex >= 0 && currentCar.year < result[prevCarIndex].year) {
      result[prevCarIndex + 1] = result[prevCarIndex];
      prevCarIndex--;
    }
    result[prevCarIndex + 1] = currentCar;
  }

  return result;
}
