username_entry = document.getElementById("username-entry");
password_entry = document.getElementById("password-entry");
submit_button = document.getElementById("submit-button");
status_text = document.getElementById("status-text");


function checkCredentials(){

   if (username_entry.value == "admin" && password_entry.value == "admin"){
      status_text.innerHTML = "ACCESS GRANTED";
      status_text.style.color = "green";
   }

      else {
         status_text.innerHTML = "ACCESS DENIED Incorrect Username or password";
         status_text.style.color = "red";
      }

   }

submit_button.addEventListener("click", checkCredentials)

if(document.getElementById("username").value == "zoombiedrink" && document.getElementById("password").value == "1221Chiron"){