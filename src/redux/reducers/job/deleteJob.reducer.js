import types from "../../types";

export const deleteJob = (
  state = { fetching: false, error: false },
  action
) => {
  switch (action.type) {
    case types.job.deleteJob.started:
      return Object.assign({}, { fetching: true });

    case types.job.deleteJob.success:
      return Object.assign({}, { fetching: false, data: { ...action.data } });

    case types.job.deleteJob.failed:
      return Object.assign({}, { fetching: false, error: { ...action.data } });

    default:
      return state;
  }
};

export default deleteJob;
