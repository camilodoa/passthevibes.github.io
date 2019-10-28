function opensharedlink(){
  var path = window.location.href;
  var start = path.indexOf("#a?=")

  function display(modal) {
    modal.style.display = "block";
  }

  // If url is querrying for a modal
  if (start != -1){
    var numModal = path.slice(start + 4, path.length)
    var modal = document.getElementById("modal" + numModal);
    if (modal !== null) {
      // Open modal
      display(modal)
    }
  }
}
