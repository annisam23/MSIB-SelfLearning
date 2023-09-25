function toCelcius(fah){
    return (5/9) * (fah-32);
}
let text = "the temperatur is " + toCelcius(77) + " Celcius";
console.log(text);