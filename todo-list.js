const inputAddItem = document.getElementById("input-add-item");
const addItem = document.getElementById("add-item");
const listContainer = document.getElementById("list-container2")

addItem.addEventListener("click", () => {
    const inputItemValue = inputAddItem.value;
    const limitNumber = 5

    const button = document.createElement("button");
    button.textContent = "delete"
    button.classList.add("button-btn-delete")


    const li = document.createElement("li")
    li.textContent = inputItemValue;
    li.classList.add("list-style")

    button.addEventListener("click", () => {
       li.remove();
       button.remove();
    })


    listContainer.appendChild(li)
    listContainer.appendChild(button)

    inputAddItem.value = "";
})