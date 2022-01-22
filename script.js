
var arr = [];

window.onload = () => {

    let localtodo = localStorage.getItem('key') ? JSON.parse(localStorage.getItem('key')) : '';
    if (localtodo) {
        arr = localtodo;
        mapTodos();
    }

}

function add() {
    // event.preventDefault();
    let li = document.createElement('li');
    let inputValue = document.getElementById('input').value;
    let text = document.createTextNode(inputValue);
    li.appendChild(text);

    let obj = {};

    if (inputValue == '') {
        alert('please write something');
    }
    else {
        // document.getElementById('myul').appendChild(li);
        arr.push({
            id: Date.now(),
            text: inputValue
        });
    }
    localStorage.setItem('key', JSON.stringify(arr));
    mapTodos();
    document.getElementById('input').value = '';
}

const deletetodo = (id) => {
    const filteredPeople = arr.filter((item) => item.id !== id);
    arr = filteredPeople;
    localStorage.setItem('key', JSON.stringify(arr));
    mapTodos();
}

function mapTodos() {
    document.getElementById('myul').innerHTML =
        '';
    arr.length > 0 &&
        arr.map(item => {
            document.getElementById('myul').innerHTML += `
            <div class='d-flex  align-items-center' id='content'>
            <li>${item.text}</li>
            <button  id="delte" class="btn btn-danger m-2" onclick="deletetodo(${item.id})">X</button>
            </div>`
        })

}