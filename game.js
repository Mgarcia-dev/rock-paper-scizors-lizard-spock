  let ROCK = "rock";
  let PAPER = "paper";
  let SCISSORS = "scissors";
  let LIZARD = "lizard";
  let SPOCK = "spock";

  const WIN = 0;
  const LOST = 1;
  const TIE = 2;

  let rockBtn;  
  let paperBtn;
  let scizorsBtn;
  let lizardBtn;
  let spockBtn;
  let resultText;
  let userImg;
  let machineImg;

  let machineOption = 0;
    
function initialize(){
    rockBtn = document.getElementById("rock");
    paperBtn = document.getElementById("paper");
    scizorsBtn = document.getElementById("scissors");
    lizardBtn = document.getElementById("lizard");
    spockBtn = document.getElementById("spock");

    resultText = document.getElementById("start-text");
    userImg = document.getElementById("user-img");
    machineImg = document.getElementById("machine-img");


}

function setListeners() {
    rockBtn.addEventListener("click", ()=> {
        play(ROCK);
    });
    paperBtn.addEventListener("click", ()=>{
        play(PAPER);
    });
    scizorsBtn.addEventListener("click", ()=>{
        play(SCISSORS);
    });
    lizardBtn.addEventListener("click", ()=>{
        play(LIZARD);
    });
    spockBtn.addEventListener("click", ()=>{
        play(SPOCK);
    });
}

function calcMachineOption() {
    let option = Math.floor(Math.random() * 5);

    switch (option) {
        case 0:
            return ROCK;
        case 1:
            return PAPER;
        case 2:
            return SCISSORS;
        case 3:
            return LIZARD;
        case 4:
            return SPOCK;
       
    }
}
function play(userOption){

    machineOption = calcMachineOption();
    const result = calcResult(userOption, machineOption);

    userImg.src = "img/"+ userOption +".png";
    machineImg.src ="img/"+ machineOption + ".png";
        switch(result){
            case TIE:
                resultText.innerHTML = "<h2>Tied &#128528;<h2>";
                break;
            case WIN:
                resultText.innerHTML = "<h2> You win! &#128512; <h2> ";
                break;
            case LOST:
                resultText.innerHTML = "<h2>You lost &#129394; <h2> ";
                break;
        }
    }

function calcResult (userOption, machineOption) {

    if(userOption === machineOption) {
        return TIE;

    }else if (userOption === ROCK) {

        if(machineOption === PAPER)return LOST;
        if(machineOption === SCISSORS) return WIN;
        if(machineOption === LIZARD) return WIN;
        if(machineOption === SPOCK) return LOST;

    } else if (userOption === PAPER) {

        if(machineOption === ROCK) return WIN;
        if(machineOption === SCISSORS) return LOST;
        if(machineOption === LIZARD) return LOST;
        if(machineOption === SPOCK) return WIN;

    } else if(userOption === SCISSORS) {

        if(machineOption === ROCK) return LOST;
        if(machineOption === PAPER) return WIN;
        if(machineOption === LIZARD) return WIN;
        if(machineOption === SPOCK) return LOST;

    }else if(userOption === LIZARD) {

        if(machineOption === ROCK) return LOST;
        if(machineOption === SCISSORS) return LOST;
        if(machineOption === PAPER) return WIN;
        if(machineOption === SPOCK) return WIN;

    }else if (userOption === SPOCK){

        if(machineOption === ROCK) return WIN;
        if(machineOption === SCISSORS) return WIN;
        if(machineOption === LIZARD) return LOST;
        if(machineOption === PAPER) return LOST;

    }
}

/*
    switch (userOption){

    case 1: (userOption === machineOption);
    return TIE;
    break;

    case 2: (userOption === ROCK && machineOption === PAPER);
    return LOST;
    break;
    
    case 3: (userOption === ROCK && machineOption === SZISSORS);
    return WIN;
    break;

    case 4: (userOption === ROCK && machineOption === LIZARD);
    return WIN;
    break;

    case 5: (userOption === ROCK && machineOption === SPOCK);
    return LOST;
    break;

    case 6: (userOption === PAPER && machineOption === ROCK);
    return WIN;
    break;

    case 7: (userOption === PAPER && machineOption === LIZARD);
    return LOST;
    break;

    case 8: (userOption === PAPER && machineOption === SPOCK);
    return WIN;
    break;

    case 9: (userOption === PAPER && machineOption === SZISSORS);
    return LOST;
    break;

    case 10: (userOption === SZISSORS && machineOption === PAPER);
    return WIN;
    break;

    case 11: (userOption === SZISSORS && machineOption === PAPER);
    return WIN;
    break;

    case 12: (userOption === SZISSORS && machineOption === PAPER);
    return WIN;
    break;

    case 13: (userOption === SZISSORS && machineOption === PAPER);
    return WIN;
    break;


    case 8: (userOption === PAPER && machineOption === SZISSORS);
    return LOST;
    break;

    //case 9: (userOption === );
    }
    */



window.addEventListener("load", ()=>{
    alert("Introduce tu nombre para iniciar la partida! :)")
    initialize();
    setListeners();
    calcResult();

});