import types from "../../types";
import { generateSyncAction } from "../../utils";
import { auth } from "../../../firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const signUp = (email, password) => async (dispatch) => {
  dispatch(generateSyncAction(types.candidate.signUp.started));
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const data = userCredential.user;
      dispatch(generateSyncAction(types.candidate.signUp.success, data));
    })
    .catch((error) => {
      // const error = { errorCode: err.code, message: err.message };
      dispatch(generateSyncAction(types.candidate.signUp.failed, error));
    });
};

export default signUp;
