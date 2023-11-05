/*var login = getElementByID("login");

let loginBtn = document.getElementById("loginbtn");

 //click the login button and if the user email input contains bu.edu, then redirect user to forum.html, else show invalid dredential message
loginBtn.onclick = (event) => {
    event.preventDefault();
    let userEmailInput = document.getElementById("userEmail").value; // Use .value to get the input value
    console.log(userEmailInput);

    if (userEmailInput.includes("bu.edu")) {
        window.location.href = "gallery.html";
    } 
}; */

// Get a reference to the login section
const loginSection = document.getElementById("login");
    
// Get a reference to the login button
const loginButton = document.getElementById("loginbtn");

// Add a click event handler to the login button
loginButton.addEventListener("click", function() {
    event.preventDefault();
    // Toggle the visibility of the login section
   // loginSection.style.display = "none";
    window.location.href = "gallery.html";
});