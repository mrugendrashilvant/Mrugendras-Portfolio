function calculateTip(bill, person, tip){
	if(bill && person && tip){
		let tipAmount = bill * tip;
		let tipPerPerson = (tipAmount/person).toFixed(2);

		let totalAmount = (tipAmount + bill).toFixed(2);
		let splitAmount = (totalAmount/person).toFixed(2);

		let tPP = document.getElementById('tip-person').value = tipPerPerson;
		let sA = document.getElementById('final-amount').value = splitAmount;
	}
	else{
		if(!bill){
			alert('Please enter bill amount');
		}
		else if(!person){
			alert('Enter number of people');
		}
	}
}


let begin = document.getElementById('calculate');
begin.addEventListener('click', start);

function start(){
	let bill = Number(document.getElementById('amount').value);
	let person = Number(document.getElementById('people').value);
	let tip = Number(document.getElementById('services').value);

	calculateTip(bill, person, tip);
}

let reset = document.getElementById('reset');
reset.addEventListener('click', ()=>{
	document.getElementById('amount').value = "";
	document.getElementById('people').value = "";
	document.getElementById('services').value = "Select";
	document.getElementById('final-amount').value = "";
	let tPP = document.getElementById('tip-person').value = "";
});