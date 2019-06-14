function createMadLib(adv, verb1, verb2, noun1, noun2, noun3) {
	var madLibContent = {
		adv: adv,
		verb1: verb1,
		verb2: verb2,
		noun1: noun1,
		noun2: noun2,
		noun3: noun3
	};
	var contentHTML = Handlebars.templates.madLibs(madLibContent);
	var madLibContainer = document.getElementsByClassName('madlib-container')[0];
	madLibContainer.insertAdjacentHTML('beforend', madLibContentHTML);
}

function insertNewMadLib(adv, verb1, verb2, noun1, noun2, noun3) {
	createMadLib(adv, verb1, verb2, noun1, noun2, noun3);
}

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

var starwarsButton = document.getElementById('starWars-Button');
var starwarsModal = document.getElementById('starWars-modal');
starwarsButton.addEventListener('click', function(event){
    starwarsModal.classList.toggle('hidden');
    modal.classList.toggle('hidden');
    var textInputs = document.getElementsByTagName('textarea');
    for(var i = 0; i < textInputs.length; i++){
      textInputs[i].value = "";
    }
});

var starWarsGlobalCancel = document.getElementById('star-wars-modal-close-button');
starWarsGlobalCancel.addEventListener('click', function(event){
    starwarsModal.classList.toggle('hidden');
    modal.classList.toggle('hidden');
});

var starWarsCancelButton = document.getElementById('star-wars-modal-cancel-button');
starWarsCancelButton.addEventListener('click', function(event){
    starwarsModal.classList.toggle('hidden');
    modal.classList.toggle('hidden');
});

var starWarsAccept = document.getElementById("star-wars-modal-accept-button");
starWarsAccept.addEventListener('click', function(event){
  var verb1 = document.getElementById('SVERB1');
  var verb2 = document.getElementById('SVERB2');
  var noun1 = document.getElementById('SNOUN1');
  var noun2 = document.getElementById('SNOUN2');
  var noun3 = document.getElementById('SNOUN3');
  var adj1 = document.getElementById('SADJ1');

  var noun42 = document.getElementById('SNOUN4-2');

  var textArea = document.getElementsByTagName('textarea');

  verb1.innerHTML = textArea[0].value;
  verb2.innerHTML = textArea[1].value;
  noun1.innerHTML = textArea[2].value;
  noun2.innerHTML = textArea[3].value;
  noun3.innerHTML = textArea[4].value;
  adj1.innerHTML = textArea[5].value;

  if(textArea[0].value == '' || textArea[1].value == '' || textArea[2].value == '' || textArea[3].value == '' || textArea[4].value == '' || textArea[5].value == '') {
 		 alert('Please enter all the words into the text boxes or hit cancel to exit.');
   }
  else {
    var swtext = document.getElementById('star-wars-text');
    var sptext = document.getElementById('special-text');

    if(swtext.classList == 'hidden'){
      swtext.classList.toggle('hidden');
    }
    if(sptext.classList != 'hidden'){
      sptext.classList.toggle('hidden');
    }
 	modal.classList.toggle('hidden');
 	starwarsModal.classList.toggle('hidden');
  }
});

var specialButton = document.getElementById('special-Button');
var specialModal = document.getElementById('specialModal');
specialButton.addEventListener('click', function(event){
    specialModal.classList.toggle('hidden');
    modal.classList.toggle('hidden');
    var textInputs = document.getElementsByTagName('textarea');
    for(var i = 0; i < textInputs.length; i++){
      textInputs[i].value = "";
    }
});

var specialGlobalCancel = document.getElementById('special-modal-close-button');
specialGlobalCancel.addEventListener('click', function(event){
    specialModal.classList.toggle('hidden');
    modal.classList.toggle('hidden');
});

var specialCancelButton = document.getElementById('special-modal-cancel-button');
specialCancelButton.addEventListener('click', function(event){
    specialModal.classList.toggle('hidden');
    modal.classList.toggle('hidden');
});

var specialCreateButton = document.getElementById('special-modal-accept-button');
specialCreateButton.addEventListener('click', function(event) {
  var rverb1 = document.getElementById('RVERB1');
  var rverb2 = document.getElementById('RVERB2');
  var rnoun1 = document.getElementById('RNOUN1');
  var rnoun2 = document.getElementById('RNOUN2');
  var rnoun3 = document.getElementById('RNOUN3');
  var radj1 = document.getElementById('RADJECTIVE1');

  var rtextArea = document.getElementsByTagName('textarea');

  rverb1.innerHTML = rtextArea[6].value;
  rverb2.innerHTML = rtextArea[7].value;
  rnoun1.innerHTML = rtextArea[8].value;
  rnoun2.innerHTML = rtextArea[9].value;
  rnoun3.innerHTML = rtextArea[10].value;
   radj1.innerHTML = rtextArea[11].value;

 if(rtextArea[6].value == '' || rtextArea[7].value == '' || rtextArea[8].value == '' || rtextArea[9].value == '' || rtextArea[10].value == '' || rtextArea[11].value == '') {
		 alert('Please enter all the words into the text boxes or hit cancel to exit.');
  }
 else {
   var swtext = document.getElementById('star-wars-text');
   var sptext = document.getElementById('special-text');

   if(swtext.classList != 'hidden'){
     swtext.classList.toggle('hidden');
   }
   if(sptext.classList == 'hidden'){
     sptext.classList.toggle('hidden');
   }
	modal.classList.toggle('hidden');
	specialModal.classList.toggle('hidden');
 }
});
