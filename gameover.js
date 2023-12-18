window.onload = function () {
  wrongAnswerSound.play();
};



let wrongAnswerSound = document.getElementById("wrong-answer-sound");
wrongAnswerSound.load();
wrongAnswerSound.volume = 1;
wrongAnswerSound.play();





let Currentscore=localStorage.getItem('scoren');
let playerName=localStorage.getItem('playerName');


document.getElementById("scoren").innerHTML=Currentscore
function restart (){
  window.location.href="./game.html"
}

function quit(){
  window.location.href="./index.html"
}
document.getElementById("playerName").innerHTML=playerName

document.getElementById("whatsapp").addEventListener("click",()=>{
  var phoneNumber = '7092005804'; 
  var message = `Hello ${playerName}, your score is ${Currentscore}.`;
  var whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappUrl);
})

