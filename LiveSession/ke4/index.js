// Deklarasi konstanta phi
const phi = 22/7;

let R; // jari-jari lingkaran
let Luas; // luas lingkaran
let Keliling; // keliling lingkaran

//parseFloat --> string to number
R = parseFloat(prompt("Masukkan jari-jari lingkaran:"));

// Menghitung luas dan keliling
Luas = phi * R * R;
Keliling = 2 * phi * R;

// Menampilkan hasil
console.log("Luas lingkaran:", Luas);
console.log("Keliling lingkaran:", Keliling);
