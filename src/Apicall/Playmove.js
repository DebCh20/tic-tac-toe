function Playmove(gameState, id) {
    let winMatrix = [[0, 1, 2], [0, 3, 6], [0, 4, 8],
    [1, 4, 7], [2, 5, 8], [3, 4, 5],
    [6, 7, 8], [2, 4, 6]];

    for(let i=0;i<8;i++){
        if(id==winMatrix[i][0]){
            if(gameState[winMatrix[i][1]]==undefined)
                return winMatrix[i][1]
            if(gameState[winMatrix[i][2]]==undefined)
                return winMatrix[i][2]
        }
        else if(id==winMatrix[i][1]){
            if(gameState[winMatrix[i][0]]==undefined)
                return winMatrix[i][0]
            if(gameState[winMatrix[i][2]]==undefined)
                return winMatrix[i][2]
        }
        else if(id==winMatrix[i][2]){
            if(gameState[winMatrix[i][0]]==undefined)
                return winMatrix[i][0]
            if(gameState[winMatrix[i][0]]==undefined)
                return winMatrix[i][0]
        }
    }
  
}

export default Playmove