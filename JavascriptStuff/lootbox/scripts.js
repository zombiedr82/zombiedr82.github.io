var lootBox = document.getElementById("lootbox")
var count_text =document.getElementById("common")
var count_text =document.getElementById("uncommon")
function rollLootbox(){
   number = Math.floor(Math.random() * 100);

   if (number < 50) {
      lootBox.innerHTML = "COMMON";
      lootBox.style.backgroundColor = "white";
   }

   else if (number < 75) {
      lootBox.innerHTML = "UNCOMMON";
      lootBox.style.backgroundColor = "blue";
   }
   else if (number < 90) {
      lootBox.innerHTML = "RARE";
      lootBox.style.backgroundColor = "gold";
   }
   else if (number < 99) {
      lootBox.innerHTML = "LEGENDARY";
      lootBox.style.backgroundColor = "orangered";
   }
   else {
      lootBox.innerHTML = "MYTHIC";
      lootBox.style.backgroundColor = "pink";
   }
}
function plusOne(){
   count = count + 1;
   document.getElementById("common").innerHTML = count;
   lootBox.style.backgroundColor = "white";
}

document.getElementById("roll").addEventListener("click", rollLootbox);
document.getElementById("common").addEventListener("click", plusOne);
