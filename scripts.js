var btn = document.getElementById("colorButton");

var colorCode = document.querySelector(".colorCode");

btn.addEventListener("click", mybtn, false);

function mybtn(){
    var colors = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.background = "#" + colors;
    colorCode.textContent = "#" + colors;
}