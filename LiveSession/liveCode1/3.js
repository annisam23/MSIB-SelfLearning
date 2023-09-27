function sortingItems(array) {
    // tulis kode disini
    const groupedItems = {};
  
    for (const item of array) {
      const firstWord = item[0].toLowerCase();
      
      if (groupedItems[firstWord]) {
        groupedItems[firstWord].push(item);
      } else {
        groupedItems[firstWord] = [item];
      }
    }
  
    return groupedItems;
  }
  
const fruits = ["Banana", "Pomegranate", "Apple", "Pears", "Avocado", "Appricot"];

console.log(sortingItems(fruits));
// Output
// {
//     a: [ "Apple", "Appricot", "Avocado" ],
//     b: [ "Banana" ],
//     p: [ "Pears", "Pomegranate" ],
// }
  
const pokemons = ["Rattata", "Pikachu", "Pidgey", "Nidoran", "Raichu"];

console.log(sortingItems(pokemons));
// Output
// {
//     n: [ "Nidoran" ],
//     p: [ "Pidgey", "Pikachu" ],
//     r: [ "Raichu", "Rattat