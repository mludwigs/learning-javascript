var storyLines = [];

window.onload = function() {

	// Variable Declarations
	var storyForm = document.getElementById("storyForm");
	var uInput = document.getElementById("uInput");
	var storyText = document.getElementById("storyText");

	// Function Declaration
	var addP = function(e) {
		e.preventDefault();
		var newP = document.createElement("p");
		newP.innerHTML = uInput.value
		storyText.appendChild(newP);
		storyLines.push(uInput.value);
		storyForm.reset();
	};

	// Calling the function on Submit
	storyForm.addEventListener("submit", addP);

	// Creating variable for reverse button.
	var reverse = document.getElementById("clickMe");

	// Function to reverse paragraph elements stored within storyLines array.
	var reverseReverse = function() {
		while (storyText.firstChild) {
			storyText.removeChild(storyText.firstChild);
		};
	}

	// Calling the function on Reverse, Reverse
	reverse.addEventListener("click", reverseReverse)
}