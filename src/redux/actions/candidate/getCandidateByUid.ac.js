import types from "../../types";
import { generateSyncAction } from "../../utils";
import API from "../../../api";

export const getCandidateByUid = (uid) => async (dispatch) => {
  dispatch(generateSyncAction(types.candidate.getCandidateByUid.started));
  try {
    const data = await API.candidate.getCandidateByUid(uid);
    dispatch(
      generateSyncAction(types.candidate.getCandidateByUid.success, data)
    );
  } catch (error) {
    dispatch(
      generateSyncAction(types.candidate.getCandidateByUid.failed, error)
    );
  }
};

export default getCandidateByUid;
