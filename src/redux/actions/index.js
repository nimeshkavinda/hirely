import {
  empSignUp,
  empSignIn,
  createEmpAcc,
  getEmployerByUid,
  updateEmployer,
} from "./employer";
import {
  signUp,
  signIn,
  createCandidateAcc,
  updateCandidate,
  getCandidateByUid,
} from "./candidate";
import { createJob, getJobs, getJobById, updateJob, deleteJob } from "./job";

const actions = {
  empSignUp,
  empSignIn,
  createEmpAcc,
  getEmployerByUid,
  updateEmployer,
  signUp,
  signIn,
  createCandidateAcc,
  updateCandidate,
  getCandidateByUid,
  createJob,
  getJobs,
  getJobById,
  updateJob,
  deleteJob,
};

export default actions;
