const deckOfHearts= [
    { suit: 'hearts', value: '2' },
    { suit: 'hearts', value: '3' },
    { suit: 'hearts', value: '4' },
    { suit: 'hearts', value: '5' },
    { suit: 'hearts', value: '6' },
    { suit: 'hearts', value: '7' },
    { suit: 'hearts', value: '8' },
    { suit: 'hearts', value: '9' },
    { suit: 'hearts', value: '10' },
    { suit: 'hearts', value: 'J' },
    { suit: 'hearts', value: 'Q' },
    { suit: 'hearts', value: 'K' },
    { suit: 'hearts', value: 'A' },
]

const deckOfDiamonds = [
    { suit: 'diamonds', value: '2' },
    { suit: 'diamonds', value: '3' },
    { suit: 'diamonds', value: '4' },
    { suit: 'diamonds', value: '5' },
    { suit: 'diamonds', value: '6' },
    { suit: 'diamonds', value: '7' },
    { suit: 'diamonds', value: '8' },
    { suit: 'diamonds', value: '9' },
    { suit: 'diamonds', value: '10' },
    { suit: 'diamonds', value: 'J' },
    { suit: 'diamonds', value: 'Q' },
    { suit: 'diamonds', value: 'K' },
    { suit: 'diamonds', value: 'A' },
]

const deckOfClubs = [
    { suit: 'clubs', value: '2' },
    { suit: 'clubs', value: '3' },
    { suit: 'clubs', value: '4' },
    { suit: 'clubs', value: '5' },
    { suit: 'clubs', value: '6' },
    { suit: 'clubs', value: '7' },
    { suit: 'clubs', value: '8' },
    { suit: 'clubs', value: '9' },
    { suit: 'clubs', value: '10' },
    { suit: 'clubs', value: 'J' },
    { suit: 'clubs', value: 'Q' },
    { suit: 'clubs', value: 'K' },
    { suit: 'clubs', value: 'A' },
]

const deckOfSpades = [
    { suit: 'spades', value: '2' },
    { suit: 'spades', value: '3' },
    { suit: 'spades', value: '4' },
    { suit: 'spades', value: '5' },
    { suit: 'spades', value: '6' },
    { suit: 'spades', value: '7' },
    { suit: 'spades', value: '8' },
    { suit: 'spades', value: '9' },
    { suit: 'spades', value: '10' },
    { suit: 'spades', value: 'J' },
    { suit: 'spades', value: 'Q' },
    { suit: 'spades', value: 'K' },
    { suit: 'spades', value: 'A' },
]

const fullDeck = [...deckOfHearts, ...deckOfDiamonds, ...deckOfClubs, ...deckOfSpades]

let gameDeck = fullDeck
let currentDeck = []
let turnedCards = []

function shuffle(array) {
    let shuffledArray = []
    let usedIndexes = []
    let i = 0
    while (i < array.length) {
        let randomIndex = Math.floor(Math.random() * array.length)
        if (!usedIndexes.includes(randomIndex)) {
            shuffledArray.push(array[randomIndex])
            usedIndexes.push(randomIndex)
            i++
        }
    }
    return shuffledArray
}

function dealPlayersCards(players) {
    gameDeck = shuffle(gameDeck)
    currentDeck = [...gameDeck]

    console.log(currentDeck)

    players.forEach(player => {
        const card1 = currentDeck.pop()
        const card2 = currentDeck.pop()
        player.cards = [card1, card2] 
    })
    return 'Player cards dealed!'
} 

function dealFlopCards() {
    const card1 = currentDeck.pop()
    const card2 = currentDeck.pop()
    const card3 = currentDeck.pop()
    turnedCards = [card1, card2, card3]
    return 'Flop cards dealed!'
}

function dealTurnCards() {
    turnedCards.push(currentDeck.pop())
    return 'Turn card dealed!'
}

function dealRiverCards() {
    turnedCards.push(currentDeck.pop())
    return 'River card dealed!'
}

const player1 = {}
const player2 = {}

console.log(gameDeck.length)

console.log(dealPlayersCards([player1, player2]))

console.log(player1)
console.log(player2)

console.log(currentDeck.length)

console.log(dealFlopCards())

console.log(currentDeck.length)

console.log(dealTurnCards())

console.log(currentDeck.length)

console.log(dealRiverCards())

console.log(currentDeck.length)

console.log(turnedCards)