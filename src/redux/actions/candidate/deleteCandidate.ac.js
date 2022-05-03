import types from "../../types";
import { generateSyncAction } from "../../utils";
import API from "../../../api";

export const deleteCandidate = (uid) => async (dispatch) => {
  dispatch(generateSyncAction(types.candidate.deleteCandidate.started));
  try {
    const data = await API.candidate.deleteCandidate(uid);
    dispatch(generateSyncAction(types.candidate.deleteCandidate.success, data));
  } catch (error) {
    dispatch(generateSyncAction(types.candidate.deleteCandidate.failed, error));
  }
};

export default deleteCandidate;
