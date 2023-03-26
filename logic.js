class Game{
    constructor(){
        this.currentPlayer = 'X'
        this.board = ['','','','','','','','','']
        this.gameGoing = true
    }

    checkForWin(){
        for (let combo of winningCombos) {
            if (
              this.board[combo[0]] === this.currentPlayer &&
              this.board[combo[1]] === this.currentPlayer &&
              this.board[combo[2]] === this.currentPlayer
            ) {
              combo.forEach((index) => {
                squares[index].classList.add("win");
              });
              this.gameGoing = false
              return true;
            }
          }
          return false;
    }

    restart(){
        const button = document.createElement("button"); // create new button element
        button.textContent = "Restart!"; // set button text
        button.setAttribute("type", "button"); // set button type
        button.setAttribute("id", "myButton"); // set button ID
        document.body.appendChild(button); // append button to the body of the HTML document


       
    }

    nextTurn(){
        if(this.currentPlayer === "X"){
            this.currentPlayer = "O"
        }else{
            this.currentPlayer = "X"
        }
    }
    doTurn(cell,index){
        cell.innerText = this.currentPlayer
        this.board[index] = this.currentPlayer

    }
}





const squares = document.querySelectorAll("td")
const restart = document.querySelector("button")
const game = new Game()

squares.forEach( (cell,index) =>{
    cell.addEventListener('click', () =>{
        game.doTurn(cell,index)
        if(game.checkForWin()){
            game.restart()
        }
        game.nextTurn()

    })

})
if(game.gameGoing = false){
    restart.addEventListener('click', () =>{
        location.reload()
    })
}



const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];