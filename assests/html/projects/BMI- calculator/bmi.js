class Main{
	weight;
	height;

	constructor(height, weight){
		this.height = height;
		this.weight = weight;
	}

	calculate(){
		let h = parseFloat(this.height);
		let w = parseFloat(this.weight);

		let  result = w/(h*h);

		return result;
	}

	display(answer){
		//console.log("in display");
			if(answer){
				let finalAnswer = answer.toFixed(2);
				let result = document.getElementById('answer');
				result.innerHTML = finalAnswer + `<small> kg/sq.m</small>`;

				let comments = document.getElementById('comments');
				if(answer>=18.5 && answer<=24.9){
					result.style.backgroundColor = "lightgreen";
					result.style.border = "3px solid green";
					result.style.borderRadius = "14px 10px";
					comments.innerHTML = "Normal Weight"
					comments.style.color = "green";
				}
				else if(answer>=25 && answer<=29.9){
					result.style.backgroundColor = "lightyellow";
					result.style.border = "3px solid yellow";
					result.style.borderRadius = "14px 10px";
					comments.innerHTML = "Over-Weight"
					comments.style.color = "orange";
				}
				else if(answer < 18.5){
					result.style.backgroundColor = "lightyellow"
					result.style.border = "3px solid yellow";
					result.style.borderRadius = "14px 10px";
					comments.innerHTML = "Under-Weight"
					comments.style.color = "orange";
				}
				else if(answer > 29.9){
					result.style.backgroundColor = "lightpink"
					result.style.border = "3px solid red";
					result.style.borderRadius = "14px 10px";
					comments.innerHTML = "Obesity"
					comments.style.color = "red";
				}
			}

			else{
				alert('Missing Input Value');
			}
	}
}

let btn = document.querySelector('button');
btn.addEventListener('click', start);

function start(){
	let wt = document.getElementById('weight').value;
	let ht = document.getElementById('height').value;

	const obj = new Main(ht, wt);

	let answer = obj.calculate();

	obj.display(answer);
}