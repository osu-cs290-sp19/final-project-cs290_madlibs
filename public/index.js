function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 

var button = document.getElementById('verb-button');
var modal = document.getElementById('open-verb-modal');
var backdrop = document.getElementById('modal-backdrop');
button.addEventListener('click', function(event) {
    modal.classList.toggle('hidden');
    backdrop.classList.toggle('hidden');
    console.log('I am here');
});