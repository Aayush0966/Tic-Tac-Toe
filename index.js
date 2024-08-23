let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetGame");
let winnerMessage = document.querySelector(".winnerMessage")
let turnX = true;
let msg = document.querySelector(".msg");
let newGame = document.querySelector(".newgame-container");
newGame.style.display = "none";
let btnClicked = 0;
let isDraw = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

  boxes.forEach((box) =>   {


    resetBtn.addEventListener("click", () => {
        box.innerText = "";
        btnClicked = 0;
        box.disabled = false;
        msg.style.display = "none";
        newGame.style.display = "none";
      })
      newGame.addEventListener("click", () => {
        box.innerText = "";
        btnClicked = 0;
        msg.style.display = "none";
        box.disabled = false;
        newGame.style.display = "none";
      })
    box.addEventListener("click", () => {
        btnClicked ++;
        console.log(btnClicked);
       
        if (turnX === true) { 
            turnX = false;
        box.innerText = "X"
        }
        else {
            turnX = true;
            box.innerText = "O"
        }
        box.disabled = true;
    
        checkWinner();
        console.log(isDraw);
        if (isDraw && btnClicked >=9){
            let showText = `The Game was a draw. Please start a new one.`
            showWinner(showText);
        }
    } )
  })

const showWinner = (showText) => {
   msg.style.display = "block";
   newGame.style.display = "flex";
   msg.innerText = showText;
}

const checkWinner = () => {
    let isDraw = true;
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                let showText = `Congratulations! ${pos1Val}. You have won the game.`
                showWinner(showText);
            }
        }
        else isDraw = false;
    }

}