//This is the creation of the deck and counters
var CardArray = [singularity, rift,timeStop,futureShift,exoticMatter, forceField, deflector, reactor,wormhole, nova,darkEnergy, antimatter, singularity, rift,timeStop,futureShift,exoticMatter, forceField, deflector, reactor,wormhole, nova,darkEnergy, antimatter, singularity, rift,timeStop,futureShift,exoticMatter, forceField, deflector, reactor,wormhole, nova,darkEnergy, antimatter, singularity, rift,timeStop,futureShift,exoticMatter, forceField, deflector, reactor,wormhole, nova,darkEnergy, antimatter]
var ObjectDict = {"singularity":singularity,"rift":rift,"timeStop":timeStop,"futureShift":futureShift, "exoticMatter":exoticMatter, "forceField":forceField, "deflector":deflector, "reactor":reactor, "wormhole":wormhole, "nova":nova,"darkEnergy":darkEnergy,"antimatter":antimatter}
var ObjectArray = []
var PlayedArray = []
var cardCounter = 0
var turnCount = 0
var player1hs = 0
var player2hs, player3hs, player4hs
var maxTurnCount = parseInt(prompt("how many players are there?"))
var diffusedPoints = 0
var riftPoints = 0
var exoticPoints = 0
var deckCounter = 0
CardArray = shuffle(CardArray)

var Alength= CardArray.length

//builds all objects based on name array, places them in objectarray
for(let x =0 ; x<Alength; x++){
    
     var newcard = CardArray.pop()
     ObjectArray.push(build(newcard))

    //  console.log(x)//
    
}

x=1
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
          let playersHand = handCount(turnCount)
    if( playersHand > 7){
        //TODO tell player no more cards can be drawn
    }
   else {


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
}

// function for converting output of topCardOfDeck() into frontend reaction into your hand
function cardtoHand() {
    //Determining the card to pull from deck.
    let drawnCard = ObjectArray.pop()
    drawnCard.owner = turnCount//x needs to be replaced with turn variable//done;
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


        // //first button
        // let firstButLi = document.createElement("li")
        // testtest.appendChild(firstButLi)
        // firstButLi.setAttribute("id", "iGo2")
        // let newerDiv = document.createElement("div")
        // firstButLi.appendChild(newerDiv)
        // firstButLi.classList.add("slideRight")
        // newerDiv.classList.add("button_slide")
        // newerDiv.classList.add("slide_down")

        // //text in first button
        // var text = document.createTextNode("Play Card")
        //     newerDiv.appendChild(text)



        // // second button
        // let secondButLi = document.createElement("li")
        // testtest.appendChild(secondButLi)
        // secondButLi.setAttribute("id", "iGo1")
        // let newestDiv = document.createElement("div")
        // secondButLi.appendChild(newestDiv)
        // secondButLi.classList.add("slideRightLess")

        // newestDiv.classList.add("button_slide")
        // newestDiv.classList.add("slide_down")
        // //text in second button
        // var textt = document.createTextNode("Activate Card")
        // newestDiv.appendChild(textt)


    // sets id of UL to newCardInHand, to be called for later use.
    newUl.setAttribute("id", "focusedCard")
    testtest.appendChild(newUl)
    newUl.classList.add("bigCard");
    newUl.classList.add("rank-k");
    
    newUl.classList.add(thisIsThisCard);
    newUl.setAttribute("onclick","removeFocusedCard()");
    console.log(thisIsThisCard)
    //TODO add a function which puts a card of the class played in play and delete from players hand i.e setting owner prop to null
    return thisIsThisCard
}

function onPlay(clicked_id){
    console.log(clicked_id)
    let thisId = document.getElementById(clicked_id)
    let cardClassess = thisId.className
    let cardClassezz = cardClassess.split(" ")
    console.log(cardClassezz[2])
    let thisIsThisCard = cardClassezz[2]
    let objectLiteral = s4o(thisIsThisCard)//TODO this fucks backend
    let selectedObject = getPlayedArray(objectLiteral)
    //todo add line disallowing playing of opponents board
    selectedObject.inPlay = 1; // TODO for this to work on rift play, all cards on board must be onPlay(), needs to be !adjusted so u cant "play" someone elses cards on board.
    // if((objectLiteral.name === "rift") || (riftPoints === 1)){
    //     //do rift action
    //     if(riftPoints === 0){
    //         riftPoints = 1
    //         return; // put card in center
    //     }
    //     else{
    //         if(checkDeflector(selectedObject.owner)=== 1){
    //             alert("cannot use this on deflector")
    //             return;
    //         }
    //         discardCard(selectedObject)
    //         //TODO card must be deleted in html
    //         riftPoints = 0;
    //         nextTurn()
    //         return;

    //     }

    // }
    // if(selectedObject.name === "exoticMatter" || (exoticPoints===1)){
    //     if(exoticPoints === 0){
    //         exoticPoints = 1
    //         return
    //     }
    //     else{
    //         if(selectedObject.points>3 ){
    //             alert("choose a card less than or equal to 3 points")//todo put the card in hand again
    //             selectedObject.inPlay = 0;
    //             return
    //         }
    //         exoticPoints = 0;
    //     }
    //     // allow onPlay of 3 or lower value card then end turn, if three or lower card not picked alert error

    // }
    // nextTurn()
}

