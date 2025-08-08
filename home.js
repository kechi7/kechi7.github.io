var messages = ["KWK scholars are awesome!", "We did that!!!!", "You're doing great!", "We did a phenomenal job learning how to code!!!!"];
var randomIndex = Math.floor(Math.random() * messages.length);
console.log(randomIndex)

var button = document.querySelector('#button2');
var paragraph = document.querySelector('#textDisplay');

function displayMessage() {
  var randomIndex = Math.floor(Math.random() * messages.length);
  var randomMessage = messages[randomIndex];
  paragraph.textContent = randomMessage;
};

button.addEventListener('click', displayMessage);

