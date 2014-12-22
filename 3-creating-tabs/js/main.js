(function() {

  function TabManager(optionsObj) {

    this.options = optionsObj;

  }

  TabManager.prototype = {

    

  }

  function Tab(isActive, elem, id) {

    this.isActive = isActive;

    this.elem = elem;

    this.id = id;

  }

  // Tab is a Class

  Tab.prototype = {

    isClicked: function() {

    }

  }

  var tab = new Tab(true, "1", "tab1");

  console.log(tab.isActive);
  console.log(tab.elem);
  var tab2 = new Tab(false, "2", "tab2");
  console.log(tab2.isActive);
  console.log(tab2.elem);

})();