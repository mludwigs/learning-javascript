// Add active class on click, and if a new tab is added see if it's active and make it so.

(function() {

  var tabClick = new CustomEvent("tabClicked", {"detail": "hello"});
  
  var config = [
    {
      id: "#tab1",
      isActive: true
    },
    {
      id: "#tab2",
      isActive: false
    }
  ]

  function TabManager(optionsObj) {
    this.init = function() {
      var i;
      for (i = 0; i < config.length; i++) {
        new Tab(config[i].id, config[i].isActive);
      }
    }  
    this.options = optionsObj;
    this.init();
  }

  TabManager.prototype = {
  }

  function Tab(id, isActive) {
    this.isActive = isActive;
    this.elem = document.querySelector(id);
    this.id = id;
    this.init = function() {
      this.isClicked();
    }
    this.init();
  }

  // Defining Tab as a class.
  Tab.prototype = {
    isClicked: function() {
      this.elem.addEventListener("click", function(){
        console.log(this.elem);
        document.dispatchEvent(tabClick);
      }.bind(this));
    }
  }

  var tM = new TabManager(config);

  document.addEventListener("tabClick", function(e) {
    console.log("hi");
  });

})();