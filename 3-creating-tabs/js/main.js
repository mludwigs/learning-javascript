(function() {

  var
    testEl,
    clickButton;

  function setPageVariables() {
    testEl = document.getElementById("test");
    clickButton = document.getElementById("clickBtn");
  }

  function showDialog() {
    testEl.style.display = "block";
  }

  function setPageEvents() {
    
  }

  function runPageFunctions() {
    setPageVariables();
    setEvents();
  }

  window.addEventListener("load", runPageFunctions);

})();