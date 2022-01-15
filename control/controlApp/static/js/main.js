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
var cardCounter = 0
console.log("cardCounter = " + cardCounter)

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
    cardsRemaining = (liCardsInDeck.length)
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
        removeCardFromDeck()
        // creating id and li and adding class
        let newCardDiv = document.getElementById("createNewCardHere")
        let newUl = document.createElement("ul")
        //sets id of UL to newCardInHand, to be called for later use.
        newUl.setAttribute("id", ("newCardInHand" + cardsRemaining))
        newCardDiv.appendChild(newUl)
        newUl.classList.add("card");
        newUl.classList.add("rank-k");
        
        newUl.classList.add(drawnCard.name);
        
        console.log(drawnCard.name)   
        
        return drawnCard.name
}

// function for converting output of topCardOfDeck() into frontend reaction into your hand
function cardtoHand(x) {
    //Determining the card to pull from deck.
    let drawnCard = ObjectArray.pop()
    drawnCard.owner = x;
    PlayedArray.push(drawnCard)
    removeCardFromDeck()
    // creating id and li and adding class
    let newCardDiv = document.getElementById("createNewHandHere")
    let newUl = document.createElement("li")
    //sets id of UL to newCardInHand, to be called for later use.
    newUl.setAttribute("id", "newCardInHand" + cardsRemaining)
    newCardDiv.appendChild(newUl)
    newUl.classList.add("card");
    newUl.classList.add("rank-k");
    
    newUl.classList.add(drawnCard.name);
    newUl.setAttribute("onclick","createFocusedCard(this.id)");
    console.log(drawnCard.name)   
    return drawnCard.name
}
        // the x indicates that this card is going into player one's hand.
        //This variable should be redefined in main scope of main.js. It defaulted to one here for testing purposes.
function drawFromDeck() {
    drawCard(x);
    

}

function addPadding() {
    let disId = document.getElementById("usee")
    disId.classList.add("tempPadding")
}

function toggleHandDisplay() {
    let thisId = document.getElementById("currentSpotForHand")
    thisId.classList.remove("rotateHand")
    thisId.classList.add("faceImages")
    let thisNewId = document.getElementById("toggleMeDaddy")
    thisNewId.setAttribute("onclick", "toggleHandDisplayBack()")

}

function toggleHandDisplayBack() {
    let thisId = document.getElementById("currentSpotForHand")
    thisId.classList.remove("faceImages")
    thisId.classList.add("rotateHand")
    let thisNewId = document.getElementById("toggleMeDaddy")
    thisNewId.setAttribute("onclick", "toggleHandDisplay()")


}

// function drawCardtoHand() {
//     cardtoHand(1);
    
// }
//basically just makes a big card in your face
function createFocusedCard(clicked_id) {
    //what is the card we are pulling?
    let thisId = document.getElementById(clicked_id)
    let cardClassess = thisId.className
    let cardClassezz = cardClassess.split(" ")
    console.log(cardClassezz[2])
    let thisIsThisCard = cardClassezz[2]
    // creating id and li and adding class/id
    let newCardDiv = document.getElementById("createFocusedCardHere")
    let testtest = document.getElementById("focusCardButton")
    let newUl = document.createElement("li")

    
        //first button
        let firstButLi = document.createElement("li")
        testtest.appendChild(firstButLi)
        firstButLi.setAttribute("id", "iGo2")
        let newerDiv = document.createElement("div")
        firstButLi.appendChild(newerDiv)
        firstButLi.classList.add("slideRight")
        newerDiv.classList.add("button_slide")
        newerDiv.classList.add("slide_down")
       
        //text in first button
        var text = document.createTextNode("Play Card")
            newerDiv.appendChild(text)



        // second button
        let secondButLi = document.createElement("li")
        testtest.appendChild(secondButLi)
        secondButLi.setAttribute("id", "iGo1")
        let newestDiv = document.createElement("div")
        secondButLi.appendChild(newestDiv)
        secondButLi.classList.add("slideRightLess")

        newestDiv.classList.add("button_slide")
        newestDiv.classList.add("slide_down")
        //text in second button
        var textt = document.createTextNode("Activate Card")
        newestDiv.appendChild(textt)


    // sets id of UL to newCardInHand, to be called for later use.
    newUl.setAttribute("id", "focusedCard")
    testtest.appendChild(newUl)
    newUl.classList.add("bigCard");
    newUl.classList.add("rank-k");
    
    newUl.classList.add(thisIsThisCard);
    newUl.setAttribute("onclick","removeFocusedCard()");
    console.log(thisIsThisCard)   
    return thisIsThisCard
}


// function focusCard(clicked_id) {
//     //what is the card we are pulling?
//     let thisId = document.getElementById(clicked_id)
//     let cardClassess = thisId.className
//     let cardClassezz = cardClassess.split(" ")
//     console.log(cardClassezz[2])

//     console.log(clicked_id)

// }

function removeFocusedCard() {
    let removeThis = document.getElementById("focusedCard")
    let removeThis2 = document.getElementById("iGo2")
    let removeThis3 = document.getElementById("iGo1")
    removeThis.remove()
    removeThis2.remove()
    removeThis3.remove()
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