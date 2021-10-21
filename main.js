const toDos = [
    {name: "wake up", isComplet: false} ,
    {name: "coffee", isComplet: false} ,
    {name: "code", isComplet: false} ];

function addFunc () {
const name =$("#newItemFeild").val();

const value ={ name: name ,
    isComplet:false };
    console.log(value.name);
if (name.length && name.trim().length)
{
toDos.push(value);
console.log(value);
$("ul").html("");
randerList();}
}
$("#addBtn").on("click",addFunc);

function clearFunc() {
    console.log("clear btn");
    // toDos.splice(0, toDos.length);
    toDos.length= 0 ;
    // toDos = [];
    console.log(toDos.length);
    randerList();
  }
  $("#clearList").on("click",clearFunc);
 
//   function editFunc(index) {
//     const element = prompt("Please enter updated list", "");
//     toDos.splice(index, 1, element);
//     randerList();
//   }

//   $("#li1").on("click",() => editFunc(index));

  const randerList = () => {
    $("ul").html("");
    toDos.forEach ((elem,index) => {
       $("ul").append(`<li>${elem.name}</li>`);
});
};
    // const notCometedtask =toDos.filter (function(elem){
    //     return elem.isComplet ===false;
    // });

    // $("listHolder").append(`<li>${toDos.name}</li>`);

    //   deleteBtn.addEventListener("click", () => delFunc(index));
    //   $("#newItemFeild").on("click", () => editFunc(index));

  
    randerList();


