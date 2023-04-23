let btn = document.querySelectorAll('.btn');
let play1 = document.querySelector('.player1');
let play2 = document.querySelector('.player2');
let winnerText = document.querySelector('.winner');
let scorePlayerOne = document.querySelector('.one');
let scorePlayerTwo = document.querySelector('.two');
btnArray = Array.from(btn);
let winCondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let option = ["","","","","","","","",""];
let counter = 1;


class player{
    constructor(name, marker,score){
        this.name = name;
        this.marker = marker;
        this.score = score;
    }
}
let player1 = new player('player1','O',0);
let player2 = new player('player2','X',0);


tunrn()
btnArray.forEach(function (tile) {
    tile.addEventListener('click', function() {
        checkMarker(tile);
        tunrn()
    });
})
function checkMarker(target){
    if(target.innerHTML === ''){
        assignMarker(target);
        counter++;
    }
    else{
        return;
    }
}
function tunrn(){
    if(counter%2 !== 0){
        play1.style.textShadow = '1px 1px 2px blue'
        play2.style.textShadow = 'none'
    }
    else{
        play2.style.textShadow = '1px 1px 4px blue'
        play1.style.textShadow = 'none'
    }
}
function assignMarker(tag){
    if(counter%2 !== 0){
        option[tag.value] = "O"
        renderMarker(tag,player1.marker)
        
    }
    else{
        option[tag.value] = "X"
        renderMarker(tag,player2.marker)
        
    }
}
function renderMarker(bordTile,marker){
    bordTile.innerHTML = marker;  
    console.log(option)
    checkWinner(marker)  
}

function checkWinner(mark){
    let winner = false;
    for(let i = 0 ; i < winCondition.length ;i++){
        let condition = winCondition[i];
        let cellA = option[condition[0]];
        let cellB = option[condition[1]];
        let cellC = option[condition[2]];
         if(cellA == "" || cellB == "" || cellC == ""){
            continue;
         }
         else if(cellA===cellB && cellB===cellC && cellA===cellA){
            winner = true;
         }
    }
    if(winner){
        let wonPlay = mark === 'X' ? 'player2':'player1';
        score(wonPlay)
        reset()
    }

}
function score(play){
    if(play === 'player2'){
        player2.score ++;
        
    }
    else if(play === 'player1'){
        player1.score ++;
        
    }
    scorePlayerTwo.innerHTML = player2.score;
    scorePlayerOne.innerHTML = player1.score;
}
function reset(){
    btnArray.forEach(function (tile) {
        tile.innerHTML = '';
    })
    option = ["","","","","","","","",""];
}