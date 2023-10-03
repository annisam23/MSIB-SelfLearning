// function firstRun(){
//     setTimeout(()=>{
//         console.log(1);
//     },3000)
// }

// function secondRun(){
//     setTimeout(()=>{
//         console.log(2);
//     },2000)
// }

// function thirdRun(){
//     console.log(3);
// }

// firstRun();
// secondRun();
// thirdRun();

// const janji = new Promise((resolve, reject) => {
//     const a = 3;
//     if(a){
//         resolve("berhasil")
//     }else{
//         reject("gagal");
//     }
// })

// console.log(janji);
//console.log("================================================");

// // Fungsi untuk menghidupkan mesin mobil
// function startEngine() {
//     return new Promise((resolve) => setTimeout(() => {
//         console.log("Mesin mobil dinyalakan");
//         resolve();
//     }, 1000));
// }

// // Fungsi untuk mengecek bahan bakar
// function checkFuel() {
//     return new Promise((resolve, reject) => setTimeout(() => {
//         const fuelLevel = Math.random() * 100;
//         console.log(`Tingkat bahan bakar: ${fuelLevel.toFixed(2)}%`);
//         fuelLevel >= 20 ? resolve(fuelLevel) : reject("Bahan bakar rendah. Isi ulang dulu!");
//     }, 2000));
// }

// // Fungsi untuk mengemudi ke tujuan
// function driveToDestination(destination) {
//     return new Promise((resolve) => setTimeout(() => {
//         console.log(`Mobil menuju ke ${destination}`);
//         resolve(`Sampai di ${destination}`);
//     }, 5000));
// }

// // Fungsi utama untuk pergi ke tujuan
// async function goSomewhere(destination) {
//     try {
//         await startEngine();
//         const fuelLevel = await checkFuel();
//         console.log("Mesin mobil siap, bahan bakar cukup.");
//         const result = await driveToDestination(destination);
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }

// // Panggil fungsi untuk pergi ke tujuan
// goSomewhere("Toko");
//console.log("================================================");

function sum(a,b,callback){
    return result = callback(a,b)
}
console.log(sum(1000,2000, (a,b) => {
    return `Rp. ${a+b}`
}))
//console.log("================================================");
