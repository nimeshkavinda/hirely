import types from "../../types";

export const signUp = (state = { fetching: false, error: false }, action) => {
  switch (action.type) {
    case types.candidate.signUp.started:
      return Object.assign({}, { fetching: true });

    case types.candidate.signUp.success:
      return Object.assign({}, { fetching: false, data: { ...action.data } });

    case types.candidate.signUp.failed:
      return Object.assign({}, { fetching: false, error: { ...action.data } });

    default:
      return state;
  }
};

export default signUp;
