var storyLines = [];

var createNewParagraph = function(paragraphHTML) {
	var newP = document.createElement("p");
	newP.innerHTML = paragraphHTML;
	storyText.appendChild(newP);
}

// Forcing wait upon window load.
window.onload = function() {

	// Variable Declarations
	var storyForm = document.getElementById("storyForm");
	var uInput = document.getElementById("uInput");
	var storyText = document.getElementById("storyText");

	// Function Declaration
	var addP = function(e) {
		e.preventDefault();
		createNewParagraph(uInput.value);
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
		storyLines.reverse();
		for (var i = 0; i < storyLines.length; i++) {
			createNewParagraph(storyLines[i]);
		}
	}

	// Calling the function on Reverse, Reverse
	reverse.addEventListener("click", reverseReverse)
}