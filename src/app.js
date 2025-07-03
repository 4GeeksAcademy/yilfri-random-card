import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function() {
  //write your code here
  let card = ['A', '2', '3', '4', '5','6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  let cardSymbol = ['♥', '♦', '♣', '♠']
  let symbolsRef = document.querySelectorAll('.card-symbol')
  let cardRef = document.getElementById('card')
  
  let randomCard = card[Math.floor(Math.random() * card.length)]
  let randomCardSymbol = cardSymbol[Math.floor(Math.random() * cardSymbol.length)]

  cardRef.innerText= randomCard
  symbolsRef.forEach((symbol) => {
    symbol.innerText = randomCardSymbol
    if (randomCardSymbol == '♥' || randomCardSymbol == '♦'){
      symbol.style.color = 'red'
    }
  })
};