async function myWorld(){
    let myPromise = new Promise(function(resolve){
        resolve("I Love U Anyonk");
    });
    console.log(await myPromise);
}

myWorld();