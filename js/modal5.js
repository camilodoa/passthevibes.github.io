// Get the modal
var modal5 = document.getElementById("modal5");

// Get the button that opens the modal
var btn5 = document.getElementById("modal5-b");

// Get the <span> element that closes the modal
var span5 = document.getElementById("close5");

// When the user clicks on the button, open the modal
btn5.onclick = function modal5display() {
  modal5.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span5.onclick = function() {
  modal5.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
}
