var restart=document.querySelector("#b");
console.log("congo");
var squares=document.querySelectorAll('td');

function clearboard() {
  for(var i=0;i<squares.length;i++){
      squares[i].textContent= '';}

}
restart.addEventListener('click',clearboard);

$("button").click(function(){
  // alert("The paragraph was clicked.");

    $("table").fadeToggle("slow");
    alert("Again press RESET to start the Game");
     // $("table").fadeOut();

});


function changetext() {
  if(this.textContent===""){
    this.textContent="X";
  }else if (this.textContent==="X"){
  this.textContent="O";
}
  else {
    this.textContent="";
  }

}
for (var i=0;i<squares.length;i++){
  squares[i].addEventListener("click",changetext);
}
