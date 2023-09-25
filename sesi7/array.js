//Penggunaan push()
console.log("Penggunaan Push,Pop,Unshift,Shift,Sort")
var cobaPush = [0,1,2,3];
cobaPush.push(4);
console.log("Penggunaan Push");
console.log(cobaPush);


//penggunaan pop
var cobaPop = [0,1,2,3];
cobaPop.pop();
console.log("Penggunaan Pop")
console.log(cobaPop);

//penggunaan Unshift
var cobaUnshift = [0,1,2];
cobaUnshift.unshift(3);
console.log("Penggunaan Unshift")
console.log(cobaUnshift);

//penggunaan Shift
var cobaShift = [3,0,1,2];
cobaShift.shift();
console.log("Penggunaan Shift")
console.log(cobaShift);

//penggunaan sort
var cobaSort = ["anyong","temi","gaga","sifa"];
cobaSort.sort();
console.log("Penggunaan Sort")
console.log(cobaSort);

//masalah di sort
var problemOnSort = [1,2,15];
//problemOnSort.sort();
problemOnSort.sort(function(v1,v2){return v1 > v2});
console.log("Permasalahan di Sort")
console.log(problemOnSort);

//penggunaan splice
var cobaSplice = ["jeruk","mangga","duren","pisang"];
// tambahkan di posisi 2 , 2 element
cobaSplice.splice(2,0,"lemon","kiwi")
console.log("Penggunaan Splice");
console.log(cobaSplice);

//penggunaan spli
var cobaSplit = "Saya adalah full-stack javascipt";
var kata = cobaSplit.split(' ');
console.log("Penggunaan Split");
console.log(kata);