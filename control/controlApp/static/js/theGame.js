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
    newUl.setAttribute("onclick","createFocusedCard(this.id)");
    newUl.setAttribute("onmouseover","addPaddingReal(this.id)");
    newUl.setAttribute("onmouseout","removePaddingReal(this.id)");
    console.log(drawnCard.name)   
    return drawnCard.name
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

function start() {
    let tempBut = document.getElementById("startButton")
    delay(1000).then(createDeckHere)
    tempBut.remove()
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


