let carts = document.querySelectorAll('.addToCart');
const items = [];

let products = [
	{
		name:"Rado-Swiss Made",
		price: 1000,
		inCart: 0,
	},
	{
		name:"Sony-DSLR",
		price: 1400,
		inCart: 0,
	},
	{
		name:"Levi's Jeans",
		price: 100,
		inCart: 0,
	},
	{
		name:"Samsung S20",
		price: 400,
		inCart: 0,
	}
];

for(let i=0; i<carts.length; i++){
	carts[i].addEventListener('click', ()=>{
		cartNumbers(products[i]);
	})
}

function onLoadCartNumber(){
	let productNumber = localStorage.getItem('cartNumber');

	if(productNumber){
		document.querySelector('.btn span').textContent = productNumber;
	}
	else{

	}
}

function cartNumbers(product){
	//console.log('The product clicked is:', product);
	let productNumber = localStorage.getItem('cartNumber');
	productNumber = parseInt(productNumber);

	if(productNumber){
		localStorage.setItem('cartNumber', productNumber+1);
		document.querySelector('.btn span').textContent = productNumber+1;
	}
	else{
		localStorage.setItem('cartNumber', 1);
		document.querySelector('.btn span').textContent = 1;
	}

	itemsInCart(product);
}

function itemsInCart(product){  //contains items present in the cart
	items.push(product);
}

//To show elements in the cart
let cartButton = document.getElementById('cart-button');
cartButton.addEventListener('click', display);

function display(){
	if(items.length == 0){
		//console.log('Nothing in the cart');
		document.getElementById('modalBody').innerHTML = 'Nothing in the cart';
	}
	else{
		document.getElementById('modalBody').innerHTML = "";
		let ul = document.createElement('ul');
		ul.className = "list-group";
		let totalCost = 0;
		for(let item of items){
			let amount = item.price;
			amount = parseInt(amount);
			totalCost += amount;
			var li = document.createElement('li');
			li.className = "list-group-item";
			li.innerHTML = 
			`<div>
				<p>${item.name}   <span class="text-muted">$${item.price}</span></p>
			</div>`;
			ul.appendChild(li);
		}
		
		let body = document.getElementById('modalBody');
		body.append(ul);
		document.getElementById('total-amount').innerHTML = "$" + totalCost;
	}
}

onLoadCartNumber();