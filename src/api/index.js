import { getJobs, getJobById, deleteJob, createJob, updateJob } from "./jobs";
import { createEmpAcc } from "./employer";

const api = {
  user: { getJobs, getJobById, deleteJob, createJob, updateJob },
  employer: { createEmpAcc },
};

export default api;
