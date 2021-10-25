let add = element => {
	// console.log(element.parentElement.id)
	let nav = document.querySelector(".nav-link");

	nav.innerHTML += `
	<div class="alert alert-primary" role="alert">
  		<img src="./img/1.png">
  		${element.parentElement.id}
  		${element.id}

  		<button id="icon-clear" onclick="remove(this)"><i class="material-icons">clear</i></button>
	</div> 
	`

	document.querySelector(".material-icons").textContent = "add_shopping_cart";
}

let remove = element => {
	element.parentElement.remove()
}