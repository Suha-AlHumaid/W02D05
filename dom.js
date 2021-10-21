const body = document.querySelector("body"); 
body.classList.add("container");

body.classList.add("d-flex");
body.classList.add("flex-column");
body.classList.add("flex-md-column");
body.classList.add("bg-light");
// body.classList.add("m-0");
body.classList.add("mt-5");
body.classList.add("w-50");
body.classList.add("p-3");
body.classList.add("h4");


// body.style.margin= "0 auto";
// body.style.boxSizing="border-box";
// body.style.width="50%"
//@@@@@@@@@@@class//to select the body
const header1 = document.createElement("h1"); //create h1 (header)
header1.classList.add("text-center");
header1.classList.add("text-uppercase");
header1.classList.add("input-group");
header1.classList.add("h1");
header1.innerHTML = " To Do List"; //add content in h1
header1.classList.add("row")

header1.id="row1"
const uList = document.createElement("ul"); // create an unorder list
uList.id = "uList";
//@@@@@@@@@@class unorderlist
uList.classList.add("list-group");
// uList.classList.add("list-group-flush");
//@@@@@@@@@@@class h1
body.append(header1); //to append in body parent.append(element)
body.append(uList);

const toDos = ["wake up", "eat breakfast", "code"];


// localStorage.setItem('toDos', JSON.stringify(toDos));
// console.log(JSON.parse(localStorage.getItem('toDos')));
// console.log(Object.keys(toDos));
// console.log(Object.values(toDos));

const addToList = () => {
  const textField = document.querySelector("#textField");
  textField.classList.add("lead");
  let textValue = textField.value;

  toDos.push(textValue);
  randerList();
};

const text = document.createElement("INPUT");
text.id = "textField";
//@@@@@@@@@@@class text field
// text.classList.add("col-md-2");
text.classList.add("form-control");
text.classList.add("input-group");
text.setAttribute("type", "text");
body.append(text);
const add = document.createElement("INPUT");
// add.setAttribute("col-md-22");
add.setAttribute("type", "button");
add.setAttribute("value", "Add");
//@@@@@@@@@@@class add btn
add.classList.add("btn");
add.classList.add("btn-secondary");
add.classList.add("input-group");
// add.classList.add("row");
body.append(add);
add.addEventListener("click", addToList);

// Delete function
function delFunc(index) {
  toDos.splice(index, 1);
  randerList();
}

//Edit function
function editFunc(index) {
  const element = prompt("Please enter updated list", "");
  toDos.splice(index, 1, element);
  randerList();
}

const randerList = () => {
  //Display list
  const liElements = document.querySelector("#uList");
  liElements.innerHTML = "";
  toDos.forEach((elem, index) => {
    let liList = document.createElement("li");
    //@@@@@@@@@@@class list 
    liList.classList.add("list-group-item");
    liList.style.marginTop= "10px"
    liList.id = index;
    liList.innerHTML = elem;
    liElements.append(liList);

    //delete btns
    // const deleteBtn = document.createElement("button")
    // deleteBtn.innerHTML="Delete";
    const deleteBtn = document.createElement("INPUT");
    deleteBtn.setAttribute("type", "button");
    deleteBtn.setAttribute("value", "Delete");
    //@@@@@@@@@@@class delete btn btn btn-danger
    deleteBtn.classList.add("btn");
    deleteBtn.classList.add("btn-default");
    deleteBtn.classList.add("m-3");
    deleteBtn.id = "delBtn";
    deleteBtn.addEventListener("click", () => delFunc(index));
    liList.append(deleteBtn);

    //edit btns

    const editBtn = document.createElement("INPUT");
    editBtn.setAttribute("type", "button");
    editBtn.setAttribute("value", "Edit");
    // editBtn.classList.add("m-5");
    //@@@@@@@@@@@class edit btn btn btn-success

editBtn.classList.add("btn");
editBtn.classList.add("btn-default");
    editBtn.id = "editBtn";

    editBtn.addEventListener("click", () => editFunc(index));
    liList.append(editBtn);
  });
};
randerList();

// const body = document.querySelector("body"); 
// const header1 = document.createElement("h1"); 
// header1.id="row1"
// const uList = document.createElement("ul"); // create an unorder list
// uList.id = "uList";
// body.append(header1); //to append in body parent.append(element)
// body.append(uList);

// const toDos = ["wake up", "eat breakfast", "code"];
// const addToList = () => {
//     const textField = document.querySelector("#textField");
//     textField.classList.add("lead");
//     let textValue = textField.value;
  
//     toDos.push(textValue);
//     randerList();
//   };
//const text = document.createElement("INPUT");
//text.id = "textField";
//text.setAttribute("type", "text");
// body.append(text);
// const add = document.createElement("INPUT");
// add.setAttribute("type", "button");
// add.setAttribute("value", "Add");
// body.append(add);
// add.addEventListener("click", addToList);

// function delFunc(index) {
//     toDos.splice(index, 1);
//     randerList();
//   }
// function editFunc(index) {
//     const element = prompt("Please enter updated list", "");
//     toDos.splice(index, 1, element);
//     randerList();
//   }


// const randerList = () => {

    // const liElements = document.querySelector("#uList");
    // liElements.innerHTML = "";
    // toDos.forEach((elem, index) => {
    //   let liList = document.createElement("li");
    //   liList.id = index;
    //   liList.innerHTML = elem;
    //   liElements.append(liList);
  

    //   const deleteBtn = document.createElement("INPUT");
    //   deleteBtn.setAttribute("type", "button");
    //   deleteBtn.setAttribute("value", "Delete");


    //   deleteBtn.id = "delBtn";
    //   deleteBtn.addEventListener("click", () => delFunc(index));
    //   liList.append(deleteBtn);
  

  
    //   const editBtn = document.createElement("INPUT");
    //   editBtn.setAttribute("type", "button");
    //   editBtn.setAttribute("value", "Edit");
  
//   editBtn.classList.add("btn");
//   editBtn.classList.add("btn-default");
//       editBtn.id = "editBtn";
  
//       editBtn.addEventListener("click", () => editFunc(index));
//       liList.append(editBtn);
//     });
//   };
//   randerList();
