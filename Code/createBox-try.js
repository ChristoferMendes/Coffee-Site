/*

var params = [
  
    display = "inline-block",
    background = "50301E",
    w = "10rem",
    h = "10rem",
    borderRad = "15px",
    marginLeft = "20px",

]

console.log(params[0])



class Box {
  constructor(display, backColor, width, height, borderRad, marginLeft){
    this._display = display;
    this._backColor = backColor;
    this._width = width;
    this._height = height;
    this._borderRad = borderRad;
    this._marginLeft = marginLeft;
    
  }
}


    

 
// }

// function Reduce(){
//   this.n1 = n1;
//   let biggerBox = document.querySelector(".cold-0");

//   let r = biggerBox.style.n1 = "black";

//   return r;
// }

var biggerBox = document.querySelector(".cold-0");
// let rdx = new Reduce(`background`);
// console.log(rdx.info);


var newBox = new Box(`${params[0]}`, `${params[1]}`, `${params[2]}`,
`${params[3]}`, `${params[4]}`, `${params[6]}`)



var b = biggerBox.style;
var n = newBox;

b.dis = n._display,
b.background = n._backColor;
b.width = n._width,
b.height = n._height,
b.borderRadius = n._borderRad,
b.marginLeft = n._marginLeft,
b.position = "relative",
b.right = "20rem",
b.bottom = "0rem"
// Reduce();



// b.width = newBox._width;
// b.height = newBox._height;
// b.borderRadius = newBox._borderRad;
// b.marginLeft = newBox._marginLeft;
// b.position = "relative"
// b.right = "10rem"

console.log(newBox._width);


let newDiv0 = document.createElement("div");
let newCont = document.createTextNode("");
newDiv0.appendChild(newCont)

document.body.insertBefore(newDiv0, biggerBox)
newDiv0.style.display = "inline-block"
newDiv0.style.background = "orange";
newDiv0.style.position = "relative";
newDiv0.style.left = "3rem";
newDiv0.style.bottom = "-3rem";
// newDiv.style.background = newBox._backColor
newDiv0.style.width = newBox._width;
newDiv0.style.height = newBox._height;
newDiv0.style.borderRadius = newBox._borderRad;
newDiv0.style.backgroundImage = "url(./Images/chocolate-coffee.webp)"
newDiv0.style.backgroundSize = "100% 100%"
newDiv0.style.backgroundRepeat = "no-repeat"
newDiv0.style.border = "4px solid #50301E";

let newDiv1 = document.createElement("div");
let newCont1 = document.createTextNode("Chocolate Coffee");

newDiv1.appendChild(newCont1);

document.body.insertBefore(newDiv1, newDiv0)
newDiv1.style.display = "inline-block"
newDiv1.style.background = "orange";
newDiv1.style.position = "relative";
newDiv1.style.left = "25rem";
newDiv1.style.bottom = "6rem";
// newDiv.style.background = newBox._backColor
newDiv1.style.width = newBox._width;
newDiv1.style.height = newBox._height;
newDiv1.style.borderRadius = newBox._borderRad;

*/