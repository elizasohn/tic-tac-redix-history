const initialState = {
  squares: Array(9).fill(null),
  xIsNext: true,
  history: [{ squares: Array(9).fill(null) }],
  currentMove: 1
};

const reducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case "PLAY_SPOT":
      const newSquares = [...state.squares];
      newSquares[action.id] = state.xIsNext ? "X" : "0";
      newState = Object.assign({}, state, { squares: newSquares });
      return newState;
    case "CHANGE_TURN":
      newState = Object.assign({}, state, { xIsNext: !state.xIsNext });
      return newState;
    case "UPDATE_HISTORY":
      const newHistory = state.history.slice(0, state.currentMove);
      const newCurrentMove = state.currentMove + 1;
      newHistory[state.currentMove] = { squares: [...state.squares] };
      newState = Object.assign({}, state, {
        history: newHistory,
        currentMove: newCurrentMove
      });
      return newState;
    case "TIME_MACHINE":
      newState = Object.assign({}, state, {
        squares: state.history[action.move].squares,
        currentMove: action.move + 1
      });
      return newState;
    default:
      return state;
  }
};

export default reducer;
