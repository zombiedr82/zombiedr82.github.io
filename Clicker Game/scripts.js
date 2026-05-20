var cookie = document.getElementById("cookie");
var cookieCount = document.getElementById("cookieCount");
var numCookies = 0
var cookiePerClick = 1

cookieCount.innerHTML = "0 Cookies";

function clickCookie(){
    numCookies = numCookies + cookiePerClick;
    cookieCount.innerHTML = numCookies.toString() + " Cookies";
}

cookie.addEventListener("click", clickCookie);