import types from "../../types";

export const getJobs = (state = { fetching: false, error: false }, action) => {
  switch (action.type) {
    case types.job.getJobs.started:
      return Object.assign({}, { fetching: true });

    case types.job.getJobs.success:
      return Object.assign({}, { fetching: false, data: { ...action.data } });

    case types.job.getJobs.failed:
      return Object.assign({}, { fetching: false, error: { ...action.data } });

    default:
      return state;
  }
};

export default getJobs;
