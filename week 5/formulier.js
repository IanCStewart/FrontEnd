/**
 * @author Ian Stewart
 */

var theToggle = document.getElementById('toggle');

// based on Todd Motto functions
// http://toddmotto.com/labs/reusable-js/

// hasClass
function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
    	elem.className += ' ' + className;
    }
}
// removeClass
function removeClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
	if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
// toggleClass
function toggleClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

theToggle.onclick = function() {
   toggleClass(this, 'on');
   return false;
}

var invadeButton = document.getElementById('invade'); //get invade button
var spaceInvader = document.getElementById('spacer');

audio.loop = true;

function toggle(){ //get on/off invader status
	console.log("pressed invade!");
	spacer.classList.toggle("visible");
	var audio = document.getElementById("audio");
	if(audio.paused){
		audio.play();
	}else{
		audio.pause();
	}
}

invadeButton.addEventListener('click',toggle,false); //add click event to invade button

var slider = document.getElementById('cmn-toggle-1');
var sliders = document.getElementsByClassName('cmn-toggle');
var body = document.getElementsByTagName('body');

function colors(event){
	userChoice = event.target.id;
	console.log("slide button");
	if(userChoice == 'cmn-toggle-1'){
		console.log("grayscale");
		body[0].classList.toggle("grayscale");
		return;
	} if(userChoice == 'cmn-toggle-2'){
		console.log("invert");
		body[0].classList.toggle("invert");
		return;
	}if(userChoice == 'cmn-toggle-3'){
		console.log("sepia");
		body[0].classList.toggle("sepia");
		return;
	}if(userChoice == 'cmn-toggle-4'){
		console.log("saturation");
		body[0].classList.toggle("saturate");
		return;
	}if(userChoice == 'cmn-toggle-5'){
		console.log("blur");
		body[0].classList.toggle("blur");
		return;
	}
	else{
		console.log("no button pressed");
		return;
	}
}

sliders[0].addEventListener('click', colors);
sliders[1].addEventListener('click', colors);
sliders[2].addEventListener('click', colors);
sliders[3].addEventListener('click', colors);
sliders[4].addEventListener('click', colors);
