/*document.addEventListener("DOMContentLoaded", function () {
    
    // You can also listen for the Enter key press to trigger the search
    searchInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            window.location.href = "./searchResults.html"
        }
    });
});*/


// Get a reference to the login button
const searchButton = document.getElementById("searchButton");

// Add a click event handler to the login button
searchButton.addEventListener("click", function() {
    event.preventDefault();
    // Toggle the visibility of the login section
   // loginSection.style.display = "none";
    window.location.href = "searchResults.html";
});