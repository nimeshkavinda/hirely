import { combineReducers } from "redux";
import {
  empSignUp,
  empSignIn,
  createEmpAcc,
  getEmployerByUid,
  updateEmployer,
  deleteEmployer,
} from "./employer";
import {
  signUp,
  signIn,
  createCandidateAcc,
  updateCandidate,
  getCandidateByUid,
  deleteCandidate,
  getCandidates,
} from "./candidate";
import { createJob, getJobs, getJobById, updateJob, deleteJob } from "./job";

const rootReducer = combineReducers({
  empSignUp,
  empSignIn,
  createEmpAcc,
  getEmployerByUid,
  updateEmployer,
  deleteEmployer,
  signUp,
  signIn,
  createCandidateAcc,
  updateCandidate,
  getCandidateByUid,
  deleteCandidate,
  getCandidates,
  createJob,
  getJobs,
  getJobById,
  updateJob,
  deleteJob,
});

export default rootReducer;
