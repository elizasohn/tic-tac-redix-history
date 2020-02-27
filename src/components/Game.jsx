import React from "react";
import Board from "./Board";
import { connect } from "react-redux";

const Game = props => {
  const jumpTo = move => {
    props.dispatch({ type: "TIME_MACHINE", move: move });
  };

  const moves = props.history.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    history: state.history
  };
};

export default connect(mapStateToProps)(Game);
