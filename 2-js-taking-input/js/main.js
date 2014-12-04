window.onload = function() {

	// Function to change the H1, button ID, and add a paragraph.
	function letsChange() {
		var uMessage = prompt("What's Your Name?");
		document.getElementById("changeMe").innerHTML = ("hi there, " + uMessage + ".");
		document.getElementById("clickMe").id = "clicked";
		document.getElementById("clicked").innerHTML = ("add some more.");
		document.getElementById("letsGrow").innerHTML = (uMessage);
	}

	// Registering Click Event on Button and Calling the Above Function.
	var clickMe = document.getElementById("clickMe");
	clickMe.addEventListener("click", letsChange);

}