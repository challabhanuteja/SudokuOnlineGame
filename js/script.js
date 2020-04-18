let board = [
    [7, 8, 0, 4, 0, 0, 1, 2, 0],
    [6, 0, 0, 0, 7, 5, 0, 0, 9],
    [0, 0, 0, 6, 0, 1, 0, 7, 8],
    [0, 0, 7, 0, 4, 0, 2, 6, 0],
    [0, 0, 1, 0, 5, 0, 9, 3, 0],
    [9, 0, 4, 0, 6, 0, 0, 0, 5],
    [0, 7, 0, 3, 0, 0, 0, 1, 2],
    [1, 2, 0, 0, 0, 7, 4, 0, 0],
    [0, 4, 9, 2, 0, 6, 0, 0, 7]
];
// console.log(board);
let oldBoard = [];
let userSolution = [];
let box;
for (let i = 0; i < 9; i++) {
    let k = [],l = [];
    for (let j = 0; j < 9; j++) {
        let s = 't' + i.toString() + j.toString();
        box = document.getElementById(s);
        if (board[i][j] == 0) {
            box.innerHTML = `<input class='inp' id ="i${i}${j}" type="text" class="box-input">`;
        }
        else {
            box.innerHTML = board[i][j];
        }
        k.push(board[i][j]);
        l.push(board[i][j]);
    }
    oldBoard.push(k);
    userSolution.push(l);
}

let solvedBoard = solve(board);

function submit(){
    let k = confirm('Are you sure want to SUBMIT?');
    if(k)
    {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (oldBoard[i][j] == 0) {
                    
                    let s = 'i' + i.toString() + j.toString();
                    inp = document.getElementById(s);
                    userSolution[i][j] = parseInt(inp.value);
                }
                
            }
        }
        console.log(userSolution);
        console.log(board);
        if(JSON.stringify(userSolution)  == JSON.stringify(board) )
        {
            console.log("win");
            let x = document.getElementById("result");
            x.style.color="green";
            x.innerHTML =`<h2>Winner Winner Chicken Dinner</h2>`

        }
        else{
            console.log("loose");
            let x = document.getElementById("result");
            x.style.color="red";
            x.innerHTML =`<h2>Try again</h2>`
        }
    }
}
function solveBoard(){
    console.log(oldBoard);
    console.log(board);
    let k = confirm("Are you sure want see the Solution?"); 
    if(k){
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (oldBoard[i][j] == 0) {
                    let s = 't' + i.toString() + j.toString();
                    let s1 = board[i][j].toString();
                    box = document.getElementById(s);
                    box.innerHTML = `<input id ="i${i}${j}" type="text" class="box-input" value="${s1}">`;
                }
            }
        }
    }
    let x = document.getElementById("result");
    x.style.color ="blue";
    x.innerHTML =  `<h2>Sudoku is solved</h2>`;
}


function solve(bo){
    let find = findEmpty(bo);
    // console.log(find[0],find[1]);
    let row,col;
    if(find== undefined){
        return true;
    }
    else{
        row = find[0];
        col = find[1];
    }
    
    for(let i=1;i<10;i++)
    {
        // console.log(checkValidity(bo,i,[row,col]));
        if(checkValidity(bo,i,[row,col]))
        {
            // console.log(i);
            bo[row][col] = i;
            // console.log(bo);
            if(solve(bo))
            {
                return true;
            }
            bo[row][col] = 0;
        }
    }
    return false;
}

function checkValidity(bo, num, pos) {
    // let n = bo.length;
    //checking row
    for (let i = 0; i < 9; i++) {
        if (bo[pos[0]][i] == num && pos[1] != i) {
            return false;
        }
    }

    //checking column
    for (let i = 0; i < 9; i++) {
        if (bo[i][pos[1]] == num && pos[0] != i) {
            return false;
        }
    }

    //checking 3 x 3 box
    let x = Math.floor(pos[1] / 3);
    let y = Math.floor(pos[0] / 3);
    for (let i = y * 3; i < y * 3 + 3; i++) {
        for (let j = x * 3; j < x * 3 + 3; j++) {
            if (bo[i][j] == num && pos != [i, j]) {
                return false;
            }
        }
    }
    return true;
}

function findEmpty(bo)
{
    // let n = bo.length;
    for(let i=0;i<9;i++)
    {
        for(let j=0;j<9;j++)
        {
            if(bo[i][j] == 0)
            {
                return [i,j];
            }
        }
    }
}

function reset()
{
    location.reload();
}

// let ob = document.getElementsByClassName('inp');
// console.log(ob);
// ob.addEventListener('onchange', function checkTextValidity(){
//     console.log("changed", ob.value);
// });