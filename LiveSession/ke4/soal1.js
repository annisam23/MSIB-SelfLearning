/**
 * Ask the user to enter their name (name)
 * Ask the user to enter their age (age)
 * Ask the user to enter the amount of money (money)
 * price = 0
 * 
 * IF name is empty:
 *     PRINT "Tidak Boleh Masuk"
 * ELSE IF:
 *     PRINT "Nama Andas:", name
 *     If age < 17:
 *         PRINT "Hanya boleh memesan juice"
 *         price = 50000
 *     ELSE:
 *         PRINT "Umur Anda: ", age
 *         PRINT "Uang yang Anda miliki:", money
 *         PRINT "Boleh pesan anggur"
 *         price = 300000
 * 
 *     IF money < price:
 *         PRINT "Uang tidak cukup. Anda harus pulang."
 *     ELSE:
 *         change = money - price
 *         PRINT "Anda bisa pesan minum. Sisa uang Anda:", change
 */

let name = prompt("Masukkan Nama");
let age = prompt("Masukkan Umur");
let money = prompt("Masukkan Jumlah Uang");
let price;

if (!name) {
    console.log("Tidak Boleh Masuk");
} else {
    console.log(`Nama Anda: ${name}`);
    if (age < 17) {
        console.log("Hanya boleh memesan juice");
        price = 50000;
    } else {
        console.log(`Umur Anda: ${age}`);
        console.log(`Uang yang Anda miliki: ${money}`);
        console.log("Boleh pesan anggur");
        price = 300000;
    }

    if (money < price) {
        console.log("Uang tidak cukup. Anda harus pulang.");
    } else {
        let sisa = money - price;
        console.log(`Anda bisa pesan minum. Sisa uang Anda: ${sisa}`);
    }
}
