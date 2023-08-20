let cardData = [
  [ {
    front: "hello"
  }]

];

let deckName = [];

document.querySelector('.create-deck').addEventListener('click', () => {
    let html = ""
    let name = prompt('Deck Name:');
    
    deckName.push(name);
    for(let i = 0; i < deckName.length; i++) {
        html += `<div class = "decke"> ${deckName[i]} </div>`;
    }
    console.log(html);
    document.querySelector('.decks').innerHTML = html;
})