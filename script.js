function shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }


function handleCardClick() {
    const front = this.querySelector('.front');
    const back = this.querySelector('.back');

    if (front.style.display === "none") {
        front.style.display = "block"; // Show the front
        back.style.display = "none"; // Hide the back
    } else {
        front.style.display = "none"; // Hide the front
        back.style.display = "block"; // Show the back
    }
}

let deck = [];
let excludeCards = [127151, 127152]
const cardBack = "& #"

for(let i = 127137; i < 127137 + 62; i++) {
    if (excludeCards.includes(i)){
        continue;
    }
    let cardString = `&#${i};`;
    deck.push(cardString);
    let newNode = document.createElement('div');
    newNode.className = 'card'
    newNode.id = i;
    newNode.innerHTML = cardString;
    //document.body.appendChild(newNode)
}


console.log(deck)

let cardChoice = deck.slice(0,10);
let gameCards = [];

for (let card of cardChoice) {
    gameCards.push(card);
    gameCards.push(card);
}

shuffle(gameCards);

// Get the card container element
const cardContainer = document.getElementById('card-container');

// Append cards to the card container instead of the body
for (let card of gameCards) {
    let newNode = document.createElement('div');
    let frontNode = document.createElement('div');
    let backNode = document.createElement('div');

    newNode.className = 'card';
    frontNode.className = 'front';
    backNode.className = 'back';

    frontNode.innerHTML = card; // Use the correct card value
    backNode.innerHTML = "&#x1F0A0"; // Use the correct card value

    frontNode.style.display = "none"; // Initially hide the front
    backNode.style.display = "block"; // Show the back

    newNode.appendChild(frontNode); // Append to the container
    newNode.appendChild(backNode); // Append to the container

    newNode.addEventListener('click', handleCardClick);

    cardContainer.appendChild(newNode); // Append to the container
}

//let cardElement = document.getElementById('#currentCard');
//cardElement.innerHTML = deck(0);

