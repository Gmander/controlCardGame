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



function cardtoHandReal(x) {
    //Determining the card to pull from deck.
    let drawnCard = ObjectArray.pop()
    drawnCard.owner = x;
    PlayedArray.push(drawnCard)
    realRemoveCardFromDeck()
    // creating id and li and adding class
    let newCardDiv = document.getElementById("createNewHandHere")
    let newUl = document.createElement("li")

    //sets id of UL to newCardInHand, to be called for later use.
    newUl.setAttribute("id", "newCardInHand" + cardsRemaining)
    newCardDiv.appendChild(newUl)
    newUl.classList.add("card");
    newUl.classList.add("rank-k");
    
    newUl.classList.add(drawnCard.name);
    newUl.setAttribute("onmouseover","createFocusedCard(this.id)");
    newUl.setAttribute("onclick","placeCardOnBoard(this.id)");
    newUl.setAttribute("onmouseout","removeFocusedCard()");
    console.log(drawnCard.name)   
    return drawnCard.name
}
 let counterrr = 0
function placeCardOnBoard(clicked_id) {
    console.log(counterrr)
    let thisId = document.getElementById(clicked_id)
    console.log(clicked_id)
    let clone = thisId.cloneNode(true)
    thisId.remove()
    // let newPlace = document.getElementById("p1BoardSlotOne")
    let newPlaceThing = document.getElementById("player1Board")
    console.log(newPlaceThing)
    let newPlace = newPlaceThing.firstChild
    let oldPlace = newPlaceThing.getElementsByTagName("li")[counterrr]
    console.log(oldPlace)

    clone.classList.add("cardSpace" + counterrr)
    clone.setAttribute("id", "newCardInHand" + counterrr + "onBoard")


    

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
    for(let count=0; count<12; count++){
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

async function start() {
    let tempBut = document.getElementById("startButton")
    tempBut.remove()
    delay(1000).then(createDeckHere)
    await delay(2400);
    cardtoHandReal()
    await delay(100);
    cardtoHandReal()
    await delay(100);
    cardtoHandReal()
    await delay(100);
    cardtoHandReal()
    await delay(100);
    cardtoHandReal()

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
        whatChanges.setAttribute("onclick", "discard()")
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


function discard() {
    let whatChange = document.getElementById("createNewHandHere").childElementCount
    console.log(whatChange)

    whatChange++
    console.log(whatChange)
    for(let ce=1; ce<whatChange; ce++) {
        let whatChanges = document.getElementById("createNewHandHere").childNodes[ce]
        console.log(whatChanges)
        whatChanges.setAttribute("onclick", "discard()")
        // whatChanges.remove()
    }
}