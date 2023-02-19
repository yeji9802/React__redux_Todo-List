import { CHANGEFILTER } from "./types";

export const changeFilter = (filter) => {
  return {
    type: CHANGEFILTER,
    filter,
  };
};
