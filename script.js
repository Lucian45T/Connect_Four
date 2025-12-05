let grid = [
["", "", "", "", "", "", ""],
["", "", "", "", "", "", ""],
["", "", "", "", "", "", ""],
["", "", "", "", "", "", ""],
["", "", "", "", "", "", ""],
["", "", "", "", "", "", ""]     
];

let saved = 0, verify = 0, onePush = 0, finishGame = 0;
let Value = 0;
 
function generateGrid() {
    if (onePush == 0) { 
        for (let i = 0; i < 6; ++i) {
            for (let j = 0; j < 7; ++j) {
                ++saved;
                document.getElementById("container").innerHTML += `
                <button type="button" class="my-button" class="btn btn-outline-primary" 
                    onclick ="pushButton(${saved}), fourElements(), checkWinner()" id="${saved}">push</button> `; 
              
            } 
        document.getElementById("container").innerHTML += `<br>`;
        }
        ++onePush;
    }
}   

function calculating_coordinates(elementId, classList) {
    let i = Math.floor((elementId - 1) / 7);
    let j = (elementId - 1) % 7;
    grid[i][j] = classList; 
}

function pushButton(elementId) {
    ++verify;
    if ((verify % 2 != 0) && document.getElementById(elementId).classList.contains("my-button") && finishGame == 0) {
        document.getElementById(elementId).classList.add("btn-danger");
        calculating_coordinates(elementId, "btn-danger");        
    }
    
    if ((verify % 2 == 0) && document.getElementById(elementId).classList.contains("my-button") && finishGame == 0) {
        document.getElementById(elementId).classList.add("btn-warning");   
        calculating_coordinates(elementId, "btn-warning");           
    }    
} 

function Count(Value, i1, j1, di, dj) {
    let count = 0;
    while (i1 >= 0 && i1 < 6 && j1 >= 0 && j1 < 7 && count < 4 && grid[i1][j1] === Value) {
        i1 += di;
        j1 += dj;
        ++count;
    }
    return count;
}

function fourElements(Value) {
    for (let i = 0; i < 6; ++i) {
        for (let j = 0; j < 7; ++j) {
            if (grid[i][j] === Value) {
                if (Count(Value, i, j, 0, 1) == 4) return true;   
                if (Count(Value, i, j, 1, 0) == 4) return true;  
                if (Count(Value, i, j, 1, 1) == 4) return true;   
                if (Count(Value, i, j, 1, -1) == 4) return true;  
            }
        }
    }
    return false;
}

let firstCheck = 0;

function checkWinner() {
    if (fourElements("btn-danger") && firstCheck == 0) {
        finishGame = 1;
        firstCheck = 1;
    }
    if (fourElements("btn-warning") && firstCheck == 0) {
        finishGame = 1;
        firstCheck = 1;
    }
}

function reset() {
    onePush = 0;
    saved = 0;
    verify = 0;
    finishGame = 0;
    firstCheck = 0;
    Value = 0;
    grid = Array.from({ length: 6 }, () => Array(7).fill(""));
    document.getElementById("container").innerHTML = ""; 
    generateGrid();
    
}
 
 
