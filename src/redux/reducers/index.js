const initialState = {
  favourites: {
    content: [],
  },
};

const mainReducer = function (state = initialState, action) {
  switch (action.type) {
    case "ADD_FAVOURITES":
      if (!state.favourites.content.some((company) => company === action.payload)) {
        return {
          ...state,
          favourites: {
            ...state.favourites,
            content: state.favourites.content.concat(action.payload),
          },
        };
      } else {
        return state;
      }

    case "DELETE_FAVOURITE":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: state.favourites.content.filter((company, i) => i !== action.payload),
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
