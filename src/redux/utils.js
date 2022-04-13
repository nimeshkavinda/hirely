export const generateActionTypes = (namespace) => {
  return {
    started: `@${namespace}/started`,
    success: `@${namespace}/success`,
    failed: `@${namespace}/failed`,
  };
};

export const generateSyncAction = (type, data) => {
  return {
    type,
    data,
  };
};
