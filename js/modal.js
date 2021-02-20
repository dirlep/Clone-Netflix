var modal = document.getElementById("modal-div");

var btn = document.getElementById("modal-btn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
  $("html,body").css({"overflow":"hidden"});
}

span.onclick = function() {
  modal.style.display = "none";
  $("html,body").css({"overflow":"auto"});
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    $("html,body").css({"overflow":"auto"});
  }
}
