const searchBar = document.getElementById("search-bar");
const input = document.getElementById("input-shown");
const input2 = document.getElementById("input-shown2");
const searchBar2 = document.getElementById("icon-search2");
const iconSun = document.getElementById("sun-icon");
const mainContainer = document.getElementById("main-container");
const container = document.getElementById("container");
const moonIcon = document.getElementById("moon-icon");
const containerShoesNike = document.getElementById("container-shoes-nike");
const inputListName = ["shoes", "nike", "nike shoes", "shoes nike"];

function searchInput() {
  searchBar.addEventListener("click", function() {
      input.classList.add("active");
      input.focus();
  });

  document.addEventListener("click", function(e) {
    if (!searchBar.contains(e.target) && !input.contains(e.target)) {
       input.classList.remove("active");
      }
    });

    input.addEventListener("keydown", (event) => {
      const inputValue2 = input.value;

      if (event.key === "Enter") {
        event.preventDefault();

        let found = false;
        
        inputListName.forEach(valueOfInput => {
         if (inputValue2 === valueOfInput) {
           window.location.href = "shoes.html"
            input.value = "";
            found = true
         }
      });
       if (!inputListName.includes(inputValue2)) {
           window.alert("sorry your item not found!..")
         }

        input.value = "";
      }
    });
}
searchInput();

function iconButton() {
    iconSun.addEventListener("click", () => {
    mainContainer.style.backgroundColor = "black";
    container.style.backgroundColor = "black";
    container.style.color = "white";

    const h1 = container.querySelector("h1");
    h1.style.color = "white";

    const links = container.querySelectorAll("ul li a");
    links.forEach(link => {
      link.style.color = "white";
      link.addEventListener("mouseover", () => {
        link.style.color = "orange";
      });
      link.addEventListener("mouseout", () => {
        link.style.color = "white";
      })
    });
  });

  moonIcon.addEventListener("click", () => {
    mainContainer.style.backgroundColor = "white";
    container.style.backgroundColor = "#808080";
    container.style.color = "black";

    const h1 = container.querySelector("h1");
    h1.style.color = "black";

    const links = container.querySelectorAll("ul li a");
    links.forEach(link => {
      link.style.color = "black";
      link.classList.remove("active"); 
    });
  });
}
iconButton();

const bagShop = document.getElementById("shoes-container-button")

bagShop.addEventListener("click", () => {
  window.location.href = "shoes.html";
});


