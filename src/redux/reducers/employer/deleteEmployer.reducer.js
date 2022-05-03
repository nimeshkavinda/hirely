import types from "../../types";

export const deleteEmployer = (
  state = { fetching: false, error: false },
  action
) => {
  switch (action.type) {
    case types.employer.deleteEmployer.started:
      return Object.assign({}, { fetching: true });

    case types.employer.deleteEmployer.success:
      return Object.assign({}, { fetching: false, data: { ...action.data } });

    case types.employer.deleteEmployer.failed:
      return Object.assign({}, { fetching: false, error: { ...action.data } });

    default:
      return state;
  }
};

export default deleteEmployer;
