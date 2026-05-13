var q1_a1 = document.getElementById("q1-a1");
var q1_a2 = document.getElementById("q1-a2");
var q1_a3 = document.getElementById("q1-a3");
var q1_4 = document.getElementById("q1-a4");

var result = document.getElementById("result");
var submit_button = document.getElementById("submit-button");


var score_Ilya = 0;
var score_Shane= 0;
var score_Scott = 0;
var score_Kip = 0;
var score_Bood = 0;
var score_Wyatt = 0;
var score_Dallas = 0;
var score_Harris = 0;
var score_Chiron = 0;
var score_Anya = 0;
var score_Yuna = 0;
var score_Hayden = 0;
var score_JJ = 0;
var score_Cliff = 0;
var score_Jackie = 0;
var score_Svetlana = 0;
var score_Rose = 0;
var score_Sasha = 0;
var score_Alexie = 0;
var score_Troy = 0;






function check_q1(){

   if (q1_a1.checked == true){
      score_scott = score_scott + 1;
   }
   else if (q1_a2.checked == true){
      score_Ilya = score_Ilya + 1;
      score_Shane = score_Shan + 1;
      score_Bood = score_Bood + 1;
      score_Wyatt = score_Wyatt + 1;
      score_Harris = score_Harris + 1;
      score_Chiron = score_Chiron + 1;
      score_Anya = score_Anya + 1;
      score_Troy = score_Troy + 1;
   }
   else if (q1_a3.checked == true){ 
      score_Shane = score_Shane + 1;
      score_Hayden = score_Hayden + 1;
      score_JJ = score_JJ + 1;
   }
   else if (q1_a4.checked == true){
      score_Ilya = score_Ilya + 1;
      score_Cliff = score_Cliff + 1;
}
function check_q2(){
   if (q1_a1.checked ==true){
      
   }
}
function check_q3(){
   
}
function check_q4(){
   
}
function check_q5(){
   
}
function check_q6(){
   
}
function check_q7(){
   
}
function check_q8(){
   
}
function check_q9(){
   
}
function check_q10(){
   
}
function check_q11(){
   
}
function check_q12(){
   
}
function check_q13(){
   
}

submit_button.addEventListener("click", check_q1);

