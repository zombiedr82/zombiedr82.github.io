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
      score_ = score _ + 1;
      result.innerHTML = "You chose answer 1";
   }
   else if (q1_a2.checked == true){
      score_ = score _ + 1;
      result.innerHTML = "You chose answer 2";
   }
   else if (q1_a3.checked == true){ 
      score_ = score _ + 1;
      result.innerHTML = "You chose answer 3";
   }
   else if (q1_a4.checked == true){
      score_ = score _ + 1;
      result.innerHTML = "You didn't choose anything"
   }
}
function check_q2(){
   
}

submit_button.addEventListener("click", check_q1);

