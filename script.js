let items = ['hello', 'securitas', 'nokas'];
const textField = document.getElementById("text-item");

// add items in array when button is clicked
addItem = () => {
    itemValue = document.getElementById('text-item').value;
    items.push(itemValue);
    console.log(items);
};

// check for enter key press to klick button
textField.addEventListener('keyup', function(event) {
      if (event.keyCode === 13) {
          event.preventDefault();
          document.getElementById("submit-btn").click();
      }
  });

// Adds the word CLEAN to the list
// Add the new item to the array and display it
// Parts of this should be moved to addItem().
listItem = () => {
    let node = document.createElement("li");
    let textnode = document.createTextNode("clean");
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
};

// List all items in teh array WORKING!
for (i = 0; i < items.length; ++i) {
    let port = document.createElement("li");
    port.innerHTML = items[i];
    document.getElementById("myList").appendChild(port);
}
