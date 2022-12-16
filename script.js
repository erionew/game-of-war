class Card {
    constructor(suit, rank, score){
        this.suit = suit;
        this.rank = rank;
        this.score = score;
    }
}

class Deck {
    constructor(length, cards){
        this.length = length;
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

}

let newDeck = new Deck(52,'','')
console.log(newDeck.draw())