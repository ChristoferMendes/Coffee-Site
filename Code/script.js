const coffee = document.querySelector(".linkMain")
const bBadge = document.querySelector(".buttonBadge")

bBadge.innerHTML = 0;
var add = 0;

coffee.addEventListener("click", clicked);

function clicked(){


  if (add == 0){
    add = 1;
    var b = bBadge.innerHTML = add;

  }else{
    clickedTwice();
  }


}

function clickedTwice(){
  console.log("entered twice")
  add+= 1;

  bBadge.innerHTML = add;
}

