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
    var uForm = document.getElementById("uForm");
    var userTitle = document.getElementById("user-title");
    var userContent = document.getElementById("user-content");
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

  // function addNewTabs() {

  //   function createNewTab(pHTML) {
  //     var newLi = document.createElement("li")
  //     newLi.innerHTML = pHTML;
  //     document.getElementById("tab-titles").appendChild(newLi);
  //   }

  //   function createNewTabContent(pHTML) {
  //     var newP = document.createElement("p");
  //     newP.innerHTML = pHTML;
  //     document.getElementById("tabs-content").appendChild(newP);
  //   }

  //   function addTabs(e) {
  //     e.preventDefault();
  //     createNewTab(user-title.value);
  //     createNewTabContent(user-content.value);
  //     uForm.reset();
  //   }
  // }

  function runPageEvents() {
    tab1.addEventListener("click", tab1Click);
    tab2.addEventListener("click", tab2Click);
    tab3.addEventListener("click", tab3Click);
    // uForm.addEventListener("submit", addNewTabs);
  }

  function runPageFunctions() {
    setPageVariables();
    setInitialValues();
    runPageEvents();
  }

  window.addEventListener("load", runPageFunctions);

})();