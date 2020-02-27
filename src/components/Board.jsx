import React from "react";
import { connect } from "react-redux";
import Square from "./Square";
import calculateWinner from "./../logic/calculateWinner";

function Board(props) {
  const handleClick = i => {
    if (calculateWinner(props.squares) || props.squares[i]) {
      return;
    }
    props.dispatch({ type: "PLAY_SPOT", id: i });
    props.dispatch({ type: "CHANGE_TURN" });
    props.dispatch({ type: "UPDATE_HISTORY" });
  };

  const renderSquare = i => {
    return (
      <Square
        id={i}
        clickHandler={() => handleClick(i)}
        value={props.squares[i]}
      />
    );
  };

  const winner = calculateWinner(props.squares);

  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${props.xIsNext ? "X" : "0"}`;

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    xIsNext: state.xIsNext,
    squares: state.squares
  };
};

export default connect(mapStateToProps)(Board);
