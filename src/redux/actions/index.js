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
  getCandidates,
} from "./candidate";
import { createJob, getJobs, getJobById, updateJob, deleteJob } from "./job";

const actions = {
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
  getCandidates,
  createJob,
  getJobs,
  getJobById,
  updateJob,
  deleteJob,
};

export default actions;
