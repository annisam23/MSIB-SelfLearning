// fill select option
const type = document.getElementById("type");
const result = document.getElementById("result");
const url = "http://localhost:3000/data";
const xhr = new XMLHttpRequest();

const typeList = [
    "Normal",
    "Fire",
    "Fighting",
    "Water",
    "Flying"
];

typeList.forEach((element) => {
    // create option using DOM
    const newOption = document.createElement('option');
    const optionText = document.createTextNode(element);
    // set option text
    newOption.appendChild(optionText);
    // and option value
    newOption.setAttribute('value', element);

    type.appendChild(newOption)
});

function fetchData() {
    xhr.onerror = function () {
        alert("error")
    }

    xhr.onloadstart = function () {
        result.innerHTML = "Start";
    }

    xhr.onloadend = function () {
        result.innerHTML = "";
        const data = JSON.parse(this.response);
        for (let i = 0; i < data.length; i++) {
            const node = document.createElement("div");
            node.innerHTML = `
                <div class="card mb-3 text-bg-dark" style="width: 18rem;">
                    <img src="${data[i].img}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Name : ${data[i].name}</h5>
                        <h5 class="card-text">Type: ${data[i].type}</h5>
                        <a href="#" class="btn btn-danger" onclick="deleteData(${data[i].id})">Delete</a>
                    </div>
                </div>
            `
            result.appendChild(node);
        }
    }

    xhr.onprogress = function () {
        result.innerHTML = "Loading";
    }

    xhr.open("GET", url);
    xhr.send();
}

function postData(event) {
    event.preventDefault();
    const data = JSON.stringify({
        name: document.getElementById("name").value,
        img: document.getElementById("img").value,
        type: document.getElementById("type").value
    });

    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onload = function () {
        console.log(this.responseText);
    };

    xhr.send(data);
}

function deleteData(id) {
    xhr.open("DELETE", url + `/${id}`);
    xhr.send();
}

// GET all http://localhost:3000/data/
// GET detail http://localhost:3000/data/:id
// POST http://localhost:3000/data dan data
// DELETE http://localhost:3000/data/:id
// PUT http://localhost:3000/data/:id dan data
