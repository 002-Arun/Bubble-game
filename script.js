
var timer = 30;
var score = 0;
let randomnumber;

function createBubble() {
  var bubble = "";
  for (var i = 1; i <= 253; i++) {
    var randomnum = Math.floor(Math.random() * 20);
    bubble += `<div class="bubble">${randomnum}</div>`;
  }
  document.querySelector(".pbtm").innerHTML = bubble;
}
function changeTimer() {
  setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector(".time").textContent = timer;
    }else if(timer === 0){
      document.querySelector(".pbtm").innerHTML = `<h1>GAME OVER <br> Your Score is ${score}</H1>`
    }
  }, 1000);
}
function getNewHit(){
  randomnumber = Math.floor(Math.random()*10)
  document.querySelector(".newhit").textContent = randomnumber;
}
function manageScore(){
  score += 10;
  document.querySelector(".scr").textContent = score;
}

document.querySelector(".pbtm").addEventListener("click" , function(value){
   let compare = Number(value.target.textContent)
   if(randomnumber === compare){
      manageScore()
      getNewHit()
      createBubble()
   }
})

getNewHit()
changeTimer();
createBubble();