  const ROCK = 0;
  const PAPER = 1;
  const SZISSORS = 2;
  const LIZARD = 3;
  const SPOCK = 4;

  const WIN = 0;
  const LOST = 1;
  const TIE = 2;

  let rockBtn;  
  let paperBtn;
  let scizorsBtn;
  let lizardBtn;
  let spockBtn;
    
    

    
function initialize(){
    rockBtn = document.getElementById("rock");
    paperBtn = document.getElementById("paper");
    scizorsBtn = document.getElementById("scissors");
    lizardBtn = document.getElementById("lizard");
    spockBtn = document.getElementById("spock");
   

}

function setListeners() {
    rockBtn.addEventListener("click", ()=> {
        play(ROCK);
    });
    paperBtn.addEventListener("click", ()=>{
        play(PAPER);
    });
    scizorsBtn.addEventListener("click", ()=>{
        play(SZISSORS);
    });
    lizardBtn.addEventListener("click", ()=>{
        play(LIZARD);
    });
    spockBtn.addEventListener("click", ()=>{
        play(SPOCK);
    });
}
function play(userOption){
    const machineOption = Math.floor(Math.random() * 5);
    console.log(machineOption);

    if(userOption === machineOption) {
        return TIE;
    }
}


window.addEventListener("load", ()=>{
    alert("Introduce tu nombre para iniciar la partida! :)")
    initialize();
    setListeners();

});