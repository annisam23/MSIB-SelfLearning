var myAge = 17;
var myHeight = 161;
var vehicleType = "mobil"; 

if (myAge >= 17 && myHeight > 150) {
    if (vehicleType === "mobil") {
        console.log("Kamu perlu SIM A");
    } else if (vehicleType === "truck") {
        console.log("Kamu perlu SIM B");
    } else if (vehicleType === "motor") {
        console.log("Kamu perlu SIM C");
    } else {
        console.log("Jenis kendaraan tidak ditemukan!");
    }
} else {
    console.log("Anda belum memenuhi persyaratan membuat SIM");
}