//
const btns = document.querySelectorAll(".btn-container");
const btnPiedra = document.getElementById("piedra");

//? points
const tiePoints = document.querySelector('.tie-points');
const computerPoints = document.querySelector('.computer-points');
const playerPoints = document.querySelector('.player-points');


//? values
let valuetiePoits = 0;
let valueComputerPoints = 0;
let valuePlayerPoints = 0;

for (const btn of btns) {
    btn.addEventListener('click', function onClick(e) {
        //console.log(e.target.innerHTML)
        const playerValue = e.target.innerHTML;
        const consoleOptions = ["Piedra", "Papel", "Tijera"];
        const consolaChoose = consoleOptions[Math.floor(Math.random() * 3)];
        
        compararOpciones(playerValue, consolaChoose);

        console.log('jugador'+ playerValue);
        console.log('computadora' + consolaChoose);
        console.log('------------------------------------');
    })
}

function compararOpciones(playerValue, consoleChoose){
    
    //empate
    if(playerValue === consoleChoose){
        valuetiePoits = valuetiePoits + 1 ;
        tiePoints.innerHTML = `empates: ${valuetiePoits}`;
        console.log('its a tie');
        return
    }

    //rock
    if(playerValue === 'Piedra'){
        if(consoleChoose === 'Tijera'){
            addPlayerPoints();
            console.log('PLAYER WINS');
        }
        else {
            addComputerPoints();
            console.log('COMPUTER WINS');
        }
    }

    //PAPER
    if(playerValue === 'Papel'){
        if(consoleChoose === 'Piedra'){
            addPlayerPoints();
            console.log('PLAYER WINS');
        }
        else {
            addComputerPoints();
            console.log('COMPUTER WINS');
        }
    }

    //SCISSORS
    if(playerValue === 'Tijera'){
        if(consoleChoose === 'Papel'){
            addPlayerPoints();
            console.log('PLAYER WINS');
        }
        else {
            addComputerPoints();
            console.log('COMPUTER WINS');
        }
    }
}

function addPlayerPoints () {
    valuePlayerPoints += 1;
    playerPoints.innerHTML = `player:${valuePlayerPoints}`;
}

function addComputerPoints () {
    valueComputerPoints += 1;
    computerPoints.innerHTML = `computer:${valueComputerPoints}`;
}