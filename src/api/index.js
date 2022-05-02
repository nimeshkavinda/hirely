import { getJobs, getJobById, deleteJob, createJob, updateJob } from "./jobs";
import { createEmpAcc, getEmployerByUid, updateEmployer } from "./employer";

const api = {
  job: { getJobs, getJobById, deleteJob, createJob, updateJob },
  employer: { createEmpAcc, getEmployerByUid, updateEmployer },
};

export default api;
