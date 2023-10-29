  /*Primero definimos las variales y constantes que vamos a utilizar
    Las variables aplicadas al juego las igualamos a un valor de tipo String para
    más tarde darles una funcionalidad */
  let ROCK = "rock";
  let PAPER = "paper";
  let SCISSORS = "scissors";
  let LIZARD = "lizard";
  let SPOCK = "spock";

  // Estas constantes son para introducir el nombre del rival cuando se inicie el juego
  const SHELDON = "Sheldon";
  const PENNY = "Penny";
  const LEONARD ="Leonard";
  const HOWARD = "Howard";
  const BERNADETTE = "Bernadette";

  /*Creamos las constantes de ganar, perder y empatar y las igualamos a
    números para darles funcionalidad al igual que en el las variables anteriores.
  */
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
  let userPoints = 0;
  let machinePoints = 0;
  let startText;
  let textBox;
  let errorMessageForm;
  let initButton;
  let nameUser = /^\D+$/;
  let userText;
  let pContainer;
  let restart;
  let grpBtn;
  let textIntro;
  let machineName;
  let optionName;

    /* Está es la función principal del programa que se encargará de ejecutar el resto de funciones.
    Dicha funcion pone al script el escucha hasta que se carga el documento HTML para, posteriormente, 
    poder aplicar toda la funcionalidad. Esta refactorizada para que unicamente se apliquen 3 funciones que se
    detallan a continuación. */
    window.addEventListener("load", ()=>{
        
        initializeVars();
        setListeners();
        play(userOption);

        
    });

    /* ___________________________________________________________________________________*/


  /* Creamos la funcion de inicialización de variables para refactorizar código y 
    hacer que nuestras funciones no sean tan grandes. */ 
    function initializeVars(){
        startText = document.getElementById("start-text");
        rockBtn = document.getElementById("rock");
        paperBtn = document.getElementById("paper");
        scizorsBtn = document.getElementById("scissors");
        lizardBtn = document.getElementById("lizard");
        spockBtn = document.getElementById("spock");
        resultText = document.getElementById("result-text");
        userImg = document.getElementById("user-img");
        machineImg = document.getElementById("machine-img");
        textBox = document.getElementById("init");
        errorMessageForm = document.getElementById("error-message");
        initButton = document.getElementById("initButton");
        userText = document.getElementById("userText");
        pContainer = document.getElementById("container");
        countMachine = document.getElementById("machine-Points");
        countUser = document.getElementById("user-Points");
        restart = document.getElementById("restart");
        machineName = document.getElementById("machine-name");
        textIntro = document.getElementById("introduction");
    }

    /* Ponemos a la escucha los botones de las opciones que tiene el jugador
       y ponemos el foco en la caja de texto para introducir el nombre. */
    function setListeners() {
        textBox.focus();
        
        textBox.addEventListener("input", () => {
            if(textBox.value === "") {
                initButton.disabled = true;
            } else if (nameUser.test(textBox)) {
                initButton.disabled = false;
            }
        });

        initButton.addEventListener("click", begin);
        
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

    /* Esta funcion calculará la opción que elegira la maquina en funcion de un 
   número aleatorio del 0 al 4 y en cada caso devolverá un resultado que 
   utilizaremos en la función play() */ 
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

    /* Es la funcion en la que corre el juego */
    function play(userOption){
        
        // En primer lugar, mostramos la imagen elegida por el jugador, y si la cambiamos, 
        // esta tambien cambia.
        userImg.src = "img/rock.png";
        userImg.src = "img/"+ userOption +".png";
       

        // Creamos una funcion almacenada en una variable para hacer un intervalo de tiempo que cambia las imagenes de las opciones
        // de la máquina por cada milisegundo para darle un toque mas de espectación al jugador
        let interval = setInterval(() => {
            const machineOption = calcMachineOption();
            machineImg.src ="img/"+ machineOption + ".png";
        }, 100);
     
    
        // Le damos un segundo y medio a la maquina para pensar y mientras cambia la imagen
        setTimeout(() => {

            //Aqui limpiamos el intervalo porque si no entra en un bucle infinito de cambio de imagenes
            //y no pasa a la siguiente funcion
            clearInterval(interval);
            
            // Calculamos la opción elegida por la maquina.
            const machineOption = calcMachineOption();
            const result = calcResult(userOption, machineOption);
            
            // Mostramos la imagen que ha elegido la máquina aleatoriamente. 
            machineImg.src ="img/"+ machineOption + ".png";

            /*  En base al resultado que obtengamos, nos mostrará en lenguaje HTML un contenido diferente
                si hemos ganado, perdido o empatado.
            */
            calcResult();

            switch(result){
                case TIE:
                    resultText.innerHTML = "<h2>Tied &#128528;<h2>";

                    break;
                case WIN:
                    resultText.innerHTML = "<h2> You win! &#128512; <h2> ";
                    userWin()
                    break;
                case LOST:
                    resultText.innerHTML = "<h2>You lost &#129394 </h2>";
                    machineWin();
                    break;
            }
            
            // Se imprime el resultado de la partida si cualquier jugador llega a 5 puntos.
            resultGame();
            
        }, 1500);
    }

    /* Calcula todas las posibles opciones
    y sus consecuentes resultado introduciendo las opciones del jugador y de la máquina.
    La añadimos en la función play y asi refactorizamos el código.*/
    function calcResult (userOption, machineOption) {

        if(userOption === machineOption) {
            return TIE;

        }else if (userOption === ROCK) {

            if(machineOption === PAPER) return LOST;
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

    // Activa todos los botones del jugador 
    function btnDisabledFalse() {
        rockBtn.disabled = false;
        paperBtn.disabled = false;
        scizorsBtn.disabled = false;
        lizardBtn.disabled = false;
        spockBtn.disabled = false;
    }

    // Desactiva los botones para que no se puedan pulsar y, por tanto, seguir jugando
    function btnDisabledTrue() {
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scizorsBtn.disabled = true;
        lizardBtn.disabled = true;
        spockBtn.disabled = true;
    }

    // Esta función inicia el juego y elige aleatoriamente el nombre de tu rival
    function begin() {
        machineNameRandom();
        if(nameUser.test(textBox)) {
        pContainer.classList.remove("container");
        errorMessageForm.style.display = "none";
        textBox.style.border = "none";   
        userText.innerHTML ="<h3>" + textBox.value + "</h3>";
        textBox.value = "";
        initButton.classList.add("disabled");
        textBox.classList.add("disabled");
        textIntro.innerHTML = "";
        
        btnDisabledFalse();
        
        }else {
            errorMessageForm.innerHTML="Debes introducir un nombre correcto";
        }
    }

    /* Si cualquier jugador llega a 5 puntos, el juego se termina y se activa el botón
    para reiniciar el juego. */
    function resultGame() {
        if(userPoints === 5 || machinePoints === 5) {
            if(userPoints === 5){
            startText.innerHTML = " <h3> You're the winner ! &#128512; </h3>";
            resultText.innerHTML = "";
            }
            
            if(machinePoints === 5) {
                startText.innerHTML = " <h3>You have lost, try again ! &#129394 </h3>";
                resultText.innerHTML ="";
            }

            // Aqui desactivo todos los controles para que no pueda seguir jugando y se
            // active el boton de reiniciar
            restart.classList.remove("disabled");
            btnDisabledTrue();
            restart.addEventListener("click", restartGame);
        } 
    }

    // Suma los puntos del rival y los imprime en pantalla
    function machineWin() {
        machinePoints++;
        countMachine.innerHTML = machinePoints ;
    }
    
    // Suma los puntos del jugador y los imprime en pantalla
    function userWin() { 
        userPoints++;
        countUser.innerHTML = userPoints;     
    }

    // Función para reiniciar el juego, devuelve todos los valores a su estado inicial
    function restartGame () {
        restart.classList.add("disabled");
        startText.innerHTML = "<h1>Choose an option to play! </h1>"
        pContainer.classList.add("container");
        textBox.classList.remove("disabled");
        textIntro.innerHTML = "Introduce your name to begin:";
        userPoints = 0;
        machinePoints = 0;

        countUser.innerHTML = "<h3>" + userPoints + "</h3>";

        countMachine.innerHTML = "<h3>" + machinePoints + "</h3>";
        initButton.classList.remove("disabled");
    }
    
    // Elige un nombre para el rival aleatoriamente y lo imprime en pantalla
    function machineNameRandom() {
        optionName = Math.floor(Math.random() * 5);

        switch (optionName) {
            case 0:
                machineName.innerHTML=  SHELDON ; 
                break;
            case 1:
                machineName.innerHTML=  PENNY ;
                break;
            case 2:
                machineName.innerHTML=  LEONARD ;
                break;
            case 3:
                machineName.innerHTML=  HOWARD;   
                break;          
            case 4:
                machineName.innerHTML=  BERNADETTE ;   
                break;          
        }
    }
    


