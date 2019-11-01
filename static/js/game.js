var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;

// canvas.requestFullscreen();

if (window.innerHeight < 600) {
    canvas.height = window.innerHeight;
}
else {
    canvas.height = 600; 
}

const unitY = parseFloat(canvas.height) / 600.0;
const unitX = parseFloat(canvas.width) / 1000.0;

function mobilecheck () {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
}

var isMobile = mobilecheck();

function mouseMove (e) {
    if (e.clientY - 50 * unitY > 10 * unitY && e.clientY + 50 * unitY < 590 * unitY) {
        player1.Ypos = e.clientY - 50 * unitY;
        player2.Ypos = e.clientY - 50 * unitY;
    }
}


function touchMove (e) {
    e.preventDefault();
    //axios.post('http://192.168.1.151:3000/missatge', {data: e.touches[0].clientY});
    var Y = e.touches[0].clientY;
    var X = e.touches[0].clientX;

    if (Y - 50 * unitY > 10 * unitY && Y + 50 * unitY < 590 * unitY) {
        player1.Ypos = Y - 50 * unitY;
        player2.Ypos = Y - 50 * unitY;
    }
}

function onClick (e) {
    if (startGameText) startGameText = false;
}

if (isMobile) {
    document.ontouchmove = touchMove;
}
else {
    document.onmousemove = mouseMove;
}

document.onclick = onClick;

var player1 = {
    Xpos: 50 * unitX,
    Ypos: 250 * unitY,
    height: 100 * unitY,
    width: 20 * unitX
}
var player2 = {
    Xpos: 930 * unitX,
    Ypos: 250 * unitY,
    height: 100 * unitY,
    width: 20 * unitX
}
var ball = {
    Xpos: 500 * unitX,
    Ypos: 300 * unitY,
    radius: 15 * unitX,
    speed: {x:10 * unitX, y: 10 * unitY},
    show: true
}


function reset () {
    ball.Xpos = 500 * unitX;
    ball.Ypos = 300 * unitY;
    
    player1.Xpos = 50 * unitX;
    player1.Ypos = 250 * unitY;
    
    player2.Xpos = 930 * unitX;
    player2.Ypos = 250 * unitY;
}


function randomDireccio () {
    rand = Math.random();
    direction = {x: rand, y: 1 - rand};

    if (direction.x < 0.5) direction.x += 0.5;
    if (direction.y < 0.25) direction.y += 0.25;
    
    sentit = Math.random();
    if (sentit < 0.25) direction.x *= -1;
    if (sentit > 0.25 && sentit < 0.5) direction.y *= -1;
    if (sentit > 0.5 && sentit < 0.75) { 
        direction.y *= -1; 
        direction.x *= -1;
    }
}

var rand, direction, sentit;
randomDireccio();

var frameNo = 0;
var marcador1 = 0;
var marcador2 = 0;
var startGameText = false;

function update () {
    frameNo += 1;
    
    ctx.fillStyle = "black";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = "white";
    ctx.fillRect(player1.Xpos, player1.Ypos, player1.width, player1.height);
    ctx.fillRect(player2.Xpos, player2.Ypos, player2.width, player2.height);
    
    if (ball.show) {
        ctx.fillStyle = "white";
        ctx.strokeStyle = "white";
    }
    else
    ctx.fillStyle = "red";
    
    ctx.font = "30px Arial";
    ctx.textAlign = "center";    

    if (startGameText) {
        ctx.fillText("Click to play", 500 * unitX, 300 * unitY);
    }
    else {
        moveBall();
        checkColisionWall();    
        checkColisionPlayer();
        checkGoal();
        drawBall();
    }

    ctx.fillText("Score: " + marcador1, 70 * unitX, 50 * unitY);
    ctx.fillText("Score: " + marcador2, 930 * unitX, 50 * unitY);
}

function drawBall () {
    ctx.beginPath();
    ctx.arc(ball.Xpos, ball.Ypos, ball.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}

function moveBall () {
    ball.Xpos += ball.speed.x * direction.x
    ball.Ypos += ball.speed.y * direction.y
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

function checkGoal () {
    if (ball.Xpos >= canvas.width) {
        reset();
        ++marcador1;
        randomDireccio();
        startGameText = true;
    } 
    else if (ball.Xpos <= 0) {
        reset();
        ++marcador2;
        startGameText = true;
        randomDireccio();
    }
}

function everyinterval(n) {
    if ((frameNo / n) % 1 == 0) {
        return true;
    }
    return false;
}

setInterval(update, 20);