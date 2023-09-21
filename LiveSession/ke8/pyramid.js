function pyramid(params) {
    for(let i=1; i <= params; params++){
        let row = " ";
        for(let j =1;j <= params - i;j++){
            row += " ";
        }
        for(let k =1;k <= params -1;k++){
                    row += "*";
        }
    }
}