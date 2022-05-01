import { combineReducers } from "redux";
import { empSignUp, empSignIn } from "./employer";

const rootReducer = combineReducers({
  empSignUp,
  empSignIn,
});

export default rootReducer;
