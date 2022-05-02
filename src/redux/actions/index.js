import {
  empSignUp,
  empSignIn,
  createEmpAcc,
  getEmployerByUid,
} from "./employer";
import { signUp, signIn } from "./candidate";
import { createJob } from "./job";

const actions = {
  empSignUp,
  empSignIn,
  createEmpAcc,
  getEmployerByUid,
  signUp,
  signIn,
  createJob,
};

export default actions;
