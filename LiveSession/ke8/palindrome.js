function isPalindrome(str) {

    // Menghapus karakter spasi dan mengubah huruf menjadi huruf kecil
    str = str.replace(/\s/g, '').toLowerCase();

    // Menghitung panjang string
    const len = str.length;

    // Membandingkan karakter dari awal dan akhir string secara berurutan
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    if(!str){
        return false;
    }

    return true;
}

console.log(isPalindrome("kasur rusak")); // true
console.log(isPalindrome("apa kabar")); // false
console.log(isPalindrome("murah harum")); // true
console.log(isPalindrome("kasur aparusak")); // true
console.log(isPalindrome("katak")); // true
console.log(isPalindrome("")); // false
