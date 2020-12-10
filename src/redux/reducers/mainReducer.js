import { SAVE_CURRENT_SUCCESS } from "../../consts/consts";

const INITIAL_STATE = {
  counter: 0,
};

export const mainReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_CURRENT_SUCCESS:
      const { counter } = action.payload;

      return { ...state, counter };
    default:
      return state;
  }
};
