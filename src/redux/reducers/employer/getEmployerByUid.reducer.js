import types from "../../types";

export const getEmployerByUid = (
  state = { fetching: false, error: false },
  action
) => {
  switch (action.type) {
    case types.employer.getEmployerByUid.started:
      return Object.assign({}, { fetching: true });

    case types.employer.getEmployerByUid.success:
      return Object.assign({}, { fetching: false, data: { ...action.data } });

    case types.employer.getEmployerByUid.failed:
      return Object.assign({}, { fetching: false, error: { ...action.data } });

    default:
      return state;
  }
};

export default getEmployerByUid;
