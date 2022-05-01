import { combineReducers } from "redux";
import { empSignUp, empSignIn } from "./employer";
import { signUp, signIn } from "./candidate";

const rootReducer = combineReducers({
  empSignUp,
  empSignIn,
  signUp,
  signIn,
});

export default rootReducer;
