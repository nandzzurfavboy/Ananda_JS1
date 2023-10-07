// Contoh penggunaan if, else, dan nested if
let nilai = 79;

if (nilai >= 90) {
  console.log('Nilai Anda Sangat Baik');
} else if (nilai >= 80) {
  console.log('Nilai Anda Baik');
} else if (nilai >= 70) {
  console.log('Nilai Anda Cukup');
} else {
  console.log('Nilai Anda Kurang Baik');
}

// Contoh penggunaan switch case
let bulan = 'Senin';

switch (bulan) {
  case 'Januari':
    console.log('Bulan ini adalah bulan Januari');
    break;
  case 'Februari':
    console.log('Bulan ini adalah bulan Februari');
    break;
  default:
    console.log('Ini bukan nama bulan');
}

// Contoh penggunaan for statement
for (let i = 0; i <= 5; i++) {
  console.log('Dimulai dari ' + i);
}

// Contoh penggunaan while
let perhitungan = 1;
while (perhitungan <= 10) {
  console.log('Perhitungan: ' + perhitungan);
  perhitungan++;
}

// Contoh penggunaan do while
let perhitungan2 = 1;
do {
  console.log('Perhitungan ke 2: ' + perhitungan2);
  perhitungan2++;
} while (perhitungan2 <= 10);

// Contoh penggunaan function
function kurang(a, b) {
  return a - b;
}

let hasilPengurangan = kurang(5, 2);
console.log('Hasil pengurangan: ' + hasilPengurangan);
