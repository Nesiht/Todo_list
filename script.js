let items = ['hello'];
const textField = document.getElementById("text-item");

addItem = () => {
    itemValue = document.getElementById('text-item').value;
    items.push(itemValue);
    console.log(items);
};

textField.addEventListener('keyup', function(event) {
      if (event.keyCode === 13) {
          event.preventDefault();
          document.getElementById("submit-btn").click();
      }
  });