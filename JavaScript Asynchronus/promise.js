// function myDisplayer(some){
//     console.log(some);
// }

// let myPromise =  new Promise(function(resolve,reject){
//     let x = 0;
//     let y = 0+5;

//     if(y === 0){
//         resolve("OK");
//     }else{
//         reject("Error");
//     }
// });

// myPromise.then(
//     function(value){myDisplayer(value);},
//     function(error){myDisplayer(error);}
// );

// contoh lainnya
let loveU = new Promise(function(resolve,reject){
    setInterval(function(){resolve("I Love You!!");},3000)
});

loveU.then(function(value){
   console.log(value);
})