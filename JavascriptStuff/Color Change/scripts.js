function changeRed(){
   document.body.style.backgroundColor = 'red'; 
}

function changeWhite(){
   document.body.style.backgroundColor = 'white'; 
}
function changeBlue(){
   document.body.style.backgroundColor = 'blue'; 
}
function changeGreen(){
   document.body.style.backgroundColor = 'green'; 
}
function changeYellow(){
   document.body.style.backgroundColor = 'yellow'; 
}
function changePink(){
   document.body.style.backgroundColor = 'pink'; 
}
function changeOrange(){
   document.body.style.backgroundColor = 'orange'; 
}

document.getElementById('color-change').addEventListener('mouseenter', changeRed);
document.getElementById('color-change').addEventListener('mouseleave', changeWhite);
document.getElementById('twocolor-change').addEventListener('click', changeBlue);
document.getElementById('threecolor-change').addEventListener('click', changeGreen);
document.getElementById('fourcolor-change').addEventListener('click', changeYellow);
document.getElementById('fivecolor-change').addEventListener('click', changePink);
document.getElementById('sixcolor-change').addEventListener('click', changeOrange);