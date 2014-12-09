(function() {

  var
    tab1,
    tab2,
    tab3,
    tabContent1,
    tabContent2,
    tabContent3;

  function setPageVariables() {
    tab1 = document.getElementById("tab1");
    tab2 = document.getElementById("tab2");
    tab3 = document.getElementById("tab3");
    tabContent1 = document.getElementById("tabContent1");
    tabContent2 = document.getElementById("tabContent2");
    tabContent3 = document.getElementById("tabContent3");
  }

  function showDialog() {
    testEl.style.display = "block";
  }

  function setPageEvents() {
    tab1.addEventListener("click", )
  }

  function runPageFunctions() {
    setPageVariables();
    setPageEvents();
  }

  window.addEventListener("load", runPageFunctions);

})();