let name = prompt("Masukan nama anda:");
if (name === "") {
    console.log("Anda tidak boleh masuk!");
} else {
    let age = parseInt(prompt("Masukan umur anda:"));
    let price;
    
    if (age < 17) {
        console.log("Anda hanya boleh memesan juice.");
        price = 50000;
    } else {
        console.log("Anda hanya boleh memesan anggur.");
        price = 300000;
    }
    let money = parseInt(prompt("Masukan Uang yang ada miliki:"));

    if (money < price) {
        console.log("Uang tidak cukup. Anda harus pulang.");
    } else {
        let sisa = money - price;
        console.log(`Anda bisa pesan minum. Sisa uang anda: ${sisa}`);
    }
}
