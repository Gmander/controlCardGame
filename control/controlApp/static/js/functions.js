function build(Name){
  return new Name();
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function drawCard(x){
  let drawnCard = ObjectArray.pop()
  drawnCard.owner = x;
  PlayedArray.push(drawnCard)
}

function actionSelect(){
  let choice = prompt("Choose an action \n 1.draw \n 2.play card\n 3.Discard\n 4.Defuse" ,"0")
  choice = parseInt(choice)
  if(choice<=0 || choice>4 || (!choice%1==0)){
      alert("please choose a valid option")
      actionSelect()
  }
  return choice;
}

function classSelect(string){
  ObjectArray.forEach((element) => {if(element.Name == string) return element })
  console.log("ooopsie woopsie");

}

function s2o(cardString){
  let classActual = ObjectDict[cardString]
  return new classActual()
}





// function boardGen(){
//   for(let x of PlayedArray){
//       if(x.inPlay === 1){
//         BoardDisplay(x.name, x.owner)
//       }

//   }
//   /// going with two variables

// }

function discardGen(){
  for(let x of PlayedArray){
    if(x.discarded === 1 ){
      console.log("i have a discard card to create")
      showDiscard(x.name)
    }


  }
}


//Todo aidan
var varNum = 1
function counterfuns() {
  console.log(varNum)
    varNum++
    console.log(varNum)
}
function CreateCard(name, owner) {
  counterfuns()
  // creating id and li and adding class
  let newCardDiv = document.getElementById("createNewHandHere")
  let newUl = document.createElement("li")
  //determine cards remaining
  let liCardsInDeck = document.getElementsByTagName("ul")[0].getElementsByTagName('li');
  // console.log(liCardsInDeck)
  // cardsRemaining = (liCardsInDeck.length)


  //sets id of UL to newCardInHand, to be called for later use.
  newUl.setAttribute("id", "newCardInHand" + varNum)
  
  newCardDiv.appendChild(newUl)
  newUl.classList.add("card");
  newUl.classList.add("rank-k");
  newUl.classList.add(name);
  newUl.classList.add(owner);
  newUl.setAttribute("onmouseover","createFocusedCard(this.id)");
  newUl.setAttribute("onclick","placeCardOnBoard(this.id)");
  newUl.setAttribute("onmouseout","removeFocusedCard()");
  console.log("card in hand is" + name)   
  return newUl
}

var varNumz = -1
function counterfunz() {

    varNumz++
    console.log(varNumz)}
var otherCounter = -1
    function counterfuntz() {
    
      otherCounter++
}
function CreateCardBoard(name, owner) {
  
  //player0's board creation
  if(owner == 0){
    console.log(name)
    counterfunz()
    
    let newUlonBoardz = document.createElement("li")
    let newPlaceThing = document.getElementById("player0Board")
    // let newPlaceThing = document.getElementById("player" + turnCount + "Board")
    console.log(newPlaceThing)
    let oldPlacez = newPlaceThing.getElementsByTagName("li")[varNumz]
    console.log(oldPlacez + "is on the board")

    newUlonBoardz.classList.add("card");
    newUlonBoardz.classList.add("rank-k");
    
    newUlonBoardz.classList.add(name);
    newUlonBoardz.classList.add(owner);
    newUlonBoardz.setAttribute("onmouseover","createFocusedCard(this.id)");
    newUlonBoardz.setAttribute("onmouseout","removeFocusedCard()");
    newUlonBoardz.classList.add("cardSpace" + varNumz)
    newUlonBoardz.setAttribute("id", "newCardInHandonBoard" + varNumz)
    newUlonBoardz.setAttribute("onclick", "returnBoardCardOwner(this.id)")

    oldPlacez.replaceWith(newUlonBoardz)
    
    removeFocusedCard()
  }
  //player1's board creation
  else if (owner == 1){
    counterfuntz()
  console.log(name)
    
  let newUlonBoardz = document.createElement("li")
  // let newPlace = document.getElementById("p0BoardSlotOne")
  let newPlaceThing = document.getElementById("player1Board")
  // let newPlaceThing = document.getElementById("player" + turnCount + "Board")
  console.log(newPlaceThing)
  let oldPlacez = newPlaceThing.getElementsByTagName("li")[otherCounter]
  console.log(oldPlacez + "is on the board")

  newUlonBoardz.classList.add("card");
  newUlonBoardz.classList.add("rank-k");
  
  newUlonBoardz.classList.add(name);
  newUlonBoardz.classList.add(owner);
  newUlonBoardz.setAttribute("onmouseover","createFocusedCard(this.id)");
  newUlonBoardz.setAttribute("onmouseout","removeFocusedCard()");
  newUlonBoardz.classList.add("cardSpace" + otherCounter)
  newUlonBoardz.setAttribute("id", "newCardInHandonBoard" + otherCounter)
  newUlonBoardz.setAttribute("onclick", "returnBoardCardOwner(this.id)")

  oldPlacez.replaceWith(newUlonBoardz)
  
  removeFocusedCard()
  }
}

function getOwner(clicked_id){
  let thisId = document.getElementById(clicked_id)
  let cardClassess = thisId.className
  let cardClassezz = cardClassess.split(" ")
  let thisIsThisCard = cardClassezz[3]
  return thisIsThisCard
}

function BoardDisplay(name,owner){
      switch(owner){
        case 0:
          //place a card of type name in owners row
          CreateCardBoard(name, owner)
    
    
          break;
        case 1:
          //place a card of type name in owners row
          CreateCardBoard(name, owner)
          break;
        case 2:
          //place a card of type name in owners row
          CreateCardBoard(name, owner)
          break;
        case 3:
          //place a card of type name in owners row
          CreateCardBoard(name, owner)
          break;
      }
  //this function posses's card type in its scope.


}

function createHand(turn_var){
  let array = handGen(turn_var)
  array.forEach(x => console.log("createHand array values are: "+ x))
  for(let x of array){
    CreateCard(x, turn_var);
  }
  

  
}

function populateBoard() {
  for(let x of PlayedArray) {
    if(x.inPlay === 1){
    BoardDisplay(x.name, x.owner)
    }
  }
}

//todo cant discard cards not owned by player


function getOwner(on_click){
  let thisId = document.getElementById(clicked_id)
  let cardClassess = thisId.className
  let cardClassezz = cardClassess.split(" ")
  let objectLiteral = s2o(cardClassezz[3])
}
