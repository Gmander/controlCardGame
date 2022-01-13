//This is the creation of the deck.
var CardArray = [singularity, rift,timeStop,futureShift,exoticMatter, forceField, deflector, reactor,wormhole, nova,darkEnergy, antimatter]

var ObjectArray = []
var PlayedArray = []

CardArray = shuffle(CardArray)

var Alength= CardArray.length

//builds all objects based on name array, places them in objectarray
for(let x =0 ; x<Alength; x++){
    
     var newcard = CardArray.pop()
     ObjectArray.push(build(newcard))

    //  console.log(x)//
    
}

x=1

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
    newUl.classList.add("nova");

        // creating id and first span and adding class and content
    // let newCardSpanOne = document.createElement("span")
    // newCardSpanOne.setAttribute("id", "newFirstSpan")
    // newUl.appendChild(newCardSpanOne)
    // newCardSpanOne.classList.add("rank");
    // const newCardRank = document.createTextNode("K");
    // newCardSpanOne.appendChild(newCardRank);
    
        // creating id and first span and adding class and content
    // let newCardSpanTwo = document.createElement("span")
    // newCardSpanTwo.setAttribute("id", "newSecondSpan")
    // newUl.appendChild(newCardSpanTwo)
    // newCardSpanTwo.classList.add("suit");
    // const newCardSuit = document.createTextNode("♥");
    // newCardSpanTwo.appendChild(newCardSuit);

}

function removeCardFromDeck() {    
    let theDeck = document.getElementById("deck")

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

// function for converting output of topCardOfDeck() into frontend reaction
function drawCard(x) {
        //Determining the card to pull from deck.
        let drawnCard = ObjectArray.pop()
        drawnCard.owner = x;
        PlayedArray.push(drawnCard)
        
        // creating id and li and adding class
        let newCardDiv = document.getElementById("createNewCardHere")
        let newUl = document.createElement("ul")
        //sets id of UL to newCardInHand, to be called for later use.
        newUl.setAttribute("id", "newCardInHand")
        newCardDiv.appendChild(newUl)
        newUl.classList.add("card");
        newUl.classList.add("rank-k");
        
        newUl.classList.add(drawnCard.name);
        
        console.log(drawnCard.name)   
        return drawnCard.name
}
        // the x indicates that this card is going into player one's hand.
        //This variable should be redefined in main scope of main.js. It defaulted to one here for testing purposes.
function drawFromDeck() {
    drawCard(x);
    removeCardFromDeck()

}

// console.log(drawnCard)

// function drawCard(x){
//     let drawnCard = ObjectArray.pop()
//     drawnCard.owner = x;
//     PlayedArray.push(drawnCard)
//   }


function pushCardClass() {
    // let CardClass = this.firstChild.nodeName
    let elementOfCard = document.getElementById("hand")
    let cardClasses = elementOfCard.firstElementChild.className
    console.log(elementOfCard.firstElementChild)
    console.log(cardClasses)
    const cardClassed = cardClasses.split(" ")
   console.log(cardClassed[2])

}

function run(x) {
    x()
}

function testt() {
    let box = "pushCardClass"
    let mark = window[box]
    console.log(mark)
    // let bark = window["pushCardClass"]
    // console.log(bark)
    // bark()
    mark()
}