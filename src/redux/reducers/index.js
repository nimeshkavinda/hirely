import { combineReducers } from "redux";
import {
  empSignUp,
  empSignIn,
  createEmpAcc,
  getEmployerByUid,
} from "./employer";
import { signUp, signIn } from "./candidate";
import { createJob } from "./job";

const rootReducer = combineReducers({
  empSignUp,
  empSignIn,
  createEmpAcc,
  getEmployerByUid,
  signUp,
  signIn,
  createJob,
});

export default rootReducer;
