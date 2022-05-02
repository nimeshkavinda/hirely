import types from "../../types";

export const getJobById = (
  state = { fetching: false, error: false },
  action
) => {
  switch (action.type) {
    case types.job.getJobById.started:
      return Object.assign({}, { fetching: true });

    case types.job.getJobById.success:
      return Object.assign({}, { fetching: false, data: { ...action.data } });

    case types.job.getJobById.failed:
      return Object.assign({}, { fetching: false, error: { ...action.data } });

    default:
      return state;
  }
};

export default getJobById;
