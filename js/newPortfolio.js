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