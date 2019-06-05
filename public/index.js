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

// function clearModal(label) {
//     document.getElementById(label). = "";
// }

// OPENS THE VERB MODAL WHEN THE VERB BUTTON IS CLICKED
var verbButton = document.getElementById('verb-button');
var modal = document.getElementById('open-modal');
var backdrop = document.getElementById('modal-backdrop');
verbButton.addEventListener('click', function(event) {
    modal.classList.toggle('hidden');
    backdrop.classList.toggle('hidden');
    console.log('I am here');
});

// CLOSES THE VERB MODAL WHEN THE CLOSE-VERB BUTTON IS CLICKED
var closeVerbButton = document.getElementsByClassName('modal-close-button')[0];
var verbLabel = document.getElementById('verb-definition');
closeVerbButton.addEventListener('click', function(event){
    modal.classList.toggle('hidden');
    backdrop.classList.toggle('hidden');
    verbLabel.innerHTML="";
});

var nounButton = document.getElementById('noun-button');
var modal = document.getElementById('open-modal');
var backdrop = document.getElementById('modal-backdrop');
nounButton.addEventListener('click', function(event) {
    modal.classList.toggle('hidden');
    backdrop.classList.toggle('hidden');
    console.log('I am here');
});

var closeNounButton = document.getElementsByClassName('modal-close-button')[0];
var nounLabel = document.getElementById('noun-definition');
closeNounButton.addEventListener('click', function(event){
    modal.classList.toggle('hidden');
    backdrop.classList.toggle('hidden');
    nounLabel.innerHTML="";
});


