// Global Lists
let items = ['Learn HTML', 'Learn CSS', 'Learn Javascript', 'Take over the world'];

// Global Variables
const textField = document.getElementById("text-item");
const close = document.getElementsByClassName("close");

// Error list
const A100 = "ERROR A100: Input field empty";

// Add items to array when button is clicked
addItem = () => {
    let itemValue = document.getElementById('text-item').value;
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");

    if (itemValue !== "") {
        // Create li tag and add value from input field
        items.push(itemValue);
        console.log(items);
        const markUp = document.createElement("li");
        let textnode = document.createTextNode(itemValue);
        markUp.appendChild(textnode);
        document.getElementById("myList").appendChild(markUp);
        // Add span with className 'close' and add x
        markUp.appendChild(span);
        span.className = "close";
        span.appendChild(txt);
        // Hide item when close is clicked
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
              let div = this.parentElement;
              div.style.display = "none";
            }
          }
    }
    else {
        console.log(A100);
    }
};

// check for enter key press to click button
textField.addEventListener('keyup', function(event) {
      if (event.keyCode === 13) {
          event.preventDefault();
          document.getElementById("submit-btn").click();
      }
});

// List all items in the array
for (i = 0; i < items.length; ++i) {
    const markUp = document.createElement("li");
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    markUp.innerHTML = items[i];
    document.getElementById("myList").appendChild(markUp);
    // Add span with className 'close' and add x
    markUp.appendChild(span);
    span.className = "close";
    span.appendChild(txt);   
};

// Hide item when close is clicked
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}