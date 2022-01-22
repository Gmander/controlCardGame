function realRemoveCardFromDeck() {    
    let testz = document.getElementById("createDeckHere")

    let theDeckz = document.getElementsByTagName("ul")[0].getElementsByTagName("li")[0]
    let liCardsInDeck = document.getElementsByTagName("ul")[0].getElementsByTagName('li');
    let numCardsInDeck = document.getElementsByTagName("ul")[0].length;
    // console.log(liCardsInDeck)
    cardsRemaining = (liCardsInDeck.length)
    console.log(liCardsInDeck.length)
    if (liCardsInDeck.length < 1)
    console.log("the end")
    else 
    theDeckz.remove();
    
    // let testt = testtt.document.getElementsByTagName("li")[0]
    // theDeck.removeChild(testt)
}

// Custome Right Click menu
// if (document.addEventListener) {
//     document.addEventListener('contextmenu', function(e) {
//       alert("You've tried to open context menu"); //here you draw your own menu
//       e.preventDefault();
//     }, false);
//   } else {
//     document.attachEvent('oncontextmenu', function() {
//       alert("You've tried to open context menu");
//       window.event.returnValue = false;
//     });
//   }



var varNums = 1
function counterfun() {
  console.log(varNums)
    varNums++
    console.log(varNums)
}
function cardtoHandReal(x) {
    //Determining the card to pull from deck.
    let drawnCard = ObjectArray.pop()
    deckCounter = ObjectArray.length
    drawnCard.owner = x;
    PlayedArray.push(drawnCard)
    realRemoveCardFromDeck()
    // creating id and li and adding class
    let newCardDiv = document.getElementById("createNewHandHere")
    let newUl = document.createElement("li")
    counterfun()
    //sets id of UL to newCardInHand, to be called for later use.
    newUl.setAttribute("id", "newCardInHand" + varNums)
    newCardDiv.appendChild(newUl)
    newUl.classList.add("card");
    newUl.classList.add("rank-k");
    
    newUl.classList.add(drawnCard.name);
    newUl.classList.add(turnCount);
    newUl.setAttribute("onmouseover","createFocusedCard(this.id)");
    newUl.setAttribute("onclick","placeCardOnBoard(this.id)");
    newUl.setAttribute("onmouseout","removeFocusedCard()");
    
    console.log(drawnCard.name)   
    return drawnCard.name
}

function swapBoardId() {
    let b0 = document.getElementById("player0Board")
    let b1 = document.getElementById("player1Board")
    b0.setAttribute("id", "temp")
    b1.setAttribute("id", "player0Board")
    b0.setAttribute("id", "player1Board")

}


function cardtoHandFake(x) {
    //Determining the card to pull from deck.
    let drawnCard = ObjectArray.pop()
    deckCounter = ObjectArray.length
    drawnCard.owner = x;
    PlayedArray.push(drawnCard)
    realRemoveCardFromDeck()
    // creating id and li and adding class
    let newCardDiv = document.getElementById("createNewHandHere")
    let newUl = document.createElement("li")
    counterfun()
    //sets id of UL to newCardInHand, to be called for later use.
    newUl.setAttribute("id", "newCardInHand" + varNums)
    // newCardDiv.appendChild(newUl)
    newUl.classList.add("card");
    newUl.classList.add("rank-k");
    
    newUl.classList.add(drawnCard.name);
    newUl.classList.add(1);
    newUl.setAttribute("onmouseover","createFocusedCard(this.id)");
    newUl.setAttribute("onclick","placeCardOnBoard(this.id)");
    newUl.setAttribute("onmouseout","removeFocusedCard()");
    
    console.log("this is " + drawnCard.name)   
    return drawnCard.name
}


 var counterrr = 0
function placeCardOnBoard(clicked_id) {
    console.log(counterrr)
    onPlay(clicked_id)
    let thisId = document.getElementById(clicked_id)
    console.log(clicked_id)
    let clone = thisId.cloneNode(true)
    thisId.remove()
    // let newPlace = document.getElementById("p0BoardSlotOne")
    let newPlaceThing = document.getElementById("player" + turnCount + "Board")

    let newPlace = newPlaceThing.firstChild
    let oldPlace = newPlaceThing.getElementsByTagName("li")[counterrr]


    clone.classList.add("cardSpace" + counterrr)
    clone.setAttribute("id", "newCardInHandonBoard" + counterrr)
    clone.setAttribute("onclick", "returnBoardCardOwner(this.id)")

    oldPlace.replaceWith(clone)
    
    removeFocusedCard()
    console.log(counterrr)
    if(counterrr == 4){
        counterrr = 0
    }
    return counterrr++
}



