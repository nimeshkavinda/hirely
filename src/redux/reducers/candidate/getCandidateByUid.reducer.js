import types from "../../types";

export const getCandidateByUid = (
  state = { fetching: false, error: false },
  action
) => {
  switch (action.type) {
    case types.candidate.getCandidateByUid.started:
      return Object.assign({}, { fetching: true });

    case types.candidate.getCandidateByUid.success:
      return Object.assign({}, { fetching: false, data: { ...action.data } });

    case types.candidate.getCandidateByUid.failed:
      return Object.assign({}, { fetching: false, error: { ...action.data } });

    default:
      return state;
  }
};

export default getCandidateByUid;
