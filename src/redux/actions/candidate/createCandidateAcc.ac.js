import types from "../../types";
import { generateSyncAction } from "../../utils";
import API from "../../../api";

export const createCandidateAcc = (user) => async (dispatch) => {
  dispatch(generateSyncAction(types.candidate.createCandidateAcc.started));
  try {
    const data = await API.candidate.createCandidateAcc(user);
    dispatch(
      generateSyncAction(types.candidate.createCandidateAcc.success, data)
    );
  } catch (error) {
    dispatch(
      generateSyncAction(types.candidate.createCandidateAcc.failed, error)
    );
  }
};

export default createCandidateAcc;
