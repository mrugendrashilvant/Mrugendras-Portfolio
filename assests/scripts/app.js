
//acccessing all the images at first
let shape1 = document.getElementById('shape1');
let shape2 = document.getElementById('shape2');
let shape3 = document.getElementById('shape3');
let me = document.getElementById('me');
let id1 = 0;
let id2 = 0;

let hireme = document.getElementById('hireme');

//Starts animating firstpage when mouseover the section
function start() {
	id1 = setInterval(firstPage, 300);
}
function stop() {
	clearInterval(id1);
	clearInterval(id2);
}

//code for animating the firstpage
function firstPage() {
	let words = ["Coder", "Designer", "FrontEnd Developer", "BackEnd Developer", "Production Engineer", "React Developer"];
	let rand1 = Math.floor(Math.random() * 8);
	let rand2 = Math.floor(Math.random() * 360);
	let rand3 = Math.floor(Math.random() * 5);

	shape1.style.left = 800 + rand1 * ((-1) ** rand1) + "px";
	shape1.style.top = 80 + rand1 * ((-1) ** rand1) + "px";
	shape1.style.width = 7 + (rand1 * 0.5) * ((-1) ** (rand1 * 0.5)) + "%";
	shape3.style.width = 8 + rand3 * ((-1) ** rand3) + "%";
	shape2.style.transform = "rotate(" + rand2 + "deg)";

}

function changeBC() {
	let colors = ["lightblue", "#2ECC71", "orange", "#00c3ff"];
	let value = Math.floor(Math.random() * colors.length);


	me.style.backgroundColor = colors[value];

}

function hireStart() {
	hireButton();
	id2 = setInterval(hireButton, 500);
}
function hireButton() {
	let colors = ["#2ECC71", "orange", "#00c3ff"];

	let value = Math.floor(Math.random() * colors.length);

	hireme.style.color = colors[value];
	hireme.style.borderColor = colors[value];

}

function validate() {
	let name = document.getElementById('name');
	let email = document.getElementById('email');
	let textInput = document.getElementById('text-input');

	const regx = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9]+).([a-z]{2,10})$/;

	if (name.value.trim() == "") {
		name.style.background = "lightpink";
		name.style.border = "4px solid red";
		return false;
	}
	if (email.value.trim() == "") {
		email.style.background = "lightpink";
		email.style.border = "4px solid red";
		return false;
	}
	if (!regx.test(email.value)) {
		email.style.background = "lightpink";
		email.style.border = "4px solid red";
		return false;
	}
	else {
		return true;
	}
}

function sendWA() {
	let name = document.getElementById('name');
	let email = document.getElementById('email');
	let textInput = document.getElementById('text-input');

	if (name.value.trim() == "") {
		name.style.background = "lightpink";
		name.style.border = "4px solid red";
		alert('Please Enter your Name');
		return false;
	}

	let url = "https://wa.me/919175292357?text=" + "Name: " + name.value + "%0a" + "Email ID: " + email.value + "%0a" + "Message: " + textInput.value;

	window.open(url, '_blank').focus();
}

//Typing Effect
const TypeWriter = function (txtElement, words, wait = 2000) {
	this.txtElement = txtElement;
	this.words = words;
	this.txt = '';
	this.wordIndex = 0;
	this.wait = parseInt(wait, 10);
	this.type();
	this.isDeleting = false;
}

TypeWriter.prototype.type = function(){
	//curr index of word
	const current = this.wordIndex % this.words.length;

	//get full text of current word
	const fulltxt = this.words[current];

	//check if deleting
	if(this.isDeleting){
		//Remove char
		this.txt = fulltxt.substring(0,this.txt.length - 1);
	}else{
		//Add char
		this.txt = fulltxt.substring(0,this.txt.length + 1);
	}

	//Output this is element
	this.txtElement.innerHTML = `<span>${this.txt}</span>`;

	//type speed
	typeSpeed = 300;

	if(this.isDeleting){
		typeSpeed /= 2;
	}

	//check if full word is typed
	if(!this.isDeleting && this.txt === fulltxt ){
		//wait at the end
		typeSpeed = this.wait;
		this.isDeleting = true;
	}else if(this.isDeleting && this.txt === ''){
		this.wordIndex++;
		this.isDeleting = false;
		//pause before typing
		typeSpeed = 500;
	}

	setTimeout(()=>this.type(), typeSpeed)
}

document.addEventListener('DOMContentLoaded', init);

function init() {
	let txtElement = document.querySelector('#talent');
	const words = JSON.parse(txtElement.getAttribute('data-words'));
	const wait = txtElement.getAttribute('data-wait');
	new TypeWriter(txtElement, words, wait);
}