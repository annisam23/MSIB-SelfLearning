const button = document.getElementById("setStorage");
const button1 = document.getElementById("setStorage2");
const result = document.getElementById("result");
//result.innerHTML = localStorage.getItem("message");

function setStorage(){
    localStorage.setItem("message", "aku terpanggil nih")
    result.innerHTML = localStorage.getItem("message");
}

function setStorage2(){
    // localStorage.removeItem("message");
    localStorage.setItem("message", "aku terpanggil kedua nih")
    result.innerHTML = localStorage.getItem("message")
}


button.addEventListener("click",setStorage());
button1.addEventListener("click",setStorage2());
