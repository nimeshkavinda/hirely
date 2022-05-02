import { getJobs, getJobById, deleteJob, createJob, updateJob } from "./jobs";
import { createEmpAcc, getEmployerByUid } from "./employer";

const api = {
  job: { getJobs, getJobById, deleteJob, createJob, updateJob },
  employer: { createEmpAcc, getEmployerByUid },
};

export default api;
