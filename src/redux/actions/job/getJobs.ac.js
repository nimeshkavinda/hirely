import types from "../../types";
import { generateSyncAction } from "../../utils";
import API from "../../../api";

export const getJobs = () => async (dispatch) => {
  dispatch(generateSyncAction(types.job.getJobs.started));
  try {
    const data = await API.job.getJobs();
    dispatch(generateSyncAction(types.job.getJobs.success, data));
  } catch (error) {
    dispatch(generateSyncAction(types.job.getJobs.failed, error));
  }
};

export default getJobs;
