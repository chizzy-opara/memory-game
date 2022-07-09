const cards = document.querySelectorAll('.wrapper__card'); //makes a list of all wrapper__card elements and store in a card const

let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

function flipCard() {  //flipcard function
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

        // do cards match?
        checkForMatch();
}

function checkForMatch() { 
    let cardMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    cardMatch ? disableCards() : unflipCards();

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

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

cards.forEach(card => card.addEventListener('click', flipCard));  //loops throgh the list,listens for a click event, and executes a function named flipCard whenever the event is fired.