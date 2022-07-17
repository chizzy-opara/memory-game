const cards = document.querySelectorAll('.wrapper__card'); //makes a list of all wrapper__card elements and store in a cards const
let imageList = [
    '/assets/shaggi.webp',
    '/assets/sabinus.webp',
    '/assets/davido.jpeg',
    '/assets/cuppy.png',
    '/assets/james.webp',
    '/assets/dija.jpg',
    '/assets/idibia.jpg',
    '/assets/tiwa.jpg',
    '/assets/shaggi.webp',
    '/assets/sabinus.webp',
    '/assets/davido.jpeg',
    '/assets/cuppy.png',
    '/assets/james.webp',
    '/assets/dija.jpg',
    '/assets/idibia.jpg',
    '/assets/tiwa.jpg',
];

let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;
let combosFound = 0;
let maxCombos = 8;
let initialMove = 0;
let totalMoves = 18;
let remMoves = totalMoves;

function reshuffleCards () {
    imageList.sort(() => Math.random() - 0.5)
    cards.forEach( (card, index) => {
        const imgEl = card.querySelector('.back-face');
        imgEl.src = imageList[index];
    });
}

function flipCard() {  //flipcard function
    if (remMoves === 0) 
        return alert('GAME OVER');
    if (lockBoard) return;
    if (this === firstCard) return;


    // this.classList.toggle('flip');  //accesses the classlist of the wrapper__card and toggles the flip class.
    // 'this' keyword represents the element that fired the event
    // toggle means 'if the class is there, remove it,if its not,add it.
    this.classList.add('flip');

    if (!hasFlippedCard) {
        //first click
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
        //second click
        hasFlippedCard = false;
        secondCard = this;

        initialMove++;
        remMoves--;
        const movesEl = document.querySelector('#moves');
        movesEl.innerHTML = remMoves;

        // do cards match?
        checkForMatch();
}

function checkForMatch() {
    const imgEl = firstCard.querySelector('.back-face'); 
    const imgEl2 = secondCard.querySelector('.back-face'); 
    let cardMatch = imgEl.src === imgEl2.src;

    cardMatch ? disableCards() : unflipCards();

    if (cardMatch) {
        combosFound ++;
        if (combosFound === maxCombos) {
            alert('YOU WIN');
        } else {
            let remMatches = maxCombos - combosFound
            setTimeout(() => {
                alert(`${remMatches} matches to win!`)
            }, 300);    
        }
    }

    //itenary operator allows to write an if else block in just one line
    //  condition? expr1(true) : expre2(false);
}

function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    lockBoard = true;


    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 500);
}

function winBoard() {
    
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}
reshuffleCards();

cards.forEach(card => card.addEventListener('click', flipCard));  //loops throgh the list,listens for a click event, and executes a function named flipCard whenever the event is fired.
