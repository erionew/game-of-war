class Card {
    constructor(suit, rank, score){
        this.suit = suit;
        this.rank = rank;
        this.score = score;
    }
}

class Deck {
    constructor(length, cards){
        this.length = 52;
        this.cards = cards;

        let suits = ['hearts', 'spades', 'clubs', 'diamonds']
        let rank = ['ace' ,2,3,4,5,6,7,8,9,10,'jack', 'queen', 'king']
        this.cards = [];

        for(let i=0; i < suits.length; i++){
            for(let j=0; j < rank.length; j++){
                this.cards.push(new Card(suits[i], rank[j]))
            }
        }
    }

    draw(){
        return this.cards[Math.floor(Math.random() * this.length)]
    }

    shuffle(){
        for (let i = this.cards.length - 1; i > 0; i--) {
   
            let j = Math.floor(Math.random() * (i + 1));
                        
            let temp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = temp;
        }

        return this.cards
    }

}

class Player{
    constructor(deck){
        this.deck = deck
    }
}

let newDeck = new Deck()

newDeck.shuffle(newDeck)

console.log(newDeck)



// let player1 = new Player(newDeck.cards.splice(newDeck.cards.length / 2))
// console.log(player1)