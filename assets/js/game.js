// Menu Generator
document.addEventListener('DOMContentLoaded', () => {

    let gameInitiate = $('.startButton');
    let difficultyLevel = $('.levelChoice');

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

    menuArray[0].setAttribute('class', 'btn-success btn-lg menuButtons startGame');
    menuArray[1].setAttribute('class', 'btn-warning btn-lg menuButtons difOne');
    menuArray[2].setAttribute('class', 'btn-warning btn-lg menuButtons');
    menuArray[3].setAttribute('class', 'btn-warning btn-lg menuButtons');

    levelOne.addEventListener('click', difOne);
    levelTwo.addEventListener('click', difTwo);
    levelThree.addEventListener('click', difThree);

    levelOne.addEventListener('click', gameKey1);
    levelTwo.addEventListener('click', gameKey2);
    levelThree.addEventListener('click', gameKey3);

    $(difficultyLevel).append(levelOne, levelTwo, levelThree);
    $(gameInitiate).append(startButton);

    var option = [];
function gameKey1() {
    option = [];
    option.push('L1')
    $('.startGame').attr('id', `${option}`);
    console.log(option);
}
function gameKey2() {
    option = [];
    option.push('L2')
    $('.startGame').attr('id', `${option}`);
    console.log(option);
}
function gameKey3() {
    option = [];
    option.push('L3')
    $('.startGame').attr('id', `${option}`);
    console.log(option);
}

})

//  Timer - Taken from Sandra Israel-Ovirih and modified - referenced in sources 
let second = 0;
let minute = 0;
let timer = document.querySelector(".timer");
let interval;

function startTimer() {

    second = 0;
    minute = 0;

    interval = setInterval(function () {
        timer.innerHTML = minute + " mins " + second + " secs";
        second++;
        if (second == 60) {
            minute++;
            second = 0;
        }
        if (minute == 60) {
            hour++;
            minute = 0;
        }
        if (minute == 2) {
            clearInterval(interval);
        }

    }, 1000);
}

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

    clearInterval(interval);

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
            $(grid1).append(card);
        }
    }

    // // StartGame
    // $('.startGame').click(eventListeners);
    // $('.startGame').click(startTimer);

    // Add Event Listeners To Cards
    function eventListeners() {
        $('img').click(flipcard);
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
        return;
    }

}

// difOne();

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

    clearInterval(interval);

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
            $(grid2).append(card);
        }
    }

    // StartGame
    $('.startGame').click(eventListeners);
    $('.startGame').click(startTimer);

    // Add Event Listeners To Cards
    function eventListeners() {
        $('img').click(flipcard);
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

    clearInterval(interval);

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
            $(grid3).append(card);
        }
    }

    // StartGame
    $('.startGame').click(eventListeners);
    $('.startGame').click(startTimer);

    // Add Event Listeners To Cards
    function eventListeners() {
        $('img').click(flipcard);
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