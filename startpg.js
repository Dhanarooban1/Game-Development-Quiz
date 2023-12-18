
document.querySelector("#Playbtn").addEventListener('click', ()=>{
    const  player1 =document.querySelector('.playerss1').value
const  player2 =document.querySelector('.playerss2').value
    if(!player1 || !player2){
        alert("Please give a player name")
    }
    else if(player1 && player2){
       localStorage.setItem('playerName',document.getElementById("nickName").value)
        location.href = 'game.html'
    }
})

    window.onload = function() {
        document.getElementById('background-music').onplay
    }
