import { getJobs, getJobById, deleteJob, createJob, updateJob } from "./jobs";
import { createEmpAcc, getEmployerByUid, updateEmployer } from "./employer";
import { createCandidateAcc, updateCandidate } from "./candidates";

const api = {
  job: { getJobs, getJobById, deleteJob, createJob, updateJob },
  employer: { createEmpAcc, getEmployerByUid, updateEmployer },
  candidate: { createCandidateAcc, updateCandidate },
};

export default api;
