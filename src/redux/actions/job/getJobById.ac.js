import types from "../../types";
import { generateSyncAction } from "../../utils";
import API from "../../../api";

export const getJobById = (id) => async (dispatch) => {
  dispatch(generateSyncAction(types.job.getJobById.started));
  try {
    const data = await API.job.getJobById(id);
    dispatch(generateSyncAction(types.job.getJobById.success, data));
  } catch (error) {
    dispatch(generateSyncAction(types.job.getJobById.failed, error));
  }
};

export default getJobById;
