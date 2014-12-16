(function() {

  tabTitles = ["Tab 1", "Tab 2", "Tab 3"];
  tabContent = ["First Tab", "Second Tab", "Third Tab"];

  function setPageVariables() {
    var tab1 = document.getElementById("tab1");
    var tab2 = document.getElementById("tab2");
    var tab3 = document.getElementById("tab3");
    var tabContent1 = document.getElementById("tabContent1");
    var tabContent2 = document.getElementById("tabContent2");
    var tabContent3 = document.getElementById("tabContent3");
    var uForm = document.getElementById("uForm");
    userTitle = document.getElementById("user-title");
    userContent = document.getElementById("user-content");
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
    tab1.classList.toggle("active");
    tabContent1.classList.toggle("active");
    tab2.classList.remove("active");
    tabContent2.classList.remove("active");
    tab3.classList.remove("active");
    tabContent3.classList.remove("active");
  }

  function tab2Click() {
    tab2.classList.toggle("active");
    tabContent2.classList.toggle("active");
    tab1.classList.remove("active");
    tabContent1.classList.remove("active");
    tab3.classList.remove("active");
    tabContent3.classList.remove("active");
  }

  function tab3Click() {
    tab3.classList.toggle("active");
    tabContent3.classList.toggle("active");
    tab1.classList.remove("active");
    tabContent1.classList.remove("active");
    tab2.classList.remove("active");
    tabContent2.classList.remove("active");
  }

  function storeNewTabs(e) {
    //Prevents forced reload on form submit
    e.preventDefault();
    //Add new tab title to tabTitles array and determine current position in array.
    tabTitles.push(userTitle.value);
    var currentTitlePosition = (tabTitles.length - 1);
    //Add new tab content to tabContent array and determine current position in array.
    tabContent.push(userContent.value);
    var currentContentPosition = (tabContent.length - 1);
    //Create new li for tab title.
    var newLI = document.createElement("li");
    newLI.innerHTML = "<p>" + tabTitles[currentTitlePosition] + "</p>";
    document.getElementById("tab-titles").appendChild(newLI);
    //Create new p for tab content.
    var newP = document.createElement("p");
    newP.innerHTML = tabContent[currentContentPosition];
    document.getElementById("tabs-content").appendChild(newP);
    uForm.reset();
  }

  function runPageEvents() {
    //Adds click event listener on each existing tab.
    tab1.addEventListener("click", tab1Click);
    tab2.addEventListener("click", tab2Click);
    tab3.addEventListener("click", tab3Click);
    // Function call on submit
    uForm.addEventListener("submit", storeNewTabs);
  }

  function runPageFunctions() {
    setPageVariables();
    setInitialValues();
    runPageEvents();
  }

  window.addEventListener("load", runPageFunctions);

})();