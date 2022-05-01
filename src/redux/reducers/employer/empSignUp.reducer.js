import types from "../../types";

export const empSignUp = (
  state = { fetching: false, error: false },
  action
) => {
  switch (action.type) {
    case types.employer.empSignUp.started:
      return Object.assign({}, { fetching: true });

    case types.employer.empSignUp.success:
      return Object.assign({}, { fetching: false, data: { ...action.data } });

    case types.employer.empSignUp.failed:
      return Object.assign({}, { fetching: false, error: { ...action.data } });

    default:
      return state;
  }
};

export default empSignUp;
