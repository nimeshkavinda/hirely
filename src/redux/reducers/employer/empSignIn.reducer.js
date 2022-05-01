import types from "../../types";

export const empSignIn = (
  state = { fetching: false, error: false },
  action
) => {
  switch (action.type) {
    case types.employer.signIn.started:
      return Object.assign({}, { fetching: true });

    case types.employer.signIn.success:
      return Object.assign({}, { fetching: false, data: { ...action.data } });

    case types.employer.signIn.failed:
      return Object.assign({}, { fetching: false, error: { ...action.data } });

    default:
      return state;
  }
};

export default empSignIn;
