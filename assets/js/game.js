 document.addEventListener('DOMContentLoaded', () => {

    // Cards included in this level
    let cardArray = [
        {
            name: '1',
            img: '../images/1_card.png'
        },
        {
            name: '1',
            img: '../images/1_card.png'
        },
        {
            name: '2',
            img: '../images/2_card.png'
        },
        {
            name: '2',
            img: '../images/2_card.png'
        },
        {
            name: '3',
            img: '../images/3_card.png'
        },
        {
            name: '3',
            img: '../images/3_card.png'
        },
        {
            name: '4',
            img: '../images/4_card.png'
        },
        {
            name: '4',
            img: '../images/4_card.png'
        },
        {
            name: '5',
            img: '../images/5_card.png'
        },
        {
            name: '5',
            img: '../images/5_card.png'
        },
        {
            name: '6',
            img: '../images/6_card.png'
        },
        {
            name: '6',
            img: '../images/6_card.png'
        }
    ]

    let grid = $('.grid'); 

    // Create Board
    $.each(cardArray, function () {
        let i = cardArray.index
        let card = document.createElement('img')
        $(card).attr({'src':'../Matchup-Memory-Game/assets/images/star_card.png', 'data-id':i})
        // $('.card').click(flipcard());
        $(grid).append(card);
        console.log(card[i])
    })

 })
