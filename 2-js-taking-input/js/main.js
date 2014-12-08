window.onload = function() {

	var form = document.getElementById("form");
	var uInput = document.getElementById("uMessage");
	form.onsubmit = function(e) {
		e.preventDefault();
		console.log(uInput.value);
		var main = document.getElementById("text");
		var newP = document.createElement("p");
		newP.innerHTML = uInput.value
		main.appendChild(newP);
	};

}

	// Old Function - Trying New Solution
	// // Function to change the H1, button ID, and add a paragraph.
	// function letsChange() {
	// 	var uMessage = prompt("What's Your Name?");
		// document.getElementById("changeMe").innerHTML = ("hi there, " + uMessage + ".");
	// 	document.getElementById("clickMe").id = "clicked";
	// 	document.getElementById("clicked").innerHTML = ("add some more.");
	// 	function letsCreate() {
	// 		uMessage = prompt("What would you like to add?")
	// 		var main = document.getElementById("text");
	// 		var newP = document.createElement("p");
	// 		newP.appendChild(document.createTextNode(uMessage));
	// 		main.appendChild(newP);
	// 	}
	// 	var clicked = document.getElementById("clicked");
	// 	clicked.addEventListener("click", letsCreate);
	// }

	// // Registering Click Event Listener on Button and Calling the Above Function.
	// var clickMe = document.getElementById("clickMe");
	// clickMe.addEventListener("click", letsChange);
	// // Registering Click Event Listner on Button AFTER ID Change
	// var clicked = document.getElementById("clicked");
	// clicked.addEventListener("click", letsCreate);