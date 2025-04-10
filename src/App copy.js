import {useState} from 'react';
import './App.css';

function Square() {
  const [value, setValue] = useState(null);
  function handleClick() {
    setValue("x")
  }


  
  
return (
      <button 
        className="square"
        onClick={handleClick}
        >
        {value}</button>
        );
}
function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
      <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  )
}

export default function App() {
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Board />
    </div>
  )
}