
// Welcome Message
console.log("Welcome to Aishwarya's Portfolio!");

// Button Click
const button = document.querySelector(".btn");

button.addEventListener("click", function() {
    console.log("Welcome! Thanks for visiting my portfolio.");
});

// Navigation Message
const links = document.querySelectorAll("nav ul li a");

links.forEach(function(link) {
    link.addEventListener("click", function() {
        console.log("You clicked: " + link.textContent);
    });
});

