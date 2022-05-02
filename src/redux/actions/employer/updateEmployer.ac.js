import types from "../../types";
import { generateSyncAction } from "../../utils";
import API from "../../../api";

export const updateEmployer = (uid, userData) => async (dispatch) => {
  dispatch(generateSyncAction(types.employer.updateEmployer.started));
  try {
    const data = await API.employer.updateEmployer(uid, userData);
    dispatch(generateSyncAction(types.employer.updateEmployer.success, data));
  } catch (error) {
    dispatch(generateSyncAction(types.employer.updateEmployer.failed, error));
  }
};

export default updateEmployer;
