const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const restartBtn = document.getElementById("restart");

let currentPlayer = "X";
let gameActive = true;

let board = ["", "", "", "", "", "", "", "", ""];

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function checkWinner(){

    for(let pattern of winPatterns){

        let a = pattern[0];
        let b = pattern[1];
        let c = pattern[2];

        if(
            board[a] &&
            board[a] === board[b] &&
            board[a] === board[c]
        ){
            statusText.innerHTML =
            "Player " + currentPlayer + " Wins!";
            gameActive = false;
            return;
        }
    }

    if(!board.includes("")){
        statusText.innerHTML = "Draw!";
        gameActive = false;
    }
}

cells.forEach((cell,index)=>{

    cell.addEventListener("click",()=>{

        if(board[index] !== "" || !gameActive){
            return;
        }

        board[index] = currentPlayer;
        cell.innerHTML = currentPlayer;

        checkWinner();

        if(gameActive){
            currentPlayer =
            currentPlayer === "X" ? "O" : "X";

            statusText.innerHTML =
            "Player " + currentPlayer + " Turn";
        }
    });
});

restartBtn.onclick = function(){

    board = ["","","","","","","","",""];

    currentPlayer = "X";
    gameActive = true;

    statusText.innerHTML = "Player X Turn";

    cells.forEach(cell=>{
        cell.innerHTML = "";
    });
};