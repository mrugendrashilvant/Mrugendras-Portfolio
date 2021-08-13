
let input = document.getElementById('input-task');
let ul = document.querySelector("ul");
let enterButton = document.getElementById('enter');
let date = document.getElementById('date');
//let dBtn = document.getElementById("close-btn");
//dBtn.addEventListener("click", deleteListItem);
let clear = document.getElementById('clear');
let key = "taskList"

clear.addEventListener('click',()=>{
	localStorage.removeItem(key);
	ul.innerHTML = "";
})

const day = new Date();
date.innerHTML = day.toDateString();

function createListElement(){
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.className = "list-group-item";
	ul.appendChild(li);
	
	//console.log(JSON.parse(x));
	input.value = "";

	let dBtn = document.createElement("button");
	dBtn.className = "btn btn-danger";
	dBtn.id = "close-btn";
	dBtn.appendChild(document.createTextNode('X'));

	li.appendChild(dBtn);

	dBtn.addEventListener("click", deleteListItem);
	localStorage.setItem(key, JSON.stringify(ul.innerHTML));
	
	/*function deleteListItem(){
		//console.log("hi");
		this.closest(".list-group-item").remove();

		localStorage.setItem(key, JSON.stringify(ul.innerHTML));
	}*/
}

function deleteListItem(){
		console.log("hi");
		this.closest(".list-group-item").remove();

		localStorage.setItem(key, JSON.stringify(ul.innerHTML));
	}

function addListAfterClick(){
	let inputLength = input.value.length;
	if(inputLength > 0){
		createListElement();
	}
	else{
		alert('Do something... Today is a great Day!')
	}
}

enterButton.addEventListener("click", addListAfterClick);

window.addEventListener('load',display);

function display(){
	let remTask = localStorage.getItem(key);
	remTask = JSON.parse(remTask);
	if(remTask){

		ul.innerHTML = (remTask);
		let dBtn = document.querySelectorAll("#close-btn");
		for(let button of dBtn){
			button.addEventListener("click", deleteListItem);
		}
		
	}
}