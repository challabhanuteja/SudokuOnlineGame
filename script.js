let board = [
    [7,8,0,4,0,0,1,2,0],
    [6,0,0,0,7,5,0,0,9],
    [0,0,0,6,0,1,0,7,8],
    [0,0,7,0,4,0,2,6,0],
    [0,0,1,0,5,0,9,3,0],
    [9,0,4,0,6,0,0,0,5],
    [0,7,0,3,0,0,0,1,2],
    [1,2,0,0,0,7,4,0,0],
    [0,4,9,2,0,6,0,0,7]
];
console.log(board);
let box;
for(let i=0;i<9;i++)
{
    for(let j=0;j<9;j++)
    {
        let s = 't'+ i.toString() + j.toString();
        box = document.getElementById(s);
        if(board[i][j] == 0)
        {
            box.innerHTML = `<input type="text" class="box-input">`;
        }
        else
        {
            box.innerHTML = board[i][j];
        }
    }
}