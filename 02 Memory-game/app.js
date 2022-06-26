const cardArray = [
    {
        name: 'headphones',
        img: 'images/headphones.png',
    },
    {
        name: 'map',
        img: 'images/map.png',
    },
    {
        name: 'megaphone',
        img: 'images/megaphone.png',
    },
    {
        name: 'mobile',
        img: 'images/mobile.png',
    },
    {
        name: 'pencil',
        img: 'images/pencil.png',
    },
    {
        name: 'unbrella',
        img: 'images/umbrella.png',
    },
    {
        name: 'headphones',
        img: 'images/headphones.png',
    },
    {
        name: 'map',
        img: 'images/map.png',
    },
    {
        name: 'megaphone',
        img: 'images/megaphone.png',
    },
    {
        name: 'mobile',
        img: 'images/mobile.png',
    },
    {
        name: 'pencil',
        img: 'images/pencil.png',
    },
    {
        name: 'unbrella',
        img: 'images/umbrella.png',
    },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');

let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);
    }
}

createBoard();

function flipCard() {
    console.log(cardArray);
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);

    console.log(cardsChosen);
    this.setAttribute('src', cardArray[cardId].img);

    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    const cards = document.querySelectorAll('#grid img')
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

    if (optionOneId == optionTwoId) {
        alert('You have clicked the same image!');
    }
    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!');
        cards[optionOneId].setAttribute('src', 'images/white.png');
        cards[optionTwoId].setAttribute('src', 'images/white.png');
        cards[optionOneId].removeEventListener('clicks', flipCard);
        cards[optionTwoId].removeEventListener('clicks', flipCard);

        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
    }

    cardsChosen = [];
    cardsChosenIds = [];

    if (cardsWon.length == cardArray.length / 2) {
        resultDisplay.innerHTML = 'Congratulations!';
    }
}