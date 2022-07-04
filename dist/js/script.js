// function onClicked(e) {
//     const target = e.currentTarget;
//     // console.log(target.className);
//     // console.log('clicked', e.currentTarget);
//     target.className = target.className
//         .replace('hidden','')
//         .trim();
// }
// function myFunction(event) { 
//     alert(event.target.nodeName);
// }

const cards = document.querySelectorAll('.wrapper__card'); //makes a list of all wrapper__card elements and store in a card const

function flipCard() {  //flipcard function
    console.log('i was clicked');
    console.log(this);
    this.classList.toggle('flip');  //accesses the classlist of the wrapper__card and toggles the flip class.
    // 'this' keyword represents the element that fired the event
    // toggle means 'if the class is there, remove it,if its not,add it.
}

cards.forEach(card => card.addEventListener('click', flipCard))  //loops throgh the list,listens for a click event, and executes a function named flipCard whenever the event is fired.