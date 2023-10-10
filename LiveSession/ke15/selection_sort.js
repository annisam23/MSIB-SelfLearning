function selectionSort(arr) {
    const n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
  
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
  
      if (minIndex !== i) {
        const temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
      console.log(`proses-${i + 1} = ${arr.join(', ')}`);
    }
  }
  
const array = [27, 38, 4, 43, 9, 82, 10];
console.log(`hasil awal = ${array.join(', ')}`);
selectionSort(array);
console.log(`hasil akhir = ${array.join(', ')}`);
  