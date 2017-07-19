/*
global scope arrays
*/
// array that contains the card objects
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

/*
function to check if cards are a match
*/
var checkForMatch = function() {
  // checks if cards in play are of equal face, displays certain alert message depending
  if (cardsInPlay.length = 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
    } else {
      alert("Sorry, try again.")
    }
  }
}

/*
function to flip cards
*/
var flipCard = function(cardId) {
  // prints what cards the user flipped
  console.log("User flipped " + cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);

  // adds cards to end of cardsInPlay arr
  cardsInPlay.push(cards[cardId].rank);

  checkForMatch();
}

flipCard(0);
flipCard(2);
