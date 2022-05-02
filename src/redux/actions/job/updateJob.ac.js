import types from "../../types";
import { generateSyncAction } from "../../utils";
import API from "../../../api";

export const updateJob = (id, jobData) => async (dispatch) => {
  dispatch(generateSyncAction(types.job.updateJob.started));
  try {
    const data = await API.job.updateJob(id, jobData);
    dispatch(generateSyncAction(types.job.updateJob.success, data));
  } catch (error) {
    dispatch(generateSyncAction(types.job.updateJob.failed, error));
  }
};

export default updateJob;
