import turnReducer from "./turn-reducer";
import playReducer from "./play-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  play: playReducer,
  turn: turnReducer
});

export default rootReducer;
