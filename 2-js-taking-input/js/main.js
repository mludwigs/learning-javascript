// Forcing wait upon window load.
window.onload = function() {
	// List of lines in the story (used for reverse function).
	var storyLines = [];
	// Function to create new paragraphs based on user input.
	var createNewParagraph = function(paragraphHTML) {
		var newP = document.createElement("p");
		newP.innerHTML = paragraphHTML;
		storyText.appendChild(newP);
	}
	var storyText = document.getElementById("storyText");
	var storyForm = document.getElementById("storyForm");
	// Function Declaration
	var addP = function(e) {
		e.preventDefault();
		var uInput = document.getElementById("uInput");
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