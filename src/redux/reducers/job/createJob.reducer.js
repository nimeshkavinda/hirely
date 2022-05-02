import types from "../../types";

export const createJob = (
  state = { fetching: false, error: false },
  action
) => {
  switch (action.type) {
    case types.job.createJob.started:
      return Object.assign({}, { fetching: true });

    case types.job.createJob.success:
      return Object.assign({}, { fetching: false, data: { ...action.data } });

    case types.job.createJob.failed:
      return Object.assign({}, { fetching: false, error: { ...action.data } });

    default:
      return state;
  }
};

export default createJob;
