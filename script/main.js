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

    var randNum = makeRand();

    const pcchoose = document.getElementById("pcchoose");

    const score = document.getElementById("score");
    const winner = document.getElementById("winner");
    const note = document.getElementById("note");

    //Demonstrating computer decision
    if(paper.checked || scissors.checked || rock.checked){
        switch(randNum){
            case 1:
                pcchoose.innerHTML="Computer chose : Paper";
            break;
            case 2:
                pcchoose.innerHTML="Computer chose : Scissors";
            break; 
            case 3:
                pcchoose.innerHTML="Computer chose : Rock";
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
            winner.innerText="COMPUTER WIN";
            winner.classList="text-danger";
            c_score++;
        } else if(randNum==3){
            winner.innerText="PLAYER WIN";
            winner.classList="text-success";
            p_score++;
        }
    } else if (scissors.checked) {
        if(randNum==2){
            winner.innerText="DRAW";
            winner.classList="text-warning";
            c_score++;
            p_score++;
        } else if(randNum==3){
            winner.innerText="COMPUTER WIN";
            winner.classList="text-danger";
            c_score++;
        } else if(randNum==1){
            winner.innerText="PLAYER WIN";
            winner.classList="text-success";
            p_score++;
        }
    } else if (rock.checked){
        if(randNum==3){
            winner.innerText="DRAW";
            winner.classList="text-warning";
            c_score++;
            p_score++;
        } else if(randNum==1){
            winner.innerText="COMPUTER WIN";
            winner.classList="text-danger";
            c_score++;
        } else if(randNum==2){
            winner.innerText="PLAYER WIN";
            winner.classList="text-success";
            p_score++;
        }
    } else if(!(paper.checked) && !(rock.checked) && !(scissors.checked)){
        note.innerHTML="*Please Select The Option";
        winner.innerText="Who Will Win??";
        winner.classList="";
    }
    
    score.innerHTML=`You ${p_score} : ${c_score} Ai`;
    rock.checked=false;
    scissors.checked=false;
    paper.checked=false;
});