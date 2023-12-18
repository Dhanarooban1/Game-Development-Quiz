// window.onload = function() {
//   var restartButton = document.getElementById('restart-button');
//   var finalScoreElement = document.getElementById('final-score');

//   // Display the final score
//   var finalScore = localStorage.getItem('score');
//   finalScoreElement.textContent = finalScore;

//   // Handle the restart button click
//   restartButton.onclick = function() {
//     location.href = 'game.html';  // Replace with the path to your game page
//   };
// };

let Currentscore=localStorage.getItem('scoren');
let playerName=localStorage.getItem('playerName');


document.getElementById("scoren").innerHTML=Currentscore
function restart (){
  window.location.href="./game.html"
}

function quit(){
  window.location.href="./startpage.html"
}
document.getElementById("playerName").innerHTML=playerName

document.getElementById("whatsapp").addEventListener("click",()=>{
//   var nickname = document.getElementById('nickName').value;
// var score = document.getElementById('score').innerText;
// var message = `Hello ${nickname}, your score is ${score}.`;

  

  var phoneNumber = '7092005804'; // Replace with the phone number you want to send to
  var message = `Hello ${playerName}, your score is ${Currentscore}.`;
  // var encodedMessage = encodeURI(message);
  var whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappUrl);


})

