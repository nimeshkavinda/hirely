import { generateActionTypes } from "./utils";

const types = {
  employer: {
    signUp: {
      ...generateActionTypes("employer.signUp"),
    },
  },
};

export default types;
