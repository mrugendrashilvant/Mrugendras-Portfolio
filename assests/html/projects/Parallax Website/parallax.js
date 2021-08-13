console.log('helo')

let text = document.getElementById('text');
let stars = document.getElementById('stars');
let planet = document.getElementById('planet');
let btn = document.getElementById('btn');
let heading = document.getElementById('heading');
let para = document.getElementById('para');

window.addEventListener('scroll', function(){
	let value = window.scrollY;
	console.log(value);

	if(value){
		text.style.top = 30+value * -0.07 + '%';
		planet.style.top = value * -0.5 + '%';
		stars.style.top = 100+value * -0.5 + '%';
		btn.style.top = 30 + value * 1.5 + '%'
		para.style.top = 200 + value * -0.5 + '%';
	}
});

let value = window.scrollY;
	console.log(value);