import types from "../../types";

export const updateEmployer = (
  state = { fetching: false, error: false },
  action
) => {
  switch (action.type) {
    case types.employer.updateEmployer.started:
      return Object.assign({}, { fetching: true });

    case types.employer.updateEmployer.success:
      return Object.assign({}, { fetching: false, data: { ...action.data } });

    case types.employer.updateEmployer.failed:
      return Object.assign({}, { fetching: false, error: { ...action.data } });

    default:
      return state;
  }
};

export default updateEmployer;
