function removeSpaces(text){
    let newText = "";
    for (let i = 0; i < text.length; i++) {
        if(text[i] != " "){
            newText += text[i]
        }
    }
    return newText;
}

function reverseText(text){
    let newText = "";
    for (let i = text.length - 1; i >= 0; i--) {
        newText += text[i];
    }
    return newText;
}

function updateVowels(text){
        let newText = '';
        for (let i = 0; i < text.length; i++) {
          let char = text[i];
          if (char !== 'a' && char !== 'e' && char !== 'i' && char !== 'o' && char !== 'u' && char !== 'A' && char !== 'E' && char !== 'I' && char !== 'O' && char !== 'U') {
            newText += char;
          }
        }
        return newText;
      
}

var password = 'hacktiv 8';
var noSpaces = removeSpaces(password);
var reversed = reverseText(noSpaces);
var encryptedPassword = updateVowels(reversed);


console.log(noSpaces);
console.log(reversed);
console.log(encryptedPassword);