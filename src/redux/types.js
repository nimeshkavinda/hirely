import { generateActionTypes } from "./utils";

const types = {
  employer: {
    empSignUp: {
      ...generateActionTypes("employer.signUp"),
    },
    empSignIn: {
      ...generateActionTypes("employer.signIn"),
    },
  },
  candidate: {
    signUp: {
      ...generateActionTypes("candidate.signUp"),
    },
    signIn: {
      ...generateActionTypes("candidate.signIn"),
    },
  },
};

export default types;
