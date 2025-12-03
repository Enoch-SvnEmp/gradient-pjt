var body = document.getElementById("bd");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

 
function settingsnow() {
    body.style.backgroundImage = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")"; 
}

color1.addEventListener("input", settingsnow);
color2.addEventListener("input", settingsnow);
     