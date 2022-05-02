import { generateActionTypes } from "./utils";

const types = {
  employer: {
    empSignUp: {
      ...generateActionTypes("employer.signUp"),
    },
    empSignIn: {
      ...generateActionTypes("employer.signIn"),
    },
    createEmpAcc: {
      ...generateActionTypes("employer.createEmpAcc"),
    },
    getEmployerByUid: {
      ...generateActionTypes("employer.getEmployerByUid"),
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
  job: {
    createJob: {
      ...generateActionTypes("job.createJob"),
    },
  },
};

export default types;