function placeCardOnBoardPlayer1(clicked_id) {
    console.log(counterrr)
    let thisId = document.getElementById(clicked_id)
    console.log(clicked_id)
    let clone = thisId.cloneNode(true)
    thisId.remove()
    // let newPlace = document.getElementById("p0BoardSlotOne")
    let newPlaceThing = document.getElementById("player1Board")
    console.log(newPlaceThing)
    let newPlace = newPlaceThing.firstChild
    let oldPlace = newPlaceThing.getElementsByTagName("li")[counterrr]
    console.log(oldPlace)

    clone.classList.add("cardSpace" + counterrr)
    clone.setAttribute("id", "onenewCardInHandonBoard" + counterrr)
    clone.setAttribute("onclick", "returnBoardCardOwner(this.id)")

    oldPlace.replaceWith(clone)
    removeFocusedCard()
    console.log(counterrr)
    if(counterrr == 4){
        counterrr = 0
    }
    return counterrr++
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

  async function createDeckHere() {
    for(let count=0; count<48; count++){
        await delay(100);
    
        let wheretis = document.getElementById("createDeckHere")
        let newLi = document.createElement("li")
        let newDiv = document.createElement("div")
        wheretis.appendChild(newLi)
        newLi.appendChild(newDiv)
        newDiv.classList.add("card");
        newDiv.classList.add("back");
        newDiv.setAttribute("onclick","cardtoHandReal()");
    }
    
}



function addPaddingReal(clicked_id) {
    console.log(clicked_id)
    let thisId = document.getElementById(clicked_id)
    let cardClassess = thisId.className
    let cardClassezz = cardClassess.split(" ")
    console.log(cardClassezz[2])
    thisId.classList.add("tempPadding")
}

function removePaddingReal(clicked_id) {
    let thisId = document.getElementById(clicked_id)
    thisId.classList.remove("tempPadding")
}

function toggleDiscardPlay() {
    let thisButt = document.getElementById("toggleMeDaddy")
    thisButtContent = thisButt
    thisButtContent.innerHTML = "Toggle Play"
    thisButt.setAttribute("onclick", "togglePlayDiscard()")
    let whatChange = document.getElementById("createNewHandHere").childElementCount


    whatChange++

    for(let ce=1; ce<whatChange; ce++) {
        let whatChanges = document.getElementById("createNewHandHere").childNodes[ce]
        console.log(whatChanges)
        whatChanges.setAttribute("onclick", "discard(this.id)")
        // whatChanges.remove()
    }

}

function togglePlayDiscard() {
    let thisButt = document.getElementById("toggleMeDaddy")
    thisButtContent = thisButt
    thisButtContent.innerHTML = "Toggle Discard"
    thisButt.setAttribute("onclick", "toggleDiscardPlay()")
    let whatChange = document.getElementById("createNewHandHere").childElementCount
    console.log(whatChange)

    whatChange++

    for(let ce=1; ce<whatChange; ce++) {
        let whatChanges = document.getElementById("createNewHandHere").childNodes[ce]
        console.log(whatChanges)
        whatChanges.setAttribute("onclick", "placeCardOnBoard(this.id)")
    }
}

countr = 0
function discard(clicked_id) {
    discardCard(clicked_id)
    let thisId = document.getElementById(clicked_id)
    let discardSpot = document.getElementById("discardDeckHere")
    console.log(thisId)
    let clone = thisId.cloneNode(true)
    clone.setAttribute("id", "newCardInDiscardonBoard" + countr)
    clone.setAttribute("style", "z-index: 100;");
    discardSpot.appendChild(clone)
    thisId.remove()
    removeFocusedCard()
    
    
    return countr++


    }

function showDiscard(name) {
    let newUl = document.createElement("li")
    newUl.classList.add("card");
    newUl.classList.add("rank-k");
    
    newUl.classList.add(name);

    newUl.setAttribute("onmouseover","createFocusedCard(this.id)");
    // newUl.setAttribute("onclick","placeCardOnBoard(this.id)");
    newUl.setAttribute("onmouseout","removeFocusedCard()");

    let discardSpot = document.getElementById("discardDeckHere")

    let clone = newUl.cloneNode(true)
    clone.setAttribute("id", "newCardInDiscardonBoard" + countr)
    clone.setAttribute("style", "z-index: 100;");
    discardSpot.appendChild(clone)
    removeFocusedCard()
    
    return countr++

}

function returnBoardCardOwner(clicked_id) {
    let thisElement = document.getElementById(clicked_id)
    let thisId = thisElement.id
    var thenum = thisId.replace( /^\D+/g, '');
    console.log(thenum)
    return(thenum)

}

function returnBoardCardOwnerForclearBoard(clicked_id) {
    let thisElement = document.getElementById(clicked_id)
    let thisId = thisElement.id
    var thenum = thisId.replace( /^\D+/g, '');
    console.log(thenum)
    return(thenum)
}

function returnCardOwnerFromId(x) {
    var thenum = x.replace( /^\D+/g, '');
    return(thenum)

}

//Holy fuck. here it goes
function clearBoard() {
    //player0's hand
    let player0hand = document.getElementById("createNewHandHere")
    let nCardsinHand0 = player0hand.childElementCount
    for(v=0; v<nCardsinHand0; v++) {
        let firstCard = player0hand.firstElementChild
        console.log(firstCard)
        let firstCardId = firstCard.id
        let ownerOfCard = returnBoardCardOwnerForclearBoard(firstCardId)
        console.log(ownerOfCard)
        //TODO pass ownerOfCard to Hussain
        firstCard.remove()
    }

    //player1's hand
    let player1hand = document.getElementById("createNewHandHere")
    let nCardsinHand1 = player0hand.childElementCount
    for(v=0; v<nCardsinHand1; v++) {
        let firstCard = player1hand.firstElementChild
        let firstCardId = firstCard.id
        let ownerOfCard = returnBoardCardOwnerForclearBoard(firstCardId)
        console.log(ownerOfCard)
        //TODO pass ownerOfCard to Hussain
        firstCard.remove()

    }

    //player0's board/cards in play
    let player0board = document.getElementById("player0Board")
    let nCardsonBoard0 = player0board.childElementCount
    console.log(nCardsonBoard0)
    
    for(v=0; v<nCardsonBoard0; v++) {
        let firstCard1 = player0board.children
        //see if there is a card in the space or if it is an empty card space
        let cardNeeded = firstCard1.item(v)
        console.log(cardNeeded)
        let firstCardId = cardNeeded.id
        if(firstCardId.startsWith("p0BoardSlot")) {
            break
        }
        else{
        let ownerOfCard = returnBoardCardOwnerForclearBoard(firstCardId)
        console.log(ownerOfCard)
        //TODO pass ownerOfCard to Hussain

        //Create empty card space
        let emptyCardSpace = document.createElement("li")
        emptyCardSpace.classList.add("card");
        emptyCardSpace.classList.add("rank-k");
        emptyCardSpace.classList.add("cardSpace");
        emptyCardSpace.classList.add("cardSpace" + v);
        emptyCardSpace.setAttribute("id", "p0BoardSlot" + v)
        cardNeeded.replaceWith(emptyCardSpace)
        }

    }

    //player1's board/cards in play
    let player1board = document.getElementById("player1Board")
    let nCardsonBoard1 = player1board.childElementCount
    
    for(v=0; v<nCardsonBoard1; v++) {
        let firstCard1 = player1board.children
        //see if there is a card in the space or if it is an empty card space
        let cardNeeded = firstCard1.item(v)
        console.log(cardNeeded)
        let firstCardId = cardNeeded.id
        if(firstCardId.startsWith("p1BoardSlot")) {
            break
        }
        else{
        let ownerOfCard = returnBoardCardOwnerForclearBoard(firstCardId)
        console.log(ownerOfCard)
        //TODO pass ownerOfCard to Hussain

        //Create empty card space
        let emptyCardSpace = document.createElement("li")
        emptyCardSpace.classList.add("card");
        emptyCardSpace.classList.add("rank-k");
        emptyCardSpace.classList.add("cardSpace");
        emptyCardSpace.classList.add("cardSpace" + v);
        emptyCardSpace.setAttribute("id", "p1BoardSlot" + v)
        cardNeeded.replaceWith(emptyCardSpace)
        }

    }
    
    //Draw deck
    // let drawDeck = document.getElementById("createDeckHere")
    // let nCardsinDeck = drawDeck.childElementCount
    // console.log(nCardsinDeck + "num cards in deck")
    // //TODO pass nCardsinDeck to Hussain
    // while (drawDeck.firstChild) {
    //     drawDeck.removeChild(drawDeck.firstChild);
    // }

    //Discard pile
    let discardPile = document.getElementById("discardDeckHere")
    while (discardPile.firstChild) {
        discardPile.removeChild(discardPile.firstChild);
    }

}

//TODO wont work if there is an empty card space before there is an occupied one. Ez fix if I don't have to pass anything to Hussy