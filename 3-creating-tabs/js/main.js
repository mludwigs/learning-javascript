// Check this out for adding/removing class: https://developer.mozilla.org/en-US/docs/Web/API/Element.classList

(function() {

  tabTitles = ["Tab 1", "Tab 2", "Tab 3"];
  tabContent = ["Tab 1 Content", "Tab 2 Content", "Tab 3 Content"];

  function setPageVariables() {
    var tab1 = document.getElementById("tab1");
    var tab2 = document.getElementById("tab2");
    var tab3 = document.getElementById("tab3");
    var tabContent1 = document.getElementById("tabContent1");
    var tabContent2 = document.getElementById("tabContent2");
    var tabContent3 = document.getElementById("tabContent3");
  }

  function setInitialValues() {
    tab1.innerHTML = tabTitles[0];
    tabContent1.innerHTML = tabContent[0];
    tab2.innerHTML = tabTitles[1];
    tabContent2.innerHTML = tabContent[1];
    tab3.innerHTML = tabTitles[2];
    tabContent3.innerHTML = tabContent[2];
  }

  function tab1Click() {
    tab1.className = "tab-titles active";
    tabContent1.className = "tab-contents active";
  }

  function runPageEvents() {
    tab1.addEventListener("click", tab1Click);
  }

  function runPageFunctions() {
    setPageVariables();
    setInitialValues();
    runPageEvents();
  }



  window.addEventListener("load", runPageFunctions);

})();