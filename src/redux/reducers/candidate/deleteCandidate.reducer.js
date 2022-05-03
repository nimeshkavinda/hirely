import types from "../../types";

export const deleteCandidate = (
  state = { fetching: false, error: false },
  action
) => {
  switch (action.type) {
    case types.candidate.deleteCandidate.started:
      return Object.assign({}, { fetching: true });

    case types.candidate.deleteCandidate.success:
      return Object.assign({}, { fetching: false, data: { ...action.data } });

    case types.candidate.deleteCandidate.failed:
      return Object.assign({}, { fetching: false, error: { ...action.data } });

    default:
      return state;
  }
};

export default deleteCandidate;
