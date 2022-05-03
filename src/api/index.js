import { getJobs, getJobById, deleteJob, createJob, updateJob } from "./jobs";
import {
  createEmpAcc,
  getEmployerByUid,
  updateEmployer,
  deleteEmployer,
} from "./employer";
import {
  createCandidateAcc,
  updateCandidate,
  getCandidateByUid,
  deleteCandidate,
  getCandidates,
} from "./candidates";

const api = {
  job: { getJobs, getJobById, deleteJob, createJob, updateJob },
  employer: { createEmpAcc, getEmployerByUid, updateEmployer, deleteEmployer },
  candidate: {
    createCandidateAcc,
    updateCandidate,
    getCandidateByUid,
    deleteCandidate,
    getCandidates,
  },
};

export default api;
