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
    updateEmployer: {
      ...generateActionTypes("employer.updateEmployer"),
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
    getJobs: {
      ...generateActionTypes("job.getJobs"),
    },
  },
};

export default types;
