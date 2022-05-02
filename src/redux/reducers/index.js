import { combineReducers } from "redux";
import { empSignUp, empSignIn, createEmpAcc } from "./employer";
import { signUp, signIn } from "./candidate";

const rootReducer = combineReducers({
  empSignUp,
  empSignIn,
  createEmpAcc,
  signUp,
  signIn,
});

export default rootReducer;
