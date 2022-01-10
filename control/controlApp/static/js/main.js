// This version of Draw takes an existing list of ul, div, and spans, then adds the classes and text after. 
// only usefull with something else dictating what classes, and with a loop iterating through the set if ul, div, and spans
function addCardToHand() {
    // getting id for li and adding class
    let card = document.getElementById("handdiv");
    card.classList.add("card");
    card.classList.add("rank-k");
    card.classList.add("change this");

// getting id for first span and adding class and content
    let cardSpanOne = document.getElementById("1span");
    cardSpanOne.classList.add("rank");
    const newCardRank = document.createTextNode("K");
    cardSpanOne.appendChild(newCardRank);

// getting id for second span and adding class and content
    let cardSpanTwo = document.getElementById("2span");
    cardSpanTwo.classList.add("suit")
    const newCardSuit = document.createTextNode("♥");
    cardSpanTwo.appendChild(newCardSuit);

}

function createCardInHand() {
    // creating id and li and adding class
    let newCardDiv = document.getElementById("createNewCardHere")
    let newUl = document.createElement("ul")
    newUl.setAttribute("id", "newHandDiv")
    newCardDiv.appendChild(newUl)
    newUl.classList.add("card");
    newUl.classList.add("rank-k");
    newUl.classList.add("hearts");

    // creating id and first span and adding class and content
    let newCardSpanOne = document.createElement("span")
    newCardSpanOne.setAttribute("id", "newFirstSpan")
    newUl.appendChild(newCardSpanOne)
    newCardSpanOne.classList.add("rank");
    const newCardRank = document.createTextNode("K");
    newCardSpanOne.appendChild(newCardRank);
    
    // creating id and first span and adding class and content
    let newCardSpanTwo = document.createElement("span")
    newCardSpanTwo.setAttribute("id", "newSecondSpan")
    newUl.appendChild(newCardSpanTwo)
    newCardSpanTwo.classList.add("suit");
    const newCardSuit = document.createTextNode("♥");
    newCardSpanTwo.appendChild(newCardSuit);

}

function removeCardFromDeck() {
    // let theDeck = document.getElementById("deck")

    // let testtt = document.getElementsByTagName("ul")[1].getElementsByTagName("li")[0]
    // const newCardDank = document.createTextNode("Kadfkjajlsdfjasdfkj");
    // testtt.remove();
    
    let theDeck = document.getElementById("deck")
    

    // let testtt = document.getElementsByTagName("ul")[1].getElementsByTagName("li")[0]
    // let numCardsInDeck = document.getElementsByTagName("ul")[1].getElementsByTagName('li');
    // console.log(numCardsInDeck)
    // console.log(numCardsInDeck.length)

    let testtt = document.getElementsByTagName("ul")[1].getElementsByTagName("li")[0]
    let liCardsInDeck = document.getElementsByTagName("ul")[1].getElementsByTagName('li');
    let numCardsInDeck = document.getElementsByTagName("ul")[1].length;
    // console.log(liCardsInDeck)
    console.log(liCardsInDeck.length)
    if (liCardsInDeck.length < 1)
    console.log("the end")
    else 
    testtt.remove();
    
    // let testt = testtt.document.getElementsByTagName("li")[0]
    // theDeck.removeChild(testt)
}