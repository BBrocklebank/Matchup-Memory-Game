// Menu Generator
document.addEventListener('DOMContentLoaded', () => {

    let startGame = $('.startButton');
    let levelChoice = $('.levelChoice');

    let startButton = document.createElement('button');
    let levelOne = document.createElement('button');
    let levelTwo = document.createElement('button');
    let levelThree = document.createElement('button');

    startButton.innerHTML = "Start";
    levelOne.innerHTML = "Difficulty Level 1";
    levelTwo.innerHTML = "Difficulty Level 2";
    levelThree.innerHTML = "Difficulty Level 3";

    menuArray = [
        startButton,
        levelOne,
        levelTwo,
        levelThree
    ]

    menuArray[0].setAttribute('class', 'btn-success btn-lg menuButtons align-top');
    menuArray[1].setAttribute('class', 'btn-warning btn-lg menuButtons');
    menuArray[2].setAttribute('class', 'btn-warning btn-lg menuButtons');
    menuArray[3].setAttribute('class', 'btn-warning btn-lg menuButtons');

    //  startButton.addEventListener('click', gameStart);
    levelOne.addEventListener('click', difOne);
    levelTwo.addEventListener('click', difTwo);
    levelThree.addEventListener('click', difThree);

    $(levelChoice).append(levelOne, levelTwo, levelThree);
    $(startGame).append(startButton);

})

function difOne() {

    // Cards Array
    let cardArray = [{
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

    // Clear Grid
    $('#grid').html("");

    //  Select Grid
    let grid1 = $('#grid');
    $(grid1).attr('class', 'grid1');

    //  Score Display
    let scoreDisplay = document.getElementById('score');
    scoreDisplay.textContent = ` 0/${cardArray.length/2}`

    let selectedCards = [];
    let selectedCardsId = [];
    let cardsMatched = [];

    // Create Board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img');
            $(card).attr({
                'src': '../Matchup-Memory-Game/assets/images/star_card.png',
                'data-id': i
            });
            card.addEventListener('click', flipcard); 
                                                     // Place event lisener inside a start/timer function
            $(grid1).append(card);
        }
    }

    // Card Flip
    function flipcard() {
        let cardId = this.getAttribute('data-id');
        selectedCards.push(cardArray[cardId].name);
        selectedCardsId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (selectedCards.length === 2) {
            setTimeout(checkCards, 500);
        }
    }

    createBoard()

    // Check Cards
    function checkCards() {
        let cards = document.getElementsByTagName('img');
        let choiceOneId = selectedCardsId[0];
        let choiceTwoId = selectedCardsId[1];
        if (selectedCards[0] === selectedCards[1]) {
            alert('You found a match!')
            cards[choiceOneId].setAttribute('src', '../Matchup-Memory-Game/assets/images/blank_card.png');
            cards[choiceTwoId].setAttribute('src', '../Matchup-Memory-Game/assets/images/blank_card.png');
            cardsMatched.push(selectedCards);
            scoreDisplay.textContent = ` ${cardsMatched.length}/${cardArray.length/2}`;
            cards[choiceOneId].removeEventListener('click', flipcard);
            cards[choiceTwoId].removeEventListener('click', flipcard);
        } else {
            alert('Wrong match! Try again!')
            cards[choiceOneId].setAttribute('src', '../Matchup-Memory-Game/assets/images/star_card.png');
            cards[choiceTwoId].setAttribute('src', '../Matchup-Memory-Game/assets/images/star_card.png');
        }

        selectedCards = [];
        selectedCardsId = [];

        if (cardsMatched.length === cardArray.length / 2) {
            scoreDisplay.textContent = " Congratulations! You've completed difficulty level 1!";
        }
    }

}

difOne();

function difTwo() {

    // Cards Array
    let cardArray = [{
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
        },
        {
            name: 'blue',
            img: '../Matchup-Memory-Game/assets/images/blue_card.png'
        },
        {
            name: 'blue',
            img: '../Matchup-Memory-Game/assets/images/blue_card.png'
        },
        {
            name: 'green',
            img: '../Matchup-Memory-Game/assets/images/green_card.png'
        },
        {
            name: 'green',
            img: '../Matchup-Memory-Game/assets/images/green_card.png'
        },
        {
            name: 'pink',
            img: '../Matchup-Memory-Game/assets/images/pink_card.png'
        },
        {
            name: 'pink',
            img: '../Matchup-Memory-Game/assets/images/pink_card.png'
        },
        {
            name: 'purple',
            img: '../Matchup-Memory-Game/assets/images/purple_card.png'
        },
        {
            name: 'purple',
            img: '../Matchup-Memory-Game/assets/images/purple_card.png'
        },
        {
            name: 'red',
            img: '../Matchup-Memory-Game/assets/images/red_card.png'
        },
        {
            name: 'red',
            img: '../Matchup-Memory-Game/assets/images/red_card.png'
        },
        {
            name: 'yellow',
            img: '../Matchup-Memory-Game/assets/images/yellow_card.png'
        },
        {
            name: 'yellow',
            img: '../Matchup-Memory-Game/assets/images/yellow_card.png'
        },
    ]

    // Clear Grid
    $('#grid').html("");

    // Select Grid
    let grid2 = $('#grid');
    $(grid2).attr('class', 'grid2');

    // Score Display
    let scoreDisplay = document.getElementById('score');
    scoreDisplay.textContent = ` 0/${cardArray.length/2}`;

    let selectedCards = [];
    let selectedCardsId = [];
    let cardsMatched = [];

    // Create Board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img');
            $(card).attr({
                'src': '../Matchup-Memory-Game/assets/images/star_card.png',
                'data-id': i
            });
            card.addEventListener('click', flipcard);
            $(grid2).append(card);
        }
    }

    // Card Flip
    function flipcard() {
        let cardId = this.getAttribute('data-id');
        selectedCards.push(cardArray[cardId].name);
        selectedCardsId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (selectedCards.length === 2) {
            setTimeout(checkCards, 500);
        }
    }

    createBoard()

    // Check Cards
    function checkCards() {
        let cards = document.getElementsByTagName('img');
        let choiceOneId = selectedCardsId[0];
        let choiceTwoId = selectedCardsId[1];
        if (selectedCards[0] === selectedCards[1]) {
            cards[choiceOneId].setAttribute('src', '../Matchup-Memory-Game/assets/images/blank_card.png');
            cards[choiceTwoId].setAttribute('src', '../Matchup-Memory-Game/assets/images/blank_card.png');
            cardsMatched.push(selectedCards);
            scoreDisplay.textContent = ` ${cardsMatched.length}/${cardArray.length/2}`;
            cards[choiceOneId].removeEventListener('click', flipcard);
            cards[choiceTwoId].removeEventListener('click', flipcard);
            alert('You found a match!')
        } else {
            cards[choiceOneId].setAttribute('src', '../Matchup-Memory-Game/assets/images/star_card.png');
            cards[choiceTwoId].setAttribute('src', '../Matchup-Memory-Game/assets/images/star_card.png');
            alert('Wrong match! Try again!')
        }
        selectedCards = [];
        selectedCardsId = [];

        if (cardsMatched.length === cardArray.length / 2) {
            scoreDisplay.textContent = " Congratulations! You've completed difficulty level 2!";
        }
    }

}

function difThree() {

    // Cards Array
    let cardArray = [{
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
        },
        {
            name: 'blue',
            img: '../Matchup-Memory-Game/assets/images/blue_card.png'
        },
        {
            name: 'blue',
            img: '../Matchup-Memory-Game/assets/images/blue_card.png'
        },
        {
            name: 'green',
            img: '../Matchup-Memory-Game/assets/images/green_card.png'
        },
        {
            name: 'green',
            img: '../Matchup-Memory-Game/assets/images/green_card.png'
        },
        {
            name: 'pink',
            img: '../Matchup-Memory-Game/assets/images/pink_card.png'
        },
        {
            name: 'pink',
            img: '../Matchup-Memory-Game/assets/images/pink_card.png'
        },
        {
            name: 'purple',
            img: '../Matchup-Memory-Game/assets/images/purple_card.png'
        },
        {
            name: 'purple',
            img: '../Matchup-Memory-Game/assets/images/purple_card.png'
        },
        {
            name: 'red',
            img: '../Matchup-Memory-Game/assets/images/red_card.png'
        },
        {
            name: 'red',
            img: '../Matchup-Memory-Game/assets/images/red_card.png'
        },
        {
            name: 'yellow',
            img: '../Matchup-Memory-Game/assets/images/yellow_card.png'
        },
        {
            name: 'yellow',
            img: '../Matchup-Memory-Game/assets/images/yellow_card.png'
        },
        {
            name: 'A',
            img: '../Matchup-Memory-Game/assets/images/a_card.png'
        },
        {
            name: 'A',
            img: '../Matchup-Memory-Game/assets/images/a_card.png'
        },
        {
            name: 'B',
            img: '../Matchup-Memory-Game/assets/images/b_card.png'
        },
        {
            name: 'B',
            img: '../Matchup-Memory-Game/assets/images/b_card.png'
        },
        {
            name: 'C',
            img: '../Matchup-Memory-Game/assets/images/c_card.png'
        },
        {
            name: 'C',
            img: '../Matchup-Memory-Game/assets/images/c_card.png'
        },
        {
            name: 'D',
            img: '../Matchup-Memory-Game/assets/images/d_card.png'
        },
        {
            name: 'D',
            img: '../Matchup-Memory-Game/assets/images/d_card.png'
        },
        {
            name: 'E',
            img: '../Matchup-Memory-Game/assets/images/e_card.png'
        },
        {
            name: 'E',
            img: '../Matchup-Memory-Game/assets/images/e_card.png'
        },
        {
            name: 'F',
            img: '../Matchup-Memory-Game/assets/images/f_card.png'
        },
        {
            name: 'F',
            img: '../Matchup-Memory-Game/assets/images/f_card.png'
        },
    ]

    // Clear Grid
    $('#grid').html("");

    // Select Grid
    let grid3 = $('#grid');
    $(grid3).attr('class', 'grid3');

    // Score Display
    let scoreDisplay = document.getElementById('score');
    scoreDisplay.textContent = ` 0/${cardArray.length/2}`;

    let selectedCards = [];
    let selectedCardsId = [];
    let cardsMatched = [];

    // Create Board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img');
            $(card).attr({
                'src': '../Matchup-Memory-Game/assets/images/star_card.png',
                'data-id': i
            });
            card.addEventListener('click', flipcard);
            $(grid3).append(card);
        }
    }

    // Card Flip
    function flipcard() {
        let cardId = this.getAttribute('data-id');
        selectedCards.push(cardArray[cardId].name);
        selectedCardsId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (selectedCards.length === 2) {
            setTimeout(checkCards, 500);
        }
    }

    createBoard()

    // Check Cards
    function checkCards() {
        let cards = document.getElementsByTagName('img');
        let choiceOneId = selectedCardsId[0];
        let choiceTwoId = selectedCardsId[1];
        if (selectedCards[0] === selectedCards[1]) {
            cards[choiceOneId].setAttribute('src', '../Matchup-Memory-Game/assets/images/blank_card.png');
            cards[choiceTwoId].setAttribute('src', '../Matchup-Memory-Game/assets/images/blank_card.png');
            cardsMatched.push(selectedCards);
            scoreDisplay.textContent = ` ${cardsMatched.length}/${cardArray.length/2}`;
            cards[choiceOneId].removeEventListener('click', flipcard);
            cards[choiceTwoId].removeEventListener('click', flipcard);
            alert('You found a match!')
        } else {
            cards[choiceOneId].setAttribute('src', '../Matchup-Memory-Game/assets/images/star_card.png');
            cards[choiceTwoId].setAttribute('src', '../Matchup-Memory-Game/assets/images/star_card.png');
            alert('Wrong match! Try again!')
        }
        selectedCards = [];
        selectedCardsId = [];

        if (cardsMatched.length === cardArray.length / 2) {
            scoreDisplay.textContent = " Congratulations! You've completed difficulty level 3!";
        }
    }

}