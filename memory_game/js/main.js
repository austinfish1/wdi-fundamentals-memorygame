/*
global scope arrays
*/
var cards = ["queen", "queen", "king", "king"];
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
  console.log("User flipped " + cards[cardId]);

  // adds cards to end of cardsInPlay arr
  cardsInPlay.push(cards[cardId]);

  checkForMatch();
}

flipCard(0);
flipCard(2);
