import { FETCH_RESULT } from "../actions";

const initialState = {
  results: [],
};

const resultReducer = function (state = initialState, action) {
  switch (action.type) {
    case FETCH_RESULT:
      return {
        ...state,
        results: action.payload,
      };
    default:
      return state;
  }
};

export default resultReducer;
