const ball = document.getElementById("ball");
let mouseX = 0, mouseY = 0;
let ballX = 0, ballY = 0;
const speed = 0.08; //lowers the ball

document.addEventListener("mousemove",(e) => {
    mouseX = e.pageX - 15;
    mouseY = e.pageY - 15;
});
function animated(){
    ballX += (mouseX - ballX) * speed;
    ballY += (mouseY - ballY) * speed;

    ball.style.left = ballX + "px";
    ball.style.top = ballY + "px";

    requestAnimationFrame(animated);
}
animated();


// AUTO WRITEUP BEGINS HERE

const texts = [
  "I love turning ideas into interactive designs.",
  " I'm focused on growth, impact, and clean code."
];

const speeds = 70;
const pauseAfterAll = 2000;

let textIndex = 0;
let charIndex = 0;
let output = "";

function typeEffect() {
  const el = document.getElementById("typeText");

  if (charIndex < texts[textIndex].length) {
    output += texts[textIndex].charAt(charIndex);
    el.innerHTML = output;
    charIndex++;
    setTimeout(typeEffect, speeds);
  } 
  else {
    output += "<br>";
    el.innerHTML = output;

    textIndex++;
    charIndex = 0;

    if (textIndex === texts.length) {
      setTimeout(() => {
        output = "";
        textIndex = 0;
        el.innerHTML = "";
        typeEffect();
      }, pauseAfterAll);
    } else {
      setTimeout(typeEffect, speeds);
    }
  }
}

typeEffect();


