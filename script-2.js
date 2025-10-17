 const searchBar = document.getElementById("search-bar");
const input = document.getElementById("input-shown");
const input2 = document.getElementById("input-shown2");
const searchBar2= document.getElementById("icon-search2");

     // show input when clicking icon
    searchBar.addEventListener("click", function() {
      input.classList.add("active");
      input.focus();
    });

    // hide input when clicking outside
    document.addEventListener("click", function(e) {
      if (!searchBar.contains(e.target) && !input.contains(e.target)) {
        input.classList.remove("active");
      }
    });
   