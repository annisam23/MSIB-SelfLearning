function fizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0 && i % 3 === 0) {
            console.log(i + " FizzBuzz");
        } else if (i % 2 === 0) {
            console.log(i + " Fizz");
        } else if (i % 3 === 0) {
            console.log(i+ " Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(20);
