import types from "../../types";

export const createEmpAcc = (
  state = { fetching: false, error: false },
  action
) => {
  switch (action.type) {
    case types.employer.createEmpAcc.started:
      return Object.assign({}, { fetching: true });

    case types.employer.createEmpAcc.success:
      return Object.assign({}, { fetching: false, data: { ...action.data } });

    case types.employer.createEmpAcc.failed:
      return Object.assign({}, { fetching: false, error: { ...action.data } });

    default:
      return state;
  }
};

export default createEmpAcc;
