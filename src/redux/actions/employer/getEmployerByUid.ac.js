import types from "../../types";
import { generateSyncAction } from "../../utils";
import API from "../../../api";

export const getEmployerByUid = (uid) => async (dispatch) => {
  dispatch(generateSyncAction(types.employer.getEmployerByUid.started));
  try {
    const data = await API.employer.getEmployerByUid(uid);
    dispatch(generateSyncAction(types.employer.getEmployerByUid.success, data));
  } catch (error) {
    dispatch(generateSyncAction(types.employer.getEmployerByUid.failed, error));
  }
};

export default getEmployerByUid;
