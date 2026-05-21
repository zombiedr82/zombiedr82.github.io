const game = document.getElementById("game");
const player = document.getElementById("player");
const scoreText = document.getElementById("score");
const gameOverScreen = document.getElementById("gameOver");

let score = 0;
let gameRunning = true;

/* JUMP */
function jump(){

  if(player.classList.contains("jump")) return;

  player.classList.add("jump");

  setTimeout(()=>{
    player.classList.remove("jump");
  },700);
}

document.addEventListener("keydown",(e)=>{
  if(e.code === "Space"){
    jump();
  }
});

document.addEventListener("click",jump);

/* CREATE OBSTACLES */
function createObstacle(){

  if(!gameRunning) return;

  const obstacle = document.createElement("div");
  obstacle.classList.add("obstacle");

  game.appendChild(obstacle);

  let obstacleLeft = window.innerWidth;
  obstacle.style.left = obstacleLeft + "px";

  const move = setInterval(()=>{

    if(!gameRunning){
      clearInterval(move);
      return;
    }

    obstacleLeft -= 8;
    obstacle.style.left = obstacleLeft + "px";

    const playerBottom =
      parseInt(
        window.getComputedStyle(player)
        .getPropertyValue("bottom")
      );

    /* COLLISION */
    if(
      obstacleLeft < 160 &&
      obstacleLeft > 70 &&
      playerBottom < 220
    ){
      endGame();
    }

    /* REMOVE OBSTACLE */
    if(obstacleLeft < -100){
      clearInterval(move);
      obstacle.remove();

      score++;
      scoreText.innerText = "Score: " + score;
    }

  },20);

  const randomTime = Math.random() * 2000 + 1500;

  if(gameRunning){
    setTimeout(createObstacle, randomTime);
  }
}

/* GAME OVER */
function endGame(){

  gameRunning = false;

  gameOverScreen.style.display = "block";
}

/* RESTART */
function restartGame(){

  location.reload();
}

/* START GAME */
createObstacle();