/*jshint esversion: 6 */
/*globals $:false */
/*globals menuArray:false */
/*globals hour:false */
/*jshint -W020 */ 
// Menu Generator
document.addEventListener('DOMContentLoaded', () => {
    let gameInitiate = $('.startButton');
    let resetTime = $('.resetButton');
    let difficultyLevel = $('.levelChoice');
    let instructions = $('.instructions');

    let startButton = document.createElement('button');
    let resetButton = document.createElement('button');
    let levelOne = document.createElement('button');
    let levelTwo = document.createElement('button');
    let levelThree = document.createElement('button');

    startButton.innerHTML = "Start";
    resetButton.innerHTML = 'Reset Game';
    levelOne.innerHTML = "Difficulty Level 1";
    levelTwo.innerHTML = "Difficulty Level 2";
    levelThree.innerHTML = "Difficulty Level 3";

    menuArray = [
        startButton,
        resetButton,
        levelOne,
        levelTwo,
        levelThree
    ];

    menuArray[0].setAttribute('class', 'btn-success btn-lg menuButtons startGame');
    menuArray[1].setAttribute('class', 'btn-danger btn-lg menuButtons resetButton');
    menuArray[2].setAttribute('class', 'btn-warning btn-lg menuButtons difOne');
    menuArray[3].setAttribute('class', 'btn-warning btn-lg menuButtons difTwo');
    menuArray[4].setAttribute('class', 'btn-warning btn-lg menuButtons difThree');

    $(difficultyLevel).append(levelOne, levelTwo, levelThree);
    $(gameInitiate).append(startButton);
    $(resetTime).append(resetButton);

    // Menu Event Listeners
    levelOne.addEventListener('click', gameKey1);
    levelTwo.addEventListener('click', gameKey2);
    levelThree.addEventListener('click', gameKey3);

    levelOne.addEventListener('click', difOne);
    levelTwo.addEventListener('click', difTwo);
    levelThree.addEventListener('click', difThree);

    // Timer Controls
    $('.difOne, .difTwo, .difThree').click(function pauseTimer(a) {
        a.preventDefault();
        reset = true;
    });

    $(startButton).click(function playTimer(b) {
        b.preventDefault();
        reset = false;
    });

    // Reset Button
    $(resetButton).click(function resetTimer(c) {
        c.preventDefault();
        minute = 0;
        second = 0;
        setTimeout(() => {
            reset = true;
        }, 1000);

        if (option == 'L1') {
            functionLimitOne = [];
            difOne();
            functionLimitOne++;
        } else if (option == 'L2') {
            functionLimitTwo = [];
            difTwo();
            functionLimitTwo++;
        } else if (option == 'L3') {
            functionLimitThree = [];
            difThree();
            functionLimitThree++;
        }

    });

    // Instructions
    let instructionsBox = "<h4>Instructions!</h4><p>To play, select a difficulty level which will load a number of cards. Press 'Start' to begin the timer and try to match them all before time runs out! Don't worry, you can always reset the timer and try again using the 'Reset Game' button.</p>";
    instructions.append(instructionsBox);

    difOne();
    gameKey1();

});

// Difficulty Select Key
let option = [];

function gameKey1() {
    option = [];
    option.push('L1');
}

function gameKey2() {
    option = [];
    option.push('L2');
}

function gameKey3() {
    option = [];
    option.push('L3');
}

//  Timer - Taken from Sandra Israel-Ovirih and modified - referenced in sources 
let second = 0;
let minute = 0;
let timerDisplay = document.querySelector(".timer");
let reset = true;

setInterval(function timer() {

    if (reset) {
        return;
    } else {
        timerDisplay.innerHTML = minute + " mins " + second + " secs";
        second++;
        if (second == 60) {
            minute++;
            second = 0;
        }
        if (minute == 60) {
            hour++;
            minute = 0;
        }
        if (minute == 4 && second == 1) {
            reset = true;
            alert('Out of time! Hit reset to try again!');

        }
    }
}, 1000);

// Difficulty Level One
let functionLimitOne = [];

function difOne() {

    functionLimitTwo = [];
    functionLimitThree = [];
    functionLimitOne++;

    if (functionLimitOne > 1) {
        return;
    } else {

        let selectedCards = [];
        let selectedCardsId = [];
        let scoreTrack1 = 0;

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
        ];

        cardArray.sort(() => 0.5 - Math.random());

        // Clear Grid
        $('#grid').html("");

        //  Select Grid
        let grid1 = $('#grid');
        $(grid1).attr('class', 'grid1');

        //  Score Display
        let scoreDisplay = document.getElementById('score');
        scoreDisplay.textContent = ` 0/${cardArray.length/2}`;

        // Create Board
        let createBoard = function () {
            for (let i = 0; i < cardArray.length; i++) {
                let card = document.createElement('img');
                $(card).attr({
                    'src': '../Matchup-Memory-Game/assets/images/star_card.png',
                    'data-id': i,
                });
                $(grid1).append(card);
            }
        };

        createBoard();

        // Add Event Listeners To Cards
        let eventListeners = function eventListeners() {
            if (option == 'L1') {
                $('img').off('click').on('click', flipcard);
            }
        };

        // StartGame
        $('.startGame').click(eventListeners);

        // Card Flip
        let flipcard = function flipcard() {
            let cardId = this.getAttribute('data-id');
            selectedCards.push(cardArray[cardId].name);
            selectedCardsId.push(cardId);
            this.setAttribute('src', cardArray[cardId].img);
            if (selectedCards.length === 2) {
                setTimeout(checkCards, 500);
            }
        };

        // Check Cards
        let checkCards = function checkCards() {
            let cards = document.getElementsByTagName('img');
            let choiceOneId = selectedCardsId[0];
            let choiceTwoId = selectedCardsId[1];
            if ((selectedCards[0] === selectedCards[1]) && (selectedCardsId[0] !== selectedCardsId[1])) {
                cards[choiceOneId].setAttribute('src', '../Matchup-Memory-Game/assets/images/blank_card.png');
                cards[choiceTwoId].setAttribute('src', '../Matchup-Memory-Game/assets/images/blank_card.png');
                scoreTrack1++;
                $(cards[choiceOneId]).off('click', flipcard);
                $(cards[choiceTwoId]).off('click', flipcard);
                scoreDisplay.textContent = ` ${scoreTrack1}/${cardArray.length/2}`;
                alert('Correct match!');
            } else {
                alert('Wrong match! Try again!');
                cards[choiceOneId].setAttribute('src', '../Matchup-Memory-Game/assets/images/star_card.png');
                cards[choiceTwoId].setAttribute('src', '../Matchup-Memory-Game/assets/images/star_card.png');
            }

            selectedCards = [];
            selectedCardsId = [];

            if (scoreTrack1 === cardArray.length / 2) {
                reset = true;
                scoreDisplay.textContent = " Congratulations! You've completed difficulty level 1!";
            }

        };
    }

}

// Difficulty Level Two
let functionLimitTwo = [];

function difTwo() {

    functionLimitOne = [];
    functionLimitThree = [];
    functionLimitTwo++;

    if (functionLimitTwo > 1) {
        return;
    } else {

        let selectedCards = [];
        let selectedCardsId = [];
        let scoreTrack2 = 0;

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
        ];

        cardArray.sort(() => 0.5 - Math.random());

        // Clear Grid
        $('#grid').html("");

        // Select Grid
        let grid2 = $('#grid');
        $(grid2).attr('class', 'grid2');

        // Score Display
        let scoreDisplay = document.getElementById('score');
        scoreDisplay.textContent = ` 0/${cardArray.length/2}`;

        // Create Board
        let createBoard = function createBoard() {
            for (let i = 0; i < cardArray.length; i++) {
                let card = document.createElement('img');
                $(card).attr({
                    'src': '../Matchup-Memory-Game/assets/images/star_card.png',
                    'data-id': i
                });
                $(grid2).append(card);
            }
        };

        createBoard();

        // Add Event Listeners To Cards
        let eventListeners = function eventListeners() {
            if (option == 'L2') {
                $('img').off('click').on('click', flipcard);
            }
        };

        // StartGame
        $('.startGame').click(eventListeners);

        // Card Flip
        let flipcard = function flipcard() {
            let cardId = this.getAttribute('data-id');
            selectedCards.push(cardArray[cardId].name);
            selectedCardsId.push(cardId);
            this.setAttribute('src', cardArray[cardId].img);
            if (selectedCards.length === 2) {
                setTimeout(checkCards, 500);
            }
        };

        // Check Cards
        let checkCards = function checkCards() {
            let cards = document.getElementsByTagName('img');
            let choiceOneId = selectedCardsId[0];
            let choiceTwoId = selectedCardsId[1];
            if ((selectedCards[0] === selectedCards[1]) && (selectedCardsId[0] !== selectedCardsId[1])) {
                cards[choiceOneId].setAttribute('src', '../Matchup-Memory-Game/assets/images/blank_card.png');
                cards[choiceTwoId].setAttribute('src', '../Matchup-Memory-Game/assets/images/blank_card.png');
                scoreTrack2++;
                $(cards[choiceOneId]).off('click', flipcard);
                $(cards[choiceTwoId]).off('click', flipcard);
                scoreDisplay.textContent = ` ${scoreTrack2}/${cardArray.length/2}`;
                alert('Correct match!');
            } else {
                cards[choiceOneId].setAttribute('src', '../Matchup-Memory-Game/assets/images/star_card.png');
                cards[choiceTwoId].setAttribute('src', '../Matchup-Memory-Game/assets/images/star_card.png');
                alert('Wrong match! Try again!');
            }
            selectedCards = [];
            selectedCardsId = [];

            if (scoreTrack2 === cardArray.length / 2) {
                reset = true;
                scoreDisplay.textContent = " Congratulations! You've completed difficulty level 2!";
            }
        };
    }
}

// Difficulty Level Three
let functionLimitThree = [];

function difThree() {

    functionLimitOne = [];
    functionLimitTwo = [];
    functionLimitThree++;

    if (functionLimitThree > 1) {
        return;
    } else {

        let selectedCards = [];
        let selectedCardsId = [];
        let scoreTrack3 = 0;

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
        ];

        cardArray.sort(() => 0.5 - Math.random());

        // Clear Grid
        $('#grid').html("");

        // Select Grid
        let grid3 = $('#grid');
        $(grid3).attr('class', 'grid3');

        // Score Display
        let scoreDisplay = document.getElementById('score');
        scoreDisplay.textContent = ` 0/${cardArray.length/2}`;

        // Create Board
        let createBoard = function createBoard() {
            for (let i = 0; i < cardArray.length; i++) {
                let card = document.createElement('img');
                $(card).attr({
                    'src': '../Matchup-Memory-Game/assets/images/star_card.png',
                    'data-id': i,
                });
                $(grid3).append(card);
            }
        };

        createBoard();

        // Add Event Listeners To Cards
        let eventListeners = function eventListeners() {
            if (option == 'L3') {
                $('img').off('click').on('click', flipcard);
            }
        };

        // StartGame
        $('.startGame').click(eventListeners);

        // Card Flip
        let flipcard = function flipcard() {
            let cardId = this.getAttribute('data-id');
            selectedCards.push(cardArray[cardId].name);
            selectedCardsId.push(cardId);
            this.setAttribute('src', cardArray[cardId].img);
            if (selectedCards.length === 2) {
                setTimeout(checkCards, 500);
            }
        };

        // Check Cards
        let checkCards = function checkCards() {
            let cards = document.getElementsByTagName('img');
            let choiceOneId = selectedCardsId[0];
            let choiceTwoId = selectedCardsId[1];
            if ((selectedCards[0] === selectedCards[1]) && (selectedCardsId[0] !== selectedCardsId[1])) {
                cards[choiceOneId].setAttribute('src', '../Matchup-Memory-Game/assets/images/blank_card.png');
                cards[choiceTwoId].setAttribute('src', '../Matchup-Memory-Game/assets/images/blank_card.png');
                scoreTrack3++;
                $(cards[choiceOneId]).off('click', flipcard);
                $(cards[choiceTwoId]).off('click', flipcard);
                scoreDisplay.textContent = ` ${scoreTrack3}/${cardArray.length/2}`;
                alert('Correct match!');
            } else {
                cards[choiceOneId].setAttribute('src', '../Matchup-Memory-Game/assets/images/star_card.png');
                cards[choiceTwoId].setAttribute('src', '../Matchup-Memory-Game/assets/images/star_card.png');
                alert('Wrong match! Try again!');
            }
            selectedCards = [];
            selectedCardsId = [];

            if (scoreTrack3 === cardArray.length / 2) {
                reset = true;
                scoreDisplay.textContent = " Congratulations! You've completed difficulty level 3!";
            }
        };
    }
}