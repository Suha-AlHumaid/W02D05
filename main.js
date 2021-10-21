let toDos = [
  { name: "wake up", isComplet: false },
  { name: "coffee", isComplet: true },
  { name: "code", isComplet: false },
];

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

  toDos.forEach((elem, i) => {
    if (index === i) {
      elem.isComplet = !elem.isComplet;
    }
  });

  randerList();
}

const notCometedtask = () => {
  const result = toDos.filter((elem) => elem.isComplet === false);
  toDos = result;
  randerList();
};
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
const update1 = (index) => {
  // console.log("upadte");
  // console.log( $(`#${index}`));
  $(`#${index}`).html(` <li><input type="text" name="input" id="input${index}" placeholder="type your new list..."></li>`);

  const name = $(`#input${index}`).val();
  const value = { name: name, isComplet: false };
  console.log("new vlue", name);
  if (name.length && name.trim().length) {
    toDos.splice(index, 1, value);
    console.log(value);
  }
  randerList();
};

const randerList = () => {
  $("ul").html("");
  toDos.forEach((elem, index) => {
    $("ul").append(
      ` <li id=${index} class="myClass">${elem.name}</li><div><button class="btnli" id="upd${index}">Update</button><button class="btnli" id="del${index}")>Delete</button></div>`
    );
    $(`#${index}`).on("click", () => editFunc(index));

    if (elem.isComplet === false) {
      $(`#${index}`).removeClass("myClass");
    }

    $(`#del${index}`).on("click", () => delete1(index));
    $(`#upd${index}`).on("click", () => update1(index));
  });
  count();
};

$("#clearCompltedList").on("click", notCometedtask);
randerList();
