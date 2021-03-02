// Selection des class
const toggleButton = document.getElementById ("toggle-button");
const sideBar = document.getElementById ("side-bar");

toggleButton.addEventListener("click" , show);

// afficher la sidebar
function show() {
    sideBar.classList.toggle("active");
}

//REMOVE SIDEBAR
const content = document.querySelector(".content");

content.addEventListener("click" , () => {
    sideBar.classList.remove("active");
})