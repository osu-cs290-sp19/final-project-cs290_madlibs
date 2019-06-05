var modal = document.getElementById("modal-backdrop");
var verbButton = document.getElementById("verb-Button");
var verbModal = document.getElementById("verb-modal");
var verbCloseButton = document.getElementById('close-verb-button');

var nounButton = document.getElementById("noun-Button");
var nounModal = document.getElementById("noun-modal");
var nounCloseButton = document.getElementById('close-noun-button');

var adjButton = document.getElementById("adj-Button");
var adjModal = document.getElementById("adj-modal");
var adjCloseButton = document.getElementById('close-adj-button');

var proButton = document.getElementById("pro-Button");
var proModal = document.getElementById("pro-modal");
var proCloseButton = document.getElementById('close-pro-button');

var advButton = document.getElementById("adv-Button");
var advModal = document.getElementById("adv-modal");
var advCloseButton = document.getElementById('close-adv-button');

// Open verb
verbButton.addEventListener('click', function(event){
  verbModal.classList.toggle('hidden');
  modal.classList.toggle('hidden');
});

verbCloseButton.addEventListener('click', function(event){
  verbModal.classList.toggle('hidden');
  modal.classList.toggle('hidden');
});

//noun button
nounButton.addEventListener('click', function(event){
  nounModal.classList.toggle('hidden');
  modal.classList.toggle('hidden');
});

nounCloseButton.addEventListener('click', function(event){
  nounModal.classList.toggle('hidden');
  modal.classList.toggle('hidden');
});

//adj button
adjButton.addEventListener('click', function(event){
  adjModal.classList.toggle('hidden');
  modal.classList.toggle('hidden');
});

adjCloseButton.addEventListener('click', function(event){
  adjModal.classList.toggle('hidden');
  modal.classList.toggle('hidden');
});

//pro button
proButton.addEventListener('click', function(event){
  proModal.classList.toggle('hidden');
  modal.classList.toggle('hidden');
});

proCloseButton.addEventListener('click', function(event){
  proModal.classList.toggle('hidden');
  modal.classList.toggle('hidden');
});

//adv button
advButton.addEventListener('click', function(event){
  advModal.classList.toggle('hidden');
  modal.classList.toggle('hidden');
});

advCloseButton.addEventListener('click', function(event){
  advModal.classList.toggle('hidden');
  modal.classList.toggle('hidden');
});

var starwarsButton = document.getElementById('starWars-Button');
var starwarsModal = document.getElementById('starWars-modal');
starwarsButton.addEventListener('click', function(event){
    console.log('cows');
    starwarsModal.classList.toggle('hidden');
    console.log('log');
    modal.classList.toggle('hidden');
});





// OPENS THE VERB MODAL WHEN THE VERB BUTTON IS CLICKED
// var verbButton = document.getElementById('verb-button');
// var verbModal = document.getElementById('open-modal-verb');
// var nounModal = document.getElementById('open-modal-noun');
// var backdrop = document.getElementById('modal-backdrop');
// verbButton.addEventListener('click', function(event) {
//     modal.classList.toggle('hidden');
//     backdrop.classList.toggle('hidden');
// });
//
// // CLOSES THE VERB MODAL WHEN THE CLOSE-VERB BUTTON IS CLICKED
// var closeVerbButton = document.getElementsByClassName('modal-verb-button')[0];
// closeVerbButton.addEventListener('click', function(event){
//     modal.classList.toggle('hidden');
//     backdrop.classList.toggle('hidden');
// });
//
// // OPENS THE NOUN MODAL WHEN THE NOUN BUTTON IS CLICKED
// var nounButton = document.getElementById('noun-button');
// var modal = document.getElementById('open-modal-noun');
// var backdrop = document.getElementById('modal-backdrop');
// nounButton.addEventListener('click', function(event) {
//     modal.classList.toggle('hidden');
//     backdrop.classList.toggle('hidden');
// });
//
// // CLOSES THE NOUN MODAL WHEN THE NOUN BUTTON IS CLICKED
// var closeNounButton = document.getElementsByClassName('modal-noun-button')[0];
// closeNounButton.addEventListener('click', function(event){
//     modal.classList.toggle('hidden');
//     backdrop.classList.toggle('hidden');
// });
