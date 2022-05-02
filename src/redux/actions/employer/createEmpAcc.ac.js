import types from "../../types";
import { generateSyncAction } from "../../utils";
import API from "../../../api";

export const createEmpAcc = (user) => async (dispatch) => {
  dispatch(generateSyncAction(types.employer.createEmpAcc.started));
  try {
    const data = await API.employer.createEmpAcc(user);
    dispatch(generateSyncAction(types.employer.createEmpAcc.success, data));
  } catch (error) {
    dispatch(generateSyncAction(types.employer.createEmpAcc.failed, error));
  }
};

export default createEmpAcc;
