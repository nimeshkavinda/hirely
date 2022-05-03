import types from "../../types";
import { generateSyncAction } from "../../utils";
import API from "../../../api";

export const deleteEmployer = (uid) => async (dispatch) => {
  dispatch(generateSyncAction(types.employer.deleteEmployer.started));
  try {
    const data = await API.employer.deleteEmployer(uid);
    dispatch(generateSyncAction(types.employer.deleteEmployer.success, data));
  } catch (error) {
    dispatch(generateSyncAction(types.employer.deleteEmployer.failed, error));
  }
};

export default deleteEmployer;
