function removeSpaces(text){
    return text.replace(/\s/g, ''); // Remove all spaces
}

function reverseText(text){
    return text.split('').reverse().join(''); // Reverse the text
}

function updateVowels(text){
    return text.replace(/[aeiou]/gi, ''); // Remove vowels
}

var password = 'hacktiv 8';
var noSpaces = removeSpaces(password);
var reversed = reverseText(noSpaces);
var encryptedPassword = updateVowels(reversed);


console.log(noSpaces);
console.log(reversed);
console.log(encryptedPassword);