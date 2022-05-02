import types from "../../types";

export const updateJob = (
  state = { fetching: false, error: false },
  action
) => {
  switch (action.type) {
    case types.job.updateJob.started:
      return Object.assign({}, { fetching: true });

    case types.job.updateJob.success:
      return Object.assign({}, { fetching: false, data: { ...action.data } });

    case types.job.updateJob.failed:
      return Object.assign({}, { fetching: false, error: { ...action.data } });

    default:
      return state;
  }
};

export default updateJob;
