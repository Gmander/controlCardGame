// var CardArray = ["singularity","rift","timestop","futureShift","exoticMatter", "forceField", "deflector", "reactor","wormhole", "nova","darkEnergy", "antimatter" ]

var CardArray = [singularity, rift,timestop,futureShift,exoticMatter, forceField, deflector, reactor,wormhole, nova,darkEnergy, antimatter]

var ObjectArray = []
var PlayedArray = []

CardArray = shuffle(CardArray)

var Alength= CardArray.length

//builds all objects based on name array, places them in objectarray
for(let x =0 ; x<Alength; x++){
    
     var newcard = CardArray.pop()
     ObjectArray.push(build(newcard))

    //  console.log(x)//
    
}function build(Name){
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
    if(choice<=0 || choice>4 || (!(choice%1==0))){
        alert("please choose a valid option")
        actionSelect()
    }
    return choice;
  }
  
  function classSelect(string){
    ObjectArray.forEach((element) => {if(element.Name == string) return element })
    console.log("ooopsie woopsie");
  
  }



//logs/pops all names of objects
// for(let x =0 ; x<Alength; x++){
//     console.log(ObjectArray.pop().name)
//     console.log(x)
   
// }


// console.log(ObjectArray.length == 0)


//game setup

var victoryCondition = 0

var numplay = prompt("how many players?","0")
numplay = parseInt(numplay)

//game starts
while(!victoryCondition){
    for(var x = 0; x<=numplay; x++){
       let selection = actionSelect()
       switch(selection){
        case 1:
            console.log("case 1 selected")
            drawCard(x)
            break;
        case 2:
            // TODO add function which displays a players hand. 
            console.log("case 2 selected")
            let cardselected = classSelect("singularity");

            // let CardClass = this.firstChild.nodeName
            let elementOfCard = document.getElementById("hand")
            let cardClasses = elementOfCard.firstElementChild.className
            console.log(elementOfCard.firstElementChild)
            console.log(cardClasses)
            const cardClassed = cardClasses.split(" ")
            console.log(cardClassed[2])
            for(let z=0;z<Alength; z++){
                let current = ObjectArray[z];
                console.log(String(current.Name))
                if(String(current.Name)=== cardClassed[2] ){
                    console.log("a match was found")
                    var finalfinal = current;
                    break;
                }
                else{
                    console.log("no match was found");
                }
            

            }
            finalfinal.dosomething.call()

            // console.log(secondaryCardClass)
            // var finalCardClass = new secondaryCardClass()
            // console.log(finalCardClass)
            // finalCardClass.dosomething.call()
            break;
        case 3:
            console.log("case 3 selected")
            break;
        case 4:
            console.log("case 4 selected")
            break;

       }//switch
       if(x==numplay) x = 0; //resets player index
       if(pointTotal>= 21) victoryCondition = 1; 
       
    }//for




}//while
alert("player "+x+" has won the game" )


