// Global Lists
let items = ['hello', 'securitas', 'nokas'];

// Global Variables
const textField = document.getElementById("text-item");

// Error list
const A100 = "ERROR A100: Input field empty";

// add items in array when button is clicked
addItem = () => {
    itemValue = document.getElementById('text-item').value;
    if (itemValue !== "") {
        items.push(itemValue);
        console.log(items);
        const markUp = document.createElement("li");
        let textnode = document.createTextNode(itemValue);
        markUp.appendChild(textnode);
        document.getElementById("myList").appendChild(markUp);
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

// Delete items in the array


// List all items in the array
for (i = 0; i < items.length; ++i) {
    let markUp = document.createElement("li");
    markUp.innerHTML = items[i];
    document.getElementById("myList").appendChild(markUp);
}
