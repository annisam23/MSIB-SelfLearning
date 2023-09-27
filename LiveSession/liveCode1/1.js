function getResult(name,score) {
    // score 100 - 80 : "grade A"
    // score 79 - 68 : "grade B"
    // score 59 - 48 : "grade C"
    // score 39 - 20 : "grade D, Belajar lagi nak"
    // score 19 - 0  : "grade E, Belajar lagi nak"
    // jika nilai berada di luar rentang 0 - 100 , tampilkan pesan "Nilai tidak valid"

    if (score >= 80 && score <= 100) {
        console.log(`${name} mendapatkan grade A`);
    } else if (score >= 68 && score <= 79) {
        console.log(`${name} mendapatkan grade B`);
    } else if (score >= 48 && score <= 59) {
        console.log(`${name} mendapatkan grade C`);
    } else if (score >= 20 && score <= 39) {
        console.log(`${name} mendapatkan grade D, Belajar Lagi nak`);
    } else if (score >= 0 && score <= 19) {
        console.log(`${name} mendapatkan grade E, Belajar Lagi nak`);
    } else {
        console.log("Nilai Tidak Valid");
    }
}

getResult("Adrian",78); // Output: "Adrian mendapatkan grade B"
getResult("Rafhi",83); // Output: "Rafhi mendapatkan grade A"
getResult("Annisa",1000); // Output: "Nilai Tidak Valid"
getResult("Taufik",21); // Output: "Taufik mendapatkan grade D, Belajar Lagi nak"
getResult("Taufik",-18); // Output: "Nilai Tidak Valid"
