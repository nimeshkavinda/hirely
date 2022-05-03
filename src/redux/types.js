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
    deleteEmployer: {
      ...generateActionTypes("employer.deleteEmployer"),
    },
  },
  candidate: {
    signUp: {
      ...generateActionTypes("candidate.signUp"),
    },
    signIn: {
      ...generateActionTypes("candidate.signIn"),
    },
    createCandidateAcc: {
      ...generateActionTypes("candidate.createCandidateAcc"),
    },
    updateCandidate: {
      ...generateActionTypes("candidate.updateCandidate"),
    },
    getCandidateByUid: {
      ...generateActionTypes("candidate.getCandidateByUid"),
    },
    deleteCandidate: {
      ...generateActionTypes("candidate.deleteCandidate"),
    },
    getCandidates: {
      ...generateActionTypes("candidate.getCandidates"),
    },
  },
  job: {
    createJob: {
      ...generateActionTypes("job.createJob"),
    },
    getJobs: {
      ...generateActionTypes("job.getJobs"),
    },
    getJobById: {
      ...generateActionTypes("job.getJobById"),
    },
    updateJob: {
      ...generateActionTypes("job.updateJob"),
    },
    deleteJob: {
      ...generateActionTypes("job.deleteJob"),
    },
  },
};

export default types;
