import types from "../../types";

export const updateCandidate = (
  state = { fetching: false, error: false },
  action
) => {
  switch (action.type) {
    case types.candidate.updateCandidate.started:
      return Object.assign({}, { fetching: true });

    case types.candidate.updateCandidate.success:
      return Object.assign({}, { fetching: false, data: { ...action.data } });

    case types.candidate.updateCandidate.failed:
      return Object.assign({}, { fetching: false, error: { ...action.data } });

    default:
      return state;
  }
};

export default updateCandidate;
