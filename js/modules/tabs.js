function tabs(tabsSelector, tabsContentSelector, tabsParentSelector,activeClass){
   
        let tabHeaders = document.querySelectorAll(tabsSelector),
          tabContents = document.querySelectorAll(tabsContentSelector),
          tabsParent = document.querySelector(tabsParentSelector);
      
        function hideTabContent() {
          tabContents.forEach((item) => {
            item.classList.add("hide");
            item.classList.remove("show", "fade");
          });
      
          tabHeaders.forEach((item) => {
            item.classList.remove(activeClass);
          });
        }
      
        function showTabContent(i = 0) {
          tabContents[i].classList.add("show", "fade");
          tabContents[i].classList.remove("hide");
          tabHeaders[i].classList.add(activeClass);
        }
      
        hideTabContent();
        showTabContent();
      
        tabsParent.addEventListener("click", (event) => {
          const target = event.target;
          if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabHeaders.forEach((item, i) => {
              if (target == item) {
                hideTabContent();
                showTabContent(i);
              }
            });
          }
        });
    
}

export default tabs;