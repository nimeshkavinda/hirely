import { combineReducers } from "redux";
import {
  empSignUp,
  empSignIn,
  createEmpAcc,
  getEmployerByUid,
  updateEmployer,
} from "./employer";
import { signUp, signIn } from "./candidate";
import { createJob, getJobs, getJobById, updateJob } from "./job";

const rootReducer = combineReducers({
  empSignUp,
  empSignIn,
  createEmpAcc,
  getEmployerByUid,
  updateEmployer,
  signUp,
  signIn,
  createJob,
  getJobs,
  getJobById,
  updateJob,
});

export default rootReducer;
