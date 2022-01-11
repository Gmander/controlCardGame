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