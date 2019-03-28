// pakemon Gamepad
// start the game ()
// deal the player random 3 cards
const cardChoices = [
    {
      name: "Bulbasaur",
      damage: 60
    }, {
      name: "Caterpie",
      damage: 40
    }, {
      name: "Charmander",
      damage: 60
    }, {
      name: "Clefairy",
      damage: 50
    }, {
      name: "Jigglypuff",
      damage: 60
    }, {
      name: "Mankey",
      damage: 30
    }, {
      name: "Meowth",
      damage: 60
    }, {
      name: "Nidoran - female",
      damage: 60
    }, {
      name: "Nidoran - male",
      damage: 50
    }, {
      name: "Oddish",
      damage: 40
    }, {
      name: "Pidgey",
      damage: 50
    }, {
      name: "Pikachu",
      damage: 50
    }, {
      name: "Poliwag",
      damage: 50
    }, {
      name: "Psyduck",
      damage: 60
    }, {
      name: "Rattata",
      damage: 30
    }, {
      name: "Squirtle",
      damage: 60
    }, {
      name: "Vulpix",
      damage: 50
    }, {
      name: "Weedle", 
      damage: 40
    }
  ]
  const scoreBoard = [{
    user: 'Computer',
    points: 0
  }, {
    user: 'Player',
    points: 0
  }]
  

  //if the deck contains cards (6 or more); then start round
  //if (deckCards.length >= 6)
const beginGame = () => {
  for(i = 0; i < 3; i++){ 
    if(cardChoices.length >= 6){
    startRound()
  }else (alert('Game Over'))
}
}
// deal the computer 3 random cards
// deal the computer 3 random cards
//push those cards into an array of objects 
//with name and damage as values



// remove those 3 cards from the array
// player and computer each play a card
//compare cards, determine winnner,  and award point 
// player 
//
const startRound = () => {
const compDeck = []
const eggDeck = []
const compRandCollection = () => {
  for(i = 0; i < 3; i++){
   const randCard = Math.floor(Math.random() * cardChoices.length);
    compDeck.push(cardChoices[randCard]);
    cardChoices.splice(randCard, 1);
  }     
  console.log(compDeck);
}
const eggRandCollection = () => {
  for(i = 0; i < 3; i++){
    const randCard = Math.floor(Math.random() * cardChoices.length);
    eggDeck.push(cardChoices[randCard]);
    cardChoices.splice(randCard, 1);
  }
  console.log(eggDeck);
}

compRandCollection();
eggRandCollection();

const compChoice = () => {
  for(i = 0; i < 3; i++){
    if(compDeck[i].damage > eggDeck[i].damage) {
      //(Scoreboard.points['Computer'] + 1),
      console.log('computer gets point')
    }else if (compDeck[i].damage < eggDeck[i].damage){
      console.log('player gets point');
    }else{
      console.log('tie');
    };
  }
}

compChoice();
computerPoints();
playerPoints();
}
// loop over cards

// check the cards against each other
// increment points and display message
// discard cards that were used


// const compChoiceIndex = compDeck.damage 
// cardChoices.damage = cardChoicesdamage;
// console.log(cardChoicesdamage);







// //playersColllection {
//     hand:
//     points:
//     discarded pile:



//     make scoreboards object
// }