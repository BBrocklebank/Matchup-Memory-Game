 document.addEventListener('DOMContentLoaded', () => {

    // Cards Array
    let cardArray = [
        {
            name: '1',
            img: '../Matchup-Memory-Game/assets/images/1_card.png'
        },
        {
            name: '1',
            img: '../Matchup-Memory-Game/assets/images/1_card.png'
        },
        {
            name: '2',
            img: '../Matchup-Memory-Game/assets/images/2_card.png'
        },
        {
            name: '2',
            img: '../Matchup-Memory-Game/assets/images/2_card.png'
        },
        {
            name: '3',
            img: '../Matchup-Memory-Game/assets/images/3_card.png'
        },
        {
            name: '3',
            img: '../Matchup-Memory-Game/assets/images/3_card.png'
        },
        {
            name: '4',
            img: '../Matchup-Memory-Game/assets/images/4_card.png'
        },
        {
            name: '4',
            img: '../Matchup-Memory-Game/assets/images/4_card.png'
        },
        {
            name: '5',
            img: '../Matchup-Memory-Game/assets/images/5_card.png'
        },
        {
            name: '5',
            img: '../Matchup-Memory-Game/assets/images/5_card.png'
        },
        {
            name: '6',
            img: '../Matchup-Memory-Game/assets/images/6_card.png'
        },
        {
            name: '6',
            img: '../Matchup-Memory-Game/assets/images/6_card.png'
        }
    ]

    let grid = $('.grid');
    let selectedCards = []
    let selectedCardsId = []

    // Create Board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
        let card = document.createElement('img')
        $(card).attr({'src':'../Matchup-Memory-Game/assets/images/star_card.png', 'data-id':i})
        card.addEventListener('click', flipcard)
        $(grid).append(card);
        }
    }

    // Card Flip
    function flipcard() {
        let cardId = this.getAttribute('data-id')
        selectedCards.push(cardArray[cardId].name)
        selectedCardsId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (selectedCards.length === 2) {
            checkCards()
        }
    }

    createBoard()

    // Check Cards
    function checkCards () {
        let cards = document.getElementsByTagName('img')
        let
    }
    
 })
