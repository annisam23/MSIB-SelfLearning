function countvowel(str){
    const vowels = "aeiouAEIOU";
    let count = 0;
    //console.log(vowels)
    //console.log(count)
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}

console.log("jumlah huruf vokalnya adalah = ",countvowel("anyong haseo kucingku"));