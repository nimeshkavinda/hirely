import types from "../../types";
import { generateSyncAction } from "../../utils";
import API from "../../../api";

export const getCandidates = () => async (dispatch) => {
  dispatch(generateSyncAction(types.candidate.getCandidates.started));
  try {
    const data = await API.candidate.getCandidates();
    dispatch(generateSyncAction(types.candidate.getCandidates.success, data));
  } catch (error) {
    dispatch(generateSyncAction(types.candidate.getCandidates.failed, error));
  }
};

export default getCandidates;
