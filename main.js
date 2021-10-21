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

  toDos.forEach((elem,i) =>{
if(index === i)
{
elem.isComplet = !elem.isComplet;
}

  });

  // toDos = toDos.map((list,i) => { 
  //     return {...list, isComplet:!list.isComplet};
  // });
  // $(`#${index}`).append();
  randerList()
}

  // console.log("edit me");
  // console.log(index);
  // // const element = prompt("Please enter updated list", "");
  // toDos.splice(index, 1, `hhhh`);
  // randerList();

  const notCometedtask = () => {
 toDos.forEach((elem,index)=> {
  if (elem.isComplet===true){
    toDos.splice(index,1);
  }
 });
    randerList();
  };
  const count = () => {

$("#count").html(` ${toDos.length} `); };

const randerList = () => {
  $("ul").html("");
  toDos.forEach((elem, index) => {
    $("ul").append(`<li id=${index} class="myClass">${elem.name}</li>`);
    $(`#${index}`).on("click", () => editFunc(index));


if (elem.isComplet===false){
  $(`#${index}`).removeClass("myClass");
}
  });
  count();
};

$("#clearCompltedList").on("click", notCometedtask);
randerList();

