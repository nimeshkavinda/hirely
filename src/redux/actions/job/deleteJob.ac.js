import types from "../../types";
import { generateSyncAction } from "../../utils";
import API from "../../../api";

export const deleteJob = (id) => async (dispatch) => {
  dispatch(generateSyncAction(types.job.deleteJob.started));
  try {
    const data = await API.job.deleteJob(id);
    dispatch(generateSyncAction(types.job.deleteJob.success, data));
  } catch (error) {
    dispatch(generateSyncAction(types.job.deleteJob.failed, error));
  }
};

export default deleteJob;
