var a = document.getElementById("item");
function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

a.addEventListener("mouseover", function() {
  document.getElementById("overlay").style.backgroundImage = "url('imgs/filler.jpg')";
});

a.addEventListener("mouseout", function() {
  document.getElementById("overlay").style.backgroundImage = false;
});