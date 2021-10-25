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

    let grid = $('grid'); 

    // Create Board
    $.each(cardArray, function() {
        let card = document.createElement('img')
        let i = cardArray.index
        card.attr({'src':'../images/blank_card.png', 'data-id':i})
        
    })
    

 })
