import types from "../../types";
import { generateSyncAction } from "../../utils";
import API from "../../../api";

export const updateCandidate = (uid, userData) => async (dispatch) => {
  dispatch(generateSyncAction(types.candidate.updateCandidate.started));
  try {
    const data = await API.candidate.updateCandidate(uid, userData);
    dispatch(generateSyncAction(types.candidate.updateCandidate.success, data));
  } catch (error) {
    dispatch(generateSyncAction(types.candidate.updateCandidate.failed, error));
  }
};

export default updateCandidate;
