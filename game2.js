var nickname = document.getElementById('nickName').value;
var score = document.getElementById('score').innerText;
var message = `Hello ${nickname}, your score is ${score}.`;


function sendWhatsAppMessage(nickname, score) {
  var phoneNumber = '7092005804'; // Replace with the phone number you want to send to
  var message = `Hello ${nickname}, your score is ${score}.`;
  // var encodedMessage = encodeURI(message);
  var whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappUrl);
}
sendWhatsAppMessage(nickname, score);

