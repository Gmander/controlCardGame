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

function handGen(turn_var){
  let array = []
  for(let x of PlayedArray){
    if(x.owner === turn_var ){
      array.push(x.name)
    }


  }
  return array

}

function boardGen(){
  for(let x of PlayedArray){
      if(x.inPlay === 1){
        BoardDisplay(x.name, x.owner)
      }


  }
  /// going with two variables

}

function discardGen(){
    let array = []
  for(let x of PlayedArray){
    if(x.discarded === 1 ){
      array.push(x.name)
    }


  }
  return array
}
//Todo aidan
function BoardDisplay(name,owner){
  //this function posses's card type in its scope.
  switch(owner){
    case 0:
      //place a card of type name in owners row
      break;
    case 1:
      //place a card of type name in owners row
      break;
    case 2:
      //place a card of type name in owners row
      break;
    case 3:
      //place a card of type name in owners row
      break;
  }

}
//todo cant discard cards not owned by player
function discardCard(clicked_id){
   let thisId = document.getElementById(clicked_id)
    let cardClassess = thisId.className
    let cardClassezz = cardClassess.split(" ")
    let objectLiteral = s2o(cardClassezz[2])
    for( let x of PlayedArray){
      if((objectLiteral.name === x.name) &&(objectLiteral.owner)=== turnCount  ){
        if(x.discarded === 0){
          x.discarded = 1;
          x.inPlay = 0;
          x.owner = -1;
          return;

        }
      }

    }

}

function getOwner(on_click){

}
