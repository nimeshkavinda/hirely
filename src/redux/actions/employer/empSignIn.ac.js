import types from "../../types";
import { generateSyncAction } from "../../utils";
import { auth } from "../../../firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";

export const empSignIn = (email, password) => async (dispatch) => {
  dispatch(generateSyncAction(types.employer.empSignIn.started));
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const data = userCredential.user;
      dispatch(generateSyncAction(types.employer.empSignIn.success, data));
    })
    .catch((error) => {
      // const error = { errorCode: err.code, message: err.message };
      dispatch(generateSyncAction(types.employer.empSignIn.failed, error));
    });
};

export default empSignIn;
