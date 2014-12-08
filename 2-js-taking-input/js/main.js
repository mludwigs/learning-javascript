window.onload = function() {

	// Variable Declarations
	var storyForm = document.getElementById("storyForm");
	var uInput = document.getElementById("uMessage");

	// Function Declaration
	var addP = function(e) {
		e.preventDefault();
		var main = document.getElementById("text");
		var newP = document.createElement("p");
		newP.innerHTML = uInput.value
		main.appendChild(newP);
		storyForm.reset();
	};

	// Calling the function on Submit
	storyForm.addEventListener("submit", addP);

}