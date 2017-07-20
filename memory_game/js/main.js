// global scope arrays that contains the card objects
var cards = [
  {
    rank: 'queen',
    suit: 'hearts',
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: 'king',
    suit: 'diamonds',
    cardImage: "images/king-of-diamonds.png"
  }
];
var cardsInPlay = [];

var checkForMatch = function() {
  // checks if cards in play are of equal face, displays certain alert message depending
  if (cardsInPlay.length > 1) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
    } else {
      alert("Sorry, try again.")
    }
  }
}

var flipCard = function() {
  var cardId = this.getAttribute('data-id');

  // prints what cards the user flipped
  console.log("User flipped " + cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);

  // adds cards to end of cardsInPlay arr
  cardsInPlay.push(cards[cardId].rank);

  this.setAttribute('src', cards[cardId].cardImage);

  checkForMatch();
}

var createBoard = function() {
  for (var i = 0; i < cards.length; i++) {
    // adding new element
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', "images/back.png");
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}

createBoard();
