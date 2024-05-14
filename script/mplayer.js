var p1_score = 0; //Player 1 Score
var p2_score = 0; //Player 2 Score

player1 = 0;
player2 = 0;

window.addEventListener("keydown", function(event){
    
    if (event.defaultPrevented) {
        return; 
      }

    const score = document.getElementById("score");
    const winner = document.getElementById("winner");

    switch(event.key){
        case "ArrowDown":
        player2=2;
        console.log("Down");
        break;
      case "ArrowLeft":
        player2=1;
        console.log("LEFT");
      break;
      case "ArrowRight":
        player2=3;
        console.log("RIGHT");
        break;
      case "a":
        player1=1;
        console.log("A");
        break;
      case "s":
        player1=2;
        console.log("S");
        break;
      case "d":
        player1=3;
        console.log("D");
        break;
    }

    //Game Logic
    if (player1!=0 && player2!=0){
        if(player1==1){
            if(player2==1){
                winner.innerText="DRAW";
                winner.classList="text-warning";
                p2_score++;
                p1_score++;
            } else if(player2==2){
                winner.innerText="PLAYER 2 WIN";
                winner.classList="text-danger";
                p2_score++;
            } else if(player2==3){
                winner.innerText="PLAYER 1 WIN";
                winner.classList="text-info";
                p1_score++;
            }
        } else if (player1==2) {
            if(player2==2){
                winner.innerText="DRAW";
                winner.classList="text-warning";
                p2_score++;
                p1_score++;
            } else if(player2==3){
                winner.innerText="PLAYER 2 WIN";
                winner.classList="text-danger";
                p2_score++;
            } else if(player2==1){
                winner.innerText="PLAYER 1 WIN";
                winner.classList="text-info";
                p1_score++;
            }
        } else if (player1==3){
            if(player2==3){
                winner.innerText="DRAW";
                winner.classList="text-warning";
                p2_score++;
                p1_score++;
            } else if(player2==1){
                winner.innerText="PLAYER 2 WIN";
                winner.classList="text-danger";
                p2_score++;
            } else if(player2==2){
                winner.innerText="PLAYER 1 WIN";
                winner.classList="text-info";
                p1_score++;
            }
        }
        score.innerText=`Player1 : ${p1_score} | PLayer2 : ${p2_score}`;
        player1= 0;
        player2=0;
    }
});