import React from 'react'

function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }

class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          squares: Array(25).fill('P'),
        };
      }
    getMatrix(){
        let matrix = [];
        let k= 0
        for(let i=0; i<5; i++){
            let row = []
            for (let j=0; j<5; j++){
                if(this.state.squares[k]=="X"){
                    row.push(0)
                }
                else{
                    row.push(1);
                }
                k+=1
            }
            matrix.push(row);
        }
        return matrix
    }
    getEmptyMatrix(){
        let matrix = [];
        for(let i=0; i<5; i++){
            let row = []
            for (let j=0; j<5; j++){
                row.push(0)
            }
            matrix.push(row);
        }
        return matrix
    }
    isSafe(matrix, x, y){
        if (x >= 0 && x < 5 && y >= 0 && y < 5&& matrix[x][y] == 1){
            return true;
        }
        return false;
    }
    getAllPaths(matrix,ourMatrix,visited,i,j){
        let flag = false
        if(i==4 && j==4 && matrix[i][j]==1){
            ourMatrix[i][j] = 1;
            return true
        }
        if(this.isSafe(matrix,i,j)){
            if(visited[i][j]==1){
                return false
            }
            visited[i][j]=1
            if(this.getAllPaths(matrix,ourMatrix,visited,i+1,j)){
                ourMatrix[i][j] = 1
                flag = true
            }  
            if(this.getAllPaths(matrix,ourMatrix,visited,i,j+1)){
                ourMatrix[i][j] = 1
                flag= true
            }
            visited[i][j]=0
            if(flag){
                return true
            }
            return false
        }
        return false
    }
    getNewSquares(result){
        let newSquares = []
        for(let i=0; i<5; i++){
            for(let j=0; j<5; j++){
                if(result[i][j]==1){
                    newSquares.push("P")
                }
                else{
                    newSquares.push("X")
                }
            }
        }
        return newSquares
    }
    compare(a,b){
        for(let i=0; i<25; i++){
            if(a[i]!=b[i]){
                return false
            }
        }
        return true
    }
    componentDidUpdate(pProps,pState)
    {
        let matrix = this.getMatrix();
        let emptyMatrix = this.getEmptyMatrix();
        let visited = this.getEmptyMatrix();
        this.getAllPaths(matrix,emptyMatrix,visited,0,0);
        let newSquares = this.getNewSquares(emptyMatrix);
        if(this.compare(newSquares,pState.squares)==false){
            this.setState({
                squares: newSquares,
            });
        }
    }

    handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({
        squares: squares,
    });
    }
    
    handleClear(){
        let newSqaures = Array(25).fill('P')
        this.setState({
            squares: newSqaures,
        });
    }

    renderSquare(i) {
    return (
        <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
        />
    );
    }

    render() {

    return (
        <>
        <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            {this.renderSquare(3)}
            {this.renderSquare(4)}
        </div>
        <div className="board-row">
            {this.renderSquare(5)}
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
            {this.renderSquare(9)}
        </div>
        <div className="board-row">
            {this.renderSquare(10)}
            {this.renderSquare(11)}
            {this.renderSquare(12)}
            {this.renderSquare(13)}
            {this.renderSquare(14)}
        </div>
        <div className="board-row">
            {this.renderSquare(15)}
            {this.renderSquare(16)}
            {this.renderSquare(17)}
            {this.renderSquare(18)}
            {this.renderSquare(19)}
        </div>
        <div className="board-row">
            {this.renderSquare(20)}
            {this.renderSquare(21)}
            {this.renderSquare(22)}
            {this.renderSquare(23)}
            {this.renderSquare(24)}
        </div>
        <button onClick={()=>this.handleClear()}>Clear</button>
        </>
    );
    }
}

export default Grid
