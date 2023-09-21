const values = [1,5,7,2,4];
//const result = values.filter(findOdd);
// function findOdd(value){
//     return value % 2 === 1;
// }
//console.log(result)

function odd(value){
    return value.filter((value) => value % 2 === 0);
}
console.log(odd(values));


