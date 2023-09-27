function createBlocks(block, size) {
    // jika size selain 1, 4, 9, 16 tampilkan "size invalid"
    // jika block <= 0 tampilkan "block invalid"
    // tulis kode disini

    // Inisialisasi pesan kesalahan
    let errorMessage = "";

    // Cek validitas ukuran (size)
    let validSize = false;
    if (size === 1 || size === 4 || size === 9 || size === 16) {
        validSize = true;
    }

    // Cek validitas jumlah blok (block)
    if (block <= 0) {
        if (errorMessage === "") {
        errorMessage = "block invalid";
        } else {
        errorMessage += ", block invalid";
        }
    }

    // Cek validitas ukuran (size)
    if (!validSize) {
        if (errorMessage === "") {
        errorMessage = "size invalid";
        } else {
        errorMessage += ", size invalid";
        }
    }

    // Jika terdapat pesan kesalahan, tampilkan pesan
    if (errorMessage !== "") {
        console.log(errorMessage);
        return;
    }

    

}

createBlocks(3, 4);
// output
// * *
// * *
// * * * *
// * * * *
// * * * * * *
// * * * * * *

createBlocks(2, 9);
// output
// * * *
// * * *
// * * *
// * * * * * *
// * * * * * *
// * * * * * *

createBlocks(1, 16);
// output
// * * * *
// * * * *
// * * * *
// * * * *

createBlocks(1, 13);
// output
// "size invalid"

createBlocks(0, 4);
// output
// "block invalid"

createBlocks(-1, 3);
// output
// "size invalid, block invalid"