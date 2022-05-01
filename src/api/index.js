import { getJobs, getJobById, deleteJob, createJob, updateJob } from "./jobs";

const api = {
  user: { getJobs, getJobById, deleteJob, createJob, updateJob },
};

export default api;