function onDiscard(clicked_id){
    let thisId = document.getElementById(clicked_id)
    let cardClassess = thisId.className
    let cardClassezz = cardClassess.split(" ")
    console.log(cardClassezz[2])
    let thisIsThisCard = cardClassezz[2]
    // card must be discarded
    discardCard(thisIsThisCard)//todo  wrong param
    //card action must take place if unstable
    let objectLiteral = s2o(thisIsThisCard)
    switch(thisIsThisCard){
        case "singularity":
            for(let x of PlayedArray){
                if(x.name === "deflector") continue;
                if(x.inPlay){
                    discardCard(x)
                }
            }
            break;
        case "antimatter":
            break;
        case "darkEnergy":
            break;
        case "wormhole":
            break;
        case "futureShift":
            break;
        case "timeStop":
            break;



    }
    nextTurn()
    //next turn
}

function onDiffuse(clicked_id){
    let thisId = document.getElementById(clicked_id)
    let cardClassess = thisId.className
    let cardClassezz = cardClassess.split(" ")
    console.log(cardClassezz[2])
    let thisIsThisCard = cardClassezz[2]
    let objectLiteral = s2o(thisIsThisCard)
    let card = getPlayedArray(objectLiteral,"discarded" )
    if(diffusedPoints === 0){
        card.discarded = 1;
        diffusedPoints = 1;
    }
    else{
        if((card.points> diffusedPoints) || (checkForceField(card.owner)===1) ){
            alert("pick a card with a lower point value or pick a different player")
            return;
        }
        discardCard(clicked_id)
        card.inPlay = 0;
        diffusedPoints = 0;
    }








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
    if(removeThis != null){
    removeThis.remove()
    }
    else{
        return
    }

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

function nextTurn(){
    swapBoardId()
    counterrr = 0
    otherCounter = -1
   if(turnCount === (maxTurnCount-1)) {
       turnCount = 0;
   }
   else{
       turnCount += 1
   }
   console.log("this is turnCount= " + turnCount)
   ///aidans front end board wiping
   clearBoard()
   discardGen()
   createHand(turnCount)
   populateBoard()
   varNum = 0;
   varNumz = -1
    alert("it is now the next players turn")
    console.log("this is the turn count: "+ turnCount)
    cardtoHandReal(turnCount)


}

function handCount(owner){
    for(let x of PlayedArray) {
        switch (x.owner) {
            case 0:
                player1hs += 1;
                break;
            case 1:
                player2hs += 1;
                break;
            case 2:
                player3hs += 1;
                break;
            case 3:
                player4hs += 1;
                break;
        }
    }

  switch(owner){
    case 0:
      return player1hs
    case 1:
     return player2hs
    case 2:
     return player3hs
    case 3:
      return player4hs
  }
}

 // function actionSelect(){
 //    let choice = prompt("Choose an action \n 1.draw \n 2.play card\n 3.Discard\n 4.Defuse" ,"0")
 //    choice = parseInt(choice)
 //    if(choice<=0 || choice>4 || (!(choice%1==0))){
 //        alert("please choose a valid option")
 //        actionSelect()
 //    }
 //    return choice;
 //  }

function getPlayedArray(objectLiteral){
      for(let x of PlayedArray){
      if((objectLiteral.name === x.name) && (objectLiteral.owner) === turnCount){
          return x
          

        
      }

    }



}

function checkForceField(owner){
    for(let x of PlayedArray){
        if((x.owner === owner)&&(x.inPlay === 1)){
            if(x.name === "forceField"){
                return 1;
            }
        }
    }
    return 0;

}

function checkDeflector(owner){
       for(let x of PlayedArray){
        if((x.owner === owner)&&(x.inPlay === 1)){
            if(x.name === "deflector"){
                return 1;
            }
        }
    }
    return 0;

}


async function start() {
    let tempBut = document.getElementById("startButton")
    tempBut.remove()
    delay(1000).then(createDeckHere)

        await delay(5500);
        cardtoHandReal(turnCount)
        await delay(100);
        cardtoHandReal(turnCount)
        await delay(100);
        cardtoHandReal(turnCount)
        await delay(100);
        cardtoHandReal(turnCount)
        await delay(100);
        cardtoHandReal(turnCount)

        //second player draw

        cardtoHandFake(turnCount + 1)

        cardtoHandFake(turnCount + 1)

        cardtoHandFake(turnCount + 1)

        cardtoHandFake(turnCount + 1)

        cardtoHandFake(turnCount + 1)


}


function handGen(turn_var){
  let array = []
  console.log("handGen was called")
  for(let x of PlayedArray){
    console.log("the owner of every card is: "+x.owner)
    if((x.owner === turn_var) && (x.inPlay != 1)){
      console.log("something has been pushed into array")
      array.push(x.name)
    }


  }
    array.forEach(x => console.log(x))
  return array

}


function s4o(cardString){
    let classActual = ObjectDict[cardString]
    let x = new classActual()
    x.owner = turnCount
    return x
  }

  function discardCard(clicked_id){
    let thisId = document.getElementById(clicked_id)
    console.log(clicked_id)
     let cardClassess = thisId.className
     let cardClassezz = cardClassess.split(" ")
     let objectLiteral = s4o(cardClassezz[2])
     objectLiteral.owner = cardClassezz[3]
     console.log("this is the object owner: "+objectLiteral.owner)
     for( let x of PlayedArray){
       if((objectLiteral.name === x.name) &&(objectLiteral.owner=== cardClassezz[3] ) ){
         console.log("i got here 2")
         if(x.discarded === 0){
           console.log("i got here")
           x.discarded = 1;
           console.log(x.discarded)
           x.inPlay = 0;
           x.owner = -1;
           return;
 
         }
       }
 
     }
 
 }
