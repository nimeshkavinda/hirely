import types from "../../types";
import { generateSyncAction } from "../../utils";
import { auth } from "../../../../firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const empSignUp = (email, password) => async (dispatch) => {
  dispatch(generateSyncAction(types.employer.signUp.started));
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const data = userCredential.user;
      dispatch(generateSyncAction(types.employer.signUp.success, data));
    })
    .catch((error) => {
      // const error = { errorCode: err.code, message: err.message };
      dispatch(generateSyncAction(types.employer.signUp.failed, error));
    });
};

export default empSignUp;
