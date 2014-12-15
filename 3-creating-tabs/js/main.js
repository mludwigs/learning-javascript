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

  function runPageFunctions() {
    setPageVariables();
    setInitialValues();
  }

  window.addEventListener("load", runPageFunctions);

})();