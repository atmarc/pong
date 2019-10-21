var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

document.onkeydown = logKey;
var frameNo = 0;

function logKey(e) {
    if (e.key == "ArrowUp") {
        player1.Ypos -= 20;
    }
    else if (e.key == "ArrowDown") {
        player1.Ypos += 20;
    }
}
var mouseDown = false;
document.onmousemove = mouseMove;
document.onmousedown = () => mouseDown = true;
document.onmouseup = () => mouseDown = false;

function mouseMove (e) {
    if (e.clientY - 50 > 10 && e.clientY + 50 < 590) {
        if (mouseDown) {
            player1.Ypos = e.clientY - 50;
            player2.Ypos = e.clientY - 50;
        }
    }
}

var player1 = {
    Xpos: 50,
    Ypos: 250,
    height: 100,
    width: 20
}
var player2 = {
    Xpos: 930,
    Ypos: 250,
    height: 100,
    width: 20
}

var ball = {
    Xpos: 500,
    Ypos: 300,
    radius: 15,
    speed: 10,
    show: true
}

var rand = Math.random();
var direction = {x: rand, y: 1 - rand};

var sentit = Math.random();
if (sentit < 0.25) direction.x *= -1;
if (sentit > 0.25 && sentit < 0.5) direction.y *= -1;
if (sentit > 0.5 && sentit < 0.75) { 
    direction.y *= -1; 
    direction.x *= -1;
}

function update () {
    frameNo += 1;

    ctx.fillStyle = "black";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = "white";
    ctx.fillRect(player1.Xpos, player1.Ypos, player1.width, player1.height);
    ctx.fillRect(player2.Xpos, player2.Ypos, player2.width, player2.height);

    moveBall();
    checkColisionWall();    
    checkColisionPlayer();

    if (ball.show) {
        ctx.fillStyle = "white";
        ctx.strokeStyle = "white";
    }
    else
        ctx.fillStyle = "red";

        ctx.beginPath();
        ctx.arc(ball.Xpos, ball.Ypos, ball.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
}

function moveBall () {
    ball.Xpos += ball.speed * direction.x
    ball.Ypos += ball.speed * direction.y
}

function checkColisionWall () {
    if (ball.Ypos + ball.radius >= canvas.height) {
        direction.y *= -1
    } 
    else if (ball.Ypos - ball.radius <= 0) {
        direction.y *= -1
    } 
}

function checkColisionPlayer () {
    if (ball.Xpos - ball.radius <= player1.Xpos + player1.width &&
    ball.Xpos >= player1.Xpos + player1.width) {
        if (ball.Ypos + ball.radius >= player1.Ypos &&  ball.Ypos - ball.radius <= player1.Ypos + player1.height) {
            direction.x *= -1;
        }
    }
    else if (ball.Xpos + ball.radius >= player2.Xpos && ball.Xpos <= player2.Xpos) {
        if (ball.Ypos + ball.radius >= player2.Ypos &&  ball.Ypos - ball.radius <= player2.Ypos + player2.height) {
            direction.x *= -1;
        }
    }    
}

function everyinterval(n) {
    if ((frameNo / n) % 1 == 0) {
        return true;
    }
    return false;
}

setInterval(update, 20);