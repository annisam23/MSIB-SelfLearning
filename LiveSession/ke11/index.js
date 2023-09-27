const getData = () => {
    const xhr = new XMLHttpRequest();
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const result = document.getElementById("result");
    // xhr.onreadystatechange = function() { // Menggunakan fungsi biasa
    //     if (xhr.readyState === 4 && xhr.status === 200) {
    //         const data = JSON.parse(xhr.responseText);
    //         //console.log(data.name);
    //         const randomize = Math.floor(Math.random() * data.length);
    //         //console.log(randomize);
    //         document.getElementById('result').innerHTML = data[randomize].name;
    //     }
    // }

    xhr.onerror = function (){
        alert("Error");
    }

    xhr.onloadstart = function () {
        result.innerHTML = "start...";
    }

    xhr.onloadend = function () {
        result.innerHTML = "";
        const data = JSON.parse(this.response);
        for (let i = 0; i < data.length; i++) {
            const node = document.createElement("ul");
            node.innerHTML = `
                <li>${data[i].title}</li>
                <li>${data[i].body}
            `
            result.appendChild(node);
        }
    }


    xhr.onprogress = function () { 
       result.innerHTML = "progress...";
    }

    xhr.open('GET', url);
    xhr.send();
}
getData();
