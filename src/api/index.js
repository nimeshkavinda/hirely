import { getJobs, getJobById, deleteJob, createJob, updateJob } from "./jobs";
import { createEmpAcc, getEmployerByUid, updateEmployer } from "./employer";
import { createCandidateAcc } from "./candidates";

const api = {
  job: { getJobs, getJobById, deleteJob, createJob, updateJob },
  employer: { createEmpAcc, getEmployerByUid, updateEmployer },
  candidate: { createCandidateAcc },
};

export default api;
