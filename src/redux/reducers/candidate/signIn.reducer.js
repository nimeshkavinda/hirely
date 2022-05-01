import types from "../../types";

export const signIn = (state = { fetching: false, error: false }, action) => {
  switch (action.type) {
    case types.candidate.signIn.started:
      return Object.assign({}, { fetching: true });

    case types.candidate.signIn.success:
      return Object.assign({}, { fetching: false, data: { ...action.data } });

    case types.candidate.signIn.failed:
      return Object.assign({}, { fetching: false, error: { ...action.data } });

    default:
      return state;
  }
};

export default signIn;
