let grid = [
["", "", "", "", "", "", ""],
["", "", "", "", "", "", ""],
["", "", "", "", "", "", ""],
["", "", "", "", "", "", ""],
["", "", "", "", "", "", ""],
["", "", "", "", "", "", ""]     
];

let saved = 0, verify = 0, onePush = 0, finishGame = 0, finishGame2 = 0;;
let Value = 0;
 
function generateGrid() {
    if (onePush == 0) { 
        for (let i = 0; i < 6; ++i) {
            for (let j = 0; j < 7; ++j) {
                ++saved;
                document.getElementById("container").innerHTML += `
                <button type="button" class="my-button" class="btn btn-outline-primary" 
                onclick ="pushButton(${saved}), four(), checkWinner()" id="${saved}">push</button> `; 
              
            } 
        document.getElementById("container").innerHTML += `<br>`;
        }
        ++onePush;
    }
}   

function pushButton(elementId) {
    ++verify;
    if ((verify % 2 != 0) && document.getElementById(elementId).classList.contains("my-button") && finishGame == 0) {
        document.getElementById(elementId).classList.add("btn-danger");
        let i = Math.floor((elementId - 1) / 7);
        let j = (elementId - 1) % 7;            
        grid[i][j] = "btn-danger";
        console.log(`grid[${i}][${j}] = ${grid[i][j]}`); 
    }
    
    if ((verify % 2 == 0) && document.getElementById(elementId).classList.contains("my-button") && finishGame == 0) {
        document.getElementById(elementId).classList.add("btn-warning");   
        let i = Math.floor((elementId - 1) / 7);
        let j = (elementId - 1) % 7;             
        grid[i][j] = "btn-warning";
        console.log(`grid[${i}][${j}] = ${grid[i][j]}`);
    }
}  

function four(Value) {
    for (let i = 0; i < 6; ++i) {
        for (let j = 0; j < 7; ++j) {
            if (j <= 3 && finishGame2 === 0 && grid[i][j] == Value && grid[i][j] == grid[i][j + 1] 
                && grid[i][j] == grid[i][j + 2] && grid[i][j] == grid[i][j + 3]) {
                 ++finishGame2; 
                return true;
            }
            if (i <= 2 && finishGame2 === 0 && grid[i][j] == Value && grid[i][j] == grid[i + 1][j] 
                && grid[i][j] == grid[i + 2][j] && grid[i][j] == grid[i + 3][j]) {
                ++finishGame2;
                return true;
            }
            if (i <= 2 && j <=  3 && finishGame2 === 0 && grid[i][j] == Value && grid[i][j] == grid[i + 1][j + 1] 
                && grid[i][j] == grid[i + 2][j + 2] && grid[i][j] == grid[i + 3][j + 3]) {
                ++finishGame2;
                return true;
            }
            if ( i <= 2 && j >= 3 && finishGame2 === 0 && grid[i][j] == Value && grid[i][j] == grid[i + 1][j - 1] 
                && grid[i][j] == grid[i + 2][j - 2] && grid[i][j] == grid[i + 3][j - 3]) {
                ++finishGame2;
                return true;
            }
        }    
    }
    return false;
} 

function checkWinner() {
    if (four("btn-danger") || four("btn-warning")) {
        finishGame = 1;
    }
}

function reset() {
    onePush = 0;
    saved = 0;
    verify = 0;
    finishGame = 0;
    finishGame2 = 0;
    Value = 0;
    grid = Array.from({ length: 6 }, () => Array(7).fill(""));
    document.getElementById("container").innerHTML = ""; 
    generateGrid();
    
}
 
