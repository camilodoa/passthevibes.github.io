// Get the modal
var modal7 = document.getElementById("modal7");

// Get the button that opens the modal
var btn7 = document.getElementById("modal7-b");

// Get the <span> element that closes the modal
var span7 = document.getElementById("close7");

// When the user clicks on the button, open the modal
btn7.onclick = function modal7display() {
  modal7.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span7.onclick = function() {
  modal7.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal7) {
    modal7.style.display = "none";
  }
}
