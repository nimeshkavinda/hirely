import types from "../../types";

export const createCandidateAcc = (
  state = { fetching: false, error: false },
  action
) => {
  switch (action.type) {
    case types.candidate.createCandidateAcc.started:
      return Object.assign({}, { fetching: true });

    case types.candidate.createCandidateAcc.success:
      return Object.assign({}, { fetching: false, data: { ...action.data } });

    case types.candidate.createCandidateAcc.failed:
      return Object.assign({}, { fetching: false, error: { ...action.data } });

    default:
      return state;
  }
};

export default createCandidateAcc;
