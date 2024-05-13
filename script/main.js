function makeRand(){
    return Math.floor(Math.random() * 3) + 1;
}

var p_score = 0; //Player Score
var c_score = 0; //Computer Score

const startGame = document.getElementById("startgame");
startGame.addEventListener("click", (e)=>{
    e.preventDefault();

    const paper = document.getElementById("paper"); //Defining paper
    const scissors = document.getElementById("scissors"); //Defining scissors
    const rock = document.getElementById("rock"); //Defining rock

    const randNum = makeRand();

    const pcchose = document.getElementById("comp");
    const pctext = document.getElementById("pctext");

    const score = document.getElementById("score");
    const winner = document.getElementById("winner");
    const note = document.getElementById("note");

    //Demonstrating computer decision
    if(paper.checked || scissors.checked || rock.checked){
        switch(randNum){
            case 1:
                pcchose.src=".././assets/images/paper-1.png";
                pctext.innerText="Computer chose : Paper";
            break;
            case 2:
                pcchose.src=".././assets/images/Scissors.png";
                pctext.innerText="Computer chose : Scissors";
            break; 
            case 3:
                pcchose.src=".././assets/images/rock-1.png";
                pctext.innerText="Computer chose : Rock";
            break;                 
        }

        startGame.value = "Play again";
        note.innerHTML="";
    }

    //Game Logic
    if(paper.checked){
        if(randNum==1){
            winner.innerText="DRAW";
            winner.classList="text-warning";
            c_score++;
            p_score++;
        } else if(randNum==2){
            winner.innerText="Computer Won";
            winner.classList="text-danger";
            c_score++;
        } else if(randNum==3){
            winner.innerText="You Won";
            winner.classList="text-success";
            p_score++;
        }
    } else if (scissors.checked){
        if(randNum==1){
            winner.innerText="You Won";
            winner.classList="text-success";
            p_score++;
        } else if(randNum==2){
            winner.innerText="DRAW";
            winner.classList="text-warnin";
            p_score++;
            c_score++;
        } else if(randNum==3){
            winner.innerText="Computer Won";
            winner.classList="text-danger";
            c_score++;
        }
    } else if(rock.checked){
        if(randNum==1){
            winner.innerText="Computer Won";
            winner.classList="text-danger";
            c_score++;
        } else if(randNum==2){
            winner.innerText="You Won";
            winner.classList="text-success";
            p_score++;
        } else if(randNum==3){
            winner.innerText="DRAW";
            winner.classList="text-warning";
            p_score++;
            c_score++;
        }
    } else if(!(paper.checked) && !(rock.checked) && !(scissors.checked)){
        note.innerHTML="*Please Select An Option";
        winner.innerText="Who Will Win??";
        winner.classList="";
    }
    
    score.innerHTML=`You ${p_score} : ${c_score} Ai`;
    rock.checked=false;
    scissors.checked=false;
    paper.checked=false;
});