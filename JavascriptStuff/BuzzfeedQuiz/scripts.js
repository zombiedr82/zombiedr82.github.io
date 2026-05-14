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
var score_Luca = 0;




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
}
function check_q1(){

   if (q2_a1.checked == true){
      score_Ilya = score_Ilya + 1;
      score_Cliff= score_Cliff + 1;
   }
   else if (q1_a2.checked == true){
      score_Bood = score_Bood + 1;
      score_Wyatt = score_Wyatt + 1;
	   score_Dallas = score_Dallas+ 1;
	   score_Yuna = score_Yuna + 1;
	   score_Hayden = score_Hayden + 1;
	   score_Cliff = score_Cliff + 1;
	   score_Jackie = score_Jackie + 1;
	   score_Svetlana = score_Svetlana + 1;
	   score_Rose = score_Rose + 1;
	   score_Alexie = score_Alexie + 1;
   }
   else if (q2_a3.checked == true){
	   score_Shane = score_Shane + 1;
	   score_Harris = score_Harris + 1;
	   score_Troy = score_Troy + 1;
	   score_Sasha = score_Sasha + 1;
	   score_Scott = score_Scott + 1;
	   score_Kip = score_Kip + 1;
	   score_Luca = score_Luca +1;
   }  
   else if (q2_a4.checked == true){
	score_Svetlana = score_Svetlana + 1;
	score_Rose = score_Rose + 1;
   }
   else if (q2_a5.checked == true){
	   score_Anya = score_Anya + 1;
	   score_Chiron = score_Chiron + 1;
	   score_Yuna = score_Yuna + 1;
	   score_Shane = score_Shane + 1;	
   }
}

function check_q3(){

   If (q3_a1.checked == true){
	   score_Ilya = score_Ilya + 1;
	   score_Dallas = score_Dallas + 1;
	   score_JJ = score_JJ + 1;
	   score_Cliff = score_Cliff + 1;
	   score_Alexie = score_Alexie + 1;
   }
   else if (q3_a2.checked == true){
	   score_Shane = score_Shane + 1;
	   score_Luca = score_Luca + 1;
	   score_Anya = score_Anya + 1;
      score_Chiron = score_Chiron + 1;
      score_Jackie = score_Jackie + 1;
      score_Svetlana = score_Svetlana + 1;
      score_Rose = score_Rose + 1;
      score_Harris = score_Harris + 1;
      score_Hayden = score_Hayden + 1;	
   }
   else if (q3_a2.checked == true){
	   score_Troy = score_Troy + 1;
   }
}

function check_q4(){
   
   If (q4_a1.checked == true){
	   score_Ilya = score_Ilya + 1;
	   score_Harris = score_Harris + 1;
	   score_Troy = score_Troy + 1;
	   score_Shane = score_Shane + 1;
	   score_Chiron = score_Chiron + 1;
	   score_Anya = score_Anya + 1;
	   score_Yuna = score_Yuna + 1;
	   score_JJ = score_JJ + 1;
	   score_Cliff = score_Cliff + 1;
	   score_Svetlana = score_Svetlana + 1;
	   score_Hayden = score_Hayden + 1;
	   score_Scott = score_Scott + 1;
	   score_Bood = score_Bood + 1;
	   score_Luca = score_Luca + 1;
   }
   else if (q4_a2.checked == true){
	   score_Jackie = score_Jackie + 1;
	   score_Shane = score_Shane + 1;
      score_Kip = score_Kip + 1;
      score_Yuna = score_Yuna + 1;
      score_Svetlana = score_Svetlana + 1;
      score_Rose = score_Rose + 1;
      score_Luca = score_Luca + 1;
   }
   else if (q4_a2.checked == true){
	   score_Alexie = score_Alexie + 1;
	   score_Sasha = score_Sasha + 1;
	   score_Dallas = score_Dallas + 1;
   }
}
function check_q5(){
   
   If (q5_a1.checked == true){
	   score_Ilya = score_Ilya + 1;
	   score_Shane = score_Shane + 1;
	   score_Troy = score_Troy + 1;
	   score_Bood = score_Bood + 1;
	   score_Wyatt = score_Wyatt + 1;
	   score_Dallas = score_Dallas + 1;
	   score_Harris = score_Harris + 1;
	   score_Yuna = score_Yuna + 1;
	   score_Anya = score_Anya + 1;
	   score_Chiron = score_Chiron+ 1;
	   score_Luca = score_Luca + 1;
	   score_svetlana = score_svetlana + 1;
   }
   else if (q5_a2.checked == true){
	   score_ = score_ + 1;
   }
   else if (q5_a2.checked == true){
	   score_Rose = score_Rose + 1;
	   score_Harris = score_Harris + 1;
	   score_Jackie = score_Jackie + 1;
   }

   else if (q5_a2.checked == true){
	   score_ = score_ + 1;
   }
}
function check_q6(){
   

}
function check_q7(){
   
   If (q7_a1.checked == true){
	   score_Ilya = score_Ilya + 1;
	   score_Shane = score_Shane + 1;
	   score_Hayden = score_Hayden + 1;
	   score_Bood = score_Bood+ 1;
	   score_Wyatt = score_Wyatt + 1;
	   score_Chiron = score_Chiron + 1;
	   score_Anya = score_Anya + 1;
	   score_Jackie = score_Jackie + 1;
   }

   else if (q7_a2.checked == true){
	   score_Dallas = score_Dallas + 1;
	   score_Alexie = score_Alexie + 1; 
   }
   else if (q7_a2.checked == true){
	   score_Harris = score_Harris + 1;
      score_Troy = score_Troy + 1;
      score_Harris = score_Harris + 1;
   }
   else if (q7_a5.checked == true){
	   score_Kip = score_ Kip + 1;
	   score_Scott = score_Scott + 1;
   }
}
function check_q8(){
   
   If (q8_a1.checked == true){
      score_ = score_ + 1;
   }
   else if (q8_a2.checked == true){
      score_ = score_ + 1;
   }
    else if (q8_a2.checked == true){
      score_ = score_ + 1;
   }
    else if (q8_a2.checked == true){
      score_ = score_ + 1;
   }
}
function check_q9(){
   
   If (q9_a1.checked == true){
      score_ = score_ + 1;
   }
   else if (q9_a2.checked == true){
      score_ = score_ + 1;
   }
    else if (q9_a2.checked == true){
      score_ = score_ + 1;
   }
    else if (q9_a2.checked == true){
      score_ = score_ + 1;
}
function check_q10(){
   
   If (q10_a1.checked == true){
      score_ = score_ + 1;
   }
   else if (q10_a2.checked == true){
      score_ = score_ + 1;
   }
    else if (q10_a2.checked == true){
      score_ = score_ + 1;
   }
    else if (q10_a2.checked == true){
      score_ = score_ + 1;

      function calculate_result(){

         let maxKey = "";
         let maxValue = -Infinity;

         for (const [key, value] of Object.entries(scores)) {
            if (value > maxValue) {
               maxValue = value;
               maxKey = key;
            }
         }

         if (maxKey == "score_Ilya"){
            
         }
         if (maxKey == "score_Shane"){

         }
         if (maxKey == "score_Scott"){

         }
         if (maxKey == "score_Kip"){

         }
         if (maxKey == "score_Bood"){

         }
         if (maxKey == "score_Wyatt"){

         }
         if (maxKey == "score_Dallas"){

         }
         if (maxKey == "score_Harris"){

         }
         if (maxKey == "score_Chiron"){

         }
         if (maxKey == "score_Anya"){

         }
         if (maxKey == "score_Yuna"){

         }
         if (maxKey == "score_Hayden"){

         }
         if (maxKey == "score_JJ"){

         }
         if (maxKey == "score_Cliff"){

         }
         if (maxKey == "score_Jackie"){

         }
         if (maxKey == "score_Svetlana"){

         }
         if (maxKey == "score_Rose"){

         }
         if (maxKey == "score_Sasha"){

         }
         if (maxKey == "score_Alexie"){

         }
         if (maxKey == "score_Troy"){

         }
         if (maxKey == "score_Luca"){

         }
      }
submit_button.addEventListener("click", check_q1);
