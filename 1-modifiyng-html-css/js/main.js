window.onload = function() {
	// Function to change the content of H1 Element, and background of page.
	function letsChange() {
		document.getElementById("changeMe").innerHTML = "woah, you did it.";
		document.getElementById("html").className = "green";
	}
	// Add event listener to the button.
	var clickMe = document.getElementById("clickMe");
	clickMe.addEventListener("click", letsChange);
}