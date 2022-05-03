import types from "../../types";

export const getCandidates = (
  state = { fetching: false, error: false },
  action
) => {
  switch (action.type) {
    case types.candidate.getCandidates.started:
      return Object.assign({}, { fetching: true });

    case types.candidate.getCandidates.success:
      return Object.assign({}, { fetching: false, data: { ...action.data } });

    case types.candidate.getCandidates.failed:
      return Object.assign({}, { fetching: false, error: { ...action.data } });

    default:
      return state;
  }
};

export default getCandidates;
