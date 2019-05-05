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
  
  
class Player {
  constructor(name){
    this.name = name;
    this.points =0;
    this.hand = [];
    this.handLength = 3;
    this.roundsWon = 0;
    
  }
  addCardsToHand(){
    const randCard = game.deck.splice(Math.floor(Math.random() * game.deck.length),1)[0];
    this.hand.push(randCard);
    console.log(randCard);

  }
}
//
const game = {
    deck: cardChoices,
    cardsPlayed: [],
    eggbert: new Player('eggbert'),
    computer: new Player('computer'),
    roundsPlayed: 0,
    cardsInHand: 3,

    
    drawCards: function(eggbert, computer, sizeOfHand) {
      for(let i = 0 ; i < sizeOfHand; i ++){
        eggbert.addCardsToHand();
        computer.addCardsToHand();
      }
    },

    showScoreBoard: function(eggbert, computer){
      console.log("Score:", `${eggbert.name}`,":",`${eggbert.points}`, `${computer.name}`,":",`${computer.points}`);
    },

    roundBattle: function(eggbert, computer){
      if(eggbert.hand[0].damage > computer.hand[0].damage){
        eggbert.points++;
        console.log('Eggbert wins the battle!')
      } else if (computer.hand[0].damage > eggbert.hand[0].damage){
       computer.points++;
        console.log('Computer wins the battle!')
      } else(console.log('Tie battle!'));
      this.showScoreBoard(eggbert, computer);
      this.cardsPlayed.push(eggbert.hand.splice(0,1)[0]);
      this.cardsPlayed.push(computer.hand.splice(0,1)[0]);

    },

    whoWon: function(eggbert, computer){
      if(eggbert.points > computer.points){
        eggbert.roundsWon++;
        console.log('Eggbert wins the round!');
      }else if(computer.points > eggbert.points){
       computer.roundsWon++;
        console.log('Computer wins the round!');
      } else(console.log('Tie round'));
      
    },
    
    round: function(eggbert, computer){
      while((eggbert.hand.length >0) &&  (computer.hand.length > 0)){
        this.roundBattle(eggbert, computer)}
        this.whoWon(eggbert, computer);
        eggbert.points = 0;
        computer.points = 0;  
    },
    whoWonGame: function(eggbert, computer){
      if(eggbert.roundsWon > computer.roundsWon){
        console.log('Eggbert won the game!');
      }else if(computer.roundsWon > eggbert.roundsWon){
        console.log('Computer won game!');
      }else(console.log('Tie game'));
    },
    playgame: function() {
      this.drawCards(this.eggbert, this.computer, this.cardsInHand);
      this.round(this.eggbert, this.computer);
    },
    startGame: function(){
      while((this.cardsInHand*2) <= this.deck.length){
        this.playgame(this.eggbert, this.computer);
      }
      this.whoWonGame(this.eggbert, this.computer);
    }  
}
game.startGame();
