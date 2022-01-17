import './App.css';
import React from 'react';
import Grid from './Grid.js';
class App extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Grid />
        </div>
      </div>
    );
  }
}

export default App;
