const initialState = {
  xIsNext: true
};

const reducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case "CHANGE_TURN":
      newState = Object.assign({}, state, { xIsNext: !state.xIsNext });
      return newState;
    default:
      return state;
  }
};

export default reducer;
