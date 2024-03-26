import { ADD_FAVOURITES, DELETE_FAVOURITE } from "../actions";

const initialState = {
  content: [],
};

const favsReducer = function (state = initialState, action) {
  switch (action.type) {
    case ADD_FAVOURITES:
      if (!state.content.some((company) => company === action.payload)) {
        return {
          ...state,
          ...state.content,
          content: state.content.concat(action.payload),
        };
      } else {
        return state;
      }

    case DELETE_FAVOURITE:
      return {
        ...state,
        ...state.content,
        content: state.content.filter((company, i) => i !== action.payload),
      };
    default:
      return state;
  }
};

export default favsReducer;
