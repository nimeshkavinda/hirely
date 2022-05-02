import types from "../../types";
import { generateSyncAction } from "../../utils";
import API from "../../../api";

export const createJob = (job) => async (dispatch) => {
  dispatch(generateSyncAction(types.job.createJob.started));
  try {
    const data = await API.job.createJob(job);
    dispatch(generateSyncAction(types.job.createJob.success, data));
  } catch (error) {
    dispatch(generateSyncAction(types.job.createJob.failed, error));
  }
};

export default createJob;
