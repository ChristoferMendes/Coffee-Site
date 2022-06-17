
//-------------Smooth intern transition----------------//

function smoothScroll(target, duration){
  var t = document.querySelector(target);
  var tPosition = t.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = tPosition - startPosition;
  var startTime = null;


  function animation(currentTime){
    if(startTime === null){startTime = currentTime}

    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration)
    window.scrollTo(0, run);
    if(timeElapsed < duration){requestAnimationFrame(animation)}

  }

  function ease(t, b, c, d){
    t /= d / 2;
    if (t < 1) {return  c/2 * t * t + b}
    t--;
    return -c/2 * (t *(t - 2) -1) +b;
  }

  requestAnimationFrame(animation);

  console.log(startPosition)
}

let menu = document.querySelector(".menu");

menu.addEventListener("click", function(){

  smoothScroll(".menuDescription", 1000);
});


smoothScroll(".box1", 1000);


// let b = new Background("");
// b.colorSet = "blue";
// // b.colorSet = BiggerBoxColor;
// console.log(b.colorGet)

// coldBox.style.background = b.colorGet;

//  display: inline-block;
//   width: 10rem;
//   height: 10rem;
//   background-color: #50301E;
//   /* color:white; */
//   border-radius: 15px;
//   margin-left: 10px;