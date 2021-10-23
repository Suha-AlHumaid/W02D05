let toDos= [];
// localStorage.setItem("toDosJSON",JSON.stringify(toDos));
// const toDosc = localStorage.getItem(JSON.parse());
// console.log(toDosc);


function addFunc() {
  const name = $("#newItemFeild").val();

  const value = { name: name, isComplet: false };
  console.log(value.name);
  if (name.length && name.trim().length) {
    toDos.push(value);
    console.log(value);
    $("ul").html("");
    randerList();
  }
}
$("#addBtn").on("click", addFunc);

function clearFunc() {
  console.log("clear btn");
  // toDos.splice(0, toDos.length);
  toDos.length = 0;
  // toDos = [];
  console.log(toDos.length);
  randerList();
}
$("#clearList").on("click", clearFunc);

function editFunc(index) {
  //   console.log("edit me");
toDos[index].isComplet = !toDos[index].isComplet;
  // toDos.forEach((elem, i) => {
  //   if (index === i) {
  //     elem.isComplet = !elem.isComplet;
  //   }
  // });
  console.log(toDos[index].isComplet);
  randerList();
}

const notCometedtask = () => {
  const result = toDos.filter((elem) => elem.isComplet === false);
  console.log(result);
  toDos = result;
  randerList();
};

$("#clearCompltedList").on("click", notCometedtask);
const count = () => {
  let count = 0;
  const result = toDos.filter((elem) => elem.isComplet === true);
  count = result.length;
  $("#count").html(` ${count} `);
};
const delete1 = (index) => {
  // console.log("delete");
  toDos.splice(index, 1);
  randerList();
};
const changeList = (index) => {
  value = $(`#inputUpdate`).val();
    toDos[index].name = value;
    randerList()
};

const update1 = (elem, index) => {

  $(`#${index}`).html("");
  $(`#${index}`).append(
    `<li><input type="text" name="inputUpdate" id="inputUpdate" value="${elem.name}"></li>`
  );
  $(`#${index}`).on("change", () => changeList(index));
};
const inList = (index) => {
  $(`#upd${index}`).removeClass("a");
  $(`#del${index}`).removeClass("a");
};
const outList = (index) => {
  $(`#upd${index}`).addClass("a");
  $(`#del${index}`).addClass("a");
  // randerList();
};

/////////////////
const randerList = () => {
  $("ul").html("");
  toDos.forEach((elem, index) => {
    $("ul").append(
      `<li id=${index} class="list-group-item">
      <p class="myClass" id="p${index}">${elem.name}</p>
      <a href="#del${index}" id="del${index}" class="a"> Delete </a>
      <a href="#upd${index}" id="upd${index}" class="a"> Update</a></li>`
    );
    $(`#p${index}`).on("click", () => editFunc(index));
    if (elem.isComplet === false) {
      $(`#p${index}`).removeClass("myClass");
    }
    $(`#${index}`).hover(
      () => inList(index),
      () => outList(index)
    );
    $(`#del${index}`).on("click", () => delete1(index));
    $(`#upd${index}`).on("click", () => update1(elem, index));
   
  });
  count();
};


randerList();

