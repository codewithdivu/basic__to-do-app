var arr = [];
let isEdit = "";

// storing in localStorage
window.onload = () => {
  let localtodo = localStorage.getItem("key")
    ? JSON.parse(localStorage.getItem("key"))
    : "";
  if (localtodo) {
    arr = localtodo;
    mapTodos();
  }
};

// Adding Item in List

function add() {
  if (isEdit) {
    let editedInputValue = document.getElementById("input").value;
    arr.forEach((element) => {
      if (element.id == isEdit) {
        element.id = Date.now();
        element.text = editedInputValue;
      }
    });
    localStorage.setItem("key", JSON.stringify(arr));
    mapTodos();
    document.getElementById("input").value = "";
    document.getElementById("btn").innerHTML = "Add";
    isEdit = "";
  } else {
    let li = document.createElement("li");
    let inputValue = document.getElementById("input").value;
    let text = document.createTextNode(inputValue);
    li.appendChild(text);

    let obj = {};

    if (inputValue == "") {
      alert("please write something");
    } else {
      arr.push({
        id: Date.now(),
        text: inputValue,
      });
    }
    localStorage.setItem("key", JSON.stringify(arr));
    mapTodos();
    document.getElementById("input").value = "";
    document.getElementById("input").focus();
  }
}

// Edit item in list

const edittodo = (id) => {
  console.log("editId", id);
  let editText = arr.filter((item) => item.id == id)[0].text;
  document.getElementById("input").value = editText;
  document.getElementById("btn").innerHTML = "Update";
  isEdit = id;
  document.getElementById("input").focus();
};

// Delete item in list

const deletetodo = (id) => {
  const filteredPeople = arr.filter((item) => item.id !== id);
  arr = filteredPeople;
  localStorage.setItem("key", JSON.stringify(arr));
  mapTodos();
};

// displaying a list

function mapTodos() {
  document.getElementById("myul").innerHTML = "";
  arr.length > 0 &&
    arr.map((item) => {
      document.getElementById("myul").innerHTML += `
            <div class='d-flex  align-items-center' id='content'>
            <li>${item.text}</li>
            <div>
            <button  id="edit" class="btn btn-success m-2" onclick="edittodo(${item.id})">Edit</button>
            <button  id="delte" class="btn btn-danger m-2" onclick="deletetodo(${item.id})">X</button>
            </div>
            </div>`;
    });
}
