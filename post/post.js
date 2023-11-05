import { ref, push, database, onValue } from "./firebase.js";

// get elements from index.html
let userInputTitle = document.getElementById("title");
let userInputText = document.getElementById("story");
let submitBtn = document.getElementById("posts-btn");
let itemsContainer = document.getElementById("itemsContainer");
let images = document.getElementById("images");

// reference a part of our database
let itemsRef = ref(database, "items");

function handlePostClick(buttonName) {
    const postTitle = document.getElementById("title").value.trim();
    const postContent = document.getElementById("content").value.trim();
    const oldContent = document.getElementById("posts-box").innerHTML;
    if (postTitle != "" && postContent != "") {
      console.log("test");
    }
    handleCancelClick("post-btn");
  }

  const postButton = document.getElementById("post-btn");
  postButton.addEventListener("click", function (event) {
    handlePostClick(postButton);
  });

// Function to display items in reverse order, newer posts are on top
function displayItemsReversed(data) {
  
    itemsContainer.innerHTML = "";
    console.log(data);
    const keys = Object.keys(data).reverse();
    for (let key of keys) {
      let item = data[key];

      let newDiv = document.createElement("div");
      newDiv.className = "post";  
      newDiv.innerHTML = `
        <h2 id="post-title">${item.title}</h2>
        <p>${item.text}</p>
        <input type="text" id="commentInput${key}" placeholder="Add Comment">
        <button id="commentBtn${key}">Submit Comment</button>
        <div id="commentsContainer${key}"></div>
      `;

      itemsContainer.append(newDiv);

    }}

    // show items on Firebase in our items container
onValue(itemsRef, (snapshot) => {
    const data = snapshot.val();
    displayItemsReversed(data);
  });
  
  // add item to database
  submitBtn.onclick = (event) => {
    event.preventDefault();
    if (userInputTitle.value == "" || userInputText.value == "") {
      alert("Please write in both text boxes");
    } else {
      let userInputValueTitle = userInputTitle.value;
      userInputTitle.value = "";
      let userInputValueText = userInputText.value;
      userInputText.value = "";
  
      // Create an object to store both title and text
      const newItemData = {
        title: userInputValueTitle,
        text: userInputValueText,
      };
  
      // Generate a new child reference under "items" and set the object as its value
      push(itemsRef, newItemData);
    }
  };

  function autocomplete(inp, arr) {
    var currentFocus;
    inp.addEventListener("input", function (e) {
      var a,
        b,
        i,
        val = this.value;
      closeAllLists();
      if (!val) {
        return false;
      }
      currentFocus = -1;
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function (e) {
            /*insert the value for the autocomplete text field:*/
            inp.value = this.getElementsByTagName("input")[0].value;
            /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
            closeAllLists();
          });
          a.appendChild(b);
        }
      }
    });}