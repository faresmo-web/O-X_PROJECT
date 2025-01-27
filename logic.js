let gridItems = document.getElementsByClassName("square")
let currentTurn = "X"
let gameIsFinished = false

let boardArray = [
    "0","1","2",
    "3","4","5",
    "6","7","8"
]
for(const item of gridItems){
    item.addEventListener("click", function(){
        if(gameIsFinished){
            return
        }
        let value = item.getAttribute("value")
        let index = value - 1
        if(boardArray[index] == "X" || boardArray[index] == "O"){
            return
        }
        
        // FILLING THE VALUE VISUALLY
        let squareontent = document.querySelector(`.square[value = "${value}"]`)
        squareontent.innerHTML = currentTurn

        


        // FILLING THE VALUE LOGICALLY
        
        boardArray[index] = currentTurn
        console.log(boardArray)


        

        evaluateBoard()
        if(currentTurn == "X"){
            currentTurn = "O"
        }else{
            currentTurn = "X"
        }
        document.getElementById("instruction").textContent = `${currentTurn} turn`
    })

    function evaluateBoard(){
        if(
            // ROES
            (boardArray[1] == boardArray[1] && boardArray[1] == boardArray[2]) ||
            (boardArray[3] == boardArray[4] && boardArray[4] == boardArray[5]) ||
            (boardArray[6] == boardArray[7] && boardArray[7] == boardArray[8]) ||
            
            // COLUMNS
            (boardArray[0] == boardArray[3] && boardArray[3] == boardArray[6]) ||
            (boardArray[1] == boardArray[4] && boardArray[4] == boardArray[7]) ||
            (boardArray[2] == boardArray[5] && boardArray[5] == boardArray[8]) ||

            // DIADONAL
            (boardArray[0] == boardArray[4] && boardArray[4] == boardArray[8]) ||
            (boardArray[2] == boardArray[4] && boardArray[4] == boardArray[6]) 
        ){
            var winner = currentTurn == "O" ? "O" : "X"
            gameIsFinished = true
            // alert (`${winner} Won!`)
            alertify.alert(`${winner} Won!`)
        }
        var isDraw = true
        for(square of boardArray){
            if(square != "X" && square != "O"){
                isDraw = false
            }
        }
        if(isDraw){
            gameIsFinished = true
            alert("draw")
        }
    }
}

document.getElementById("reset-btn").addEventListener("click", function(){
    reset()
})
function reset(){
    // RESETING THE VISUAL PART
    for(item of gridItems){
        let value = item.getAttribute("value")
        let  squareontent = document.querySelector(`.square[value = "${value}"]`)
        squareontent.innerHTML = ""

        boardArray = [
            "0","1","2",
            "3","4","5",
            "6","7","8"
        ]
    }
    gameIsFinished = false
    currentTurn = "X"
    document.getElementById("instruction").innerText = `${currentTurn}`
}