export const ADD_FAVOURITES = "ADD_FAVOURITES";
export const DELETE_FAVOURITE = "DELETE_FAVOURITE";
export const FETCH_RESULT = "FETCH_RESULT";

// ACTION_1
export const addToFavourites = (data) => {
  return {
    type: ADD_FAVOURITES,
    payload: data.company_name,
  };
};

// ACTION_2
export const deleteFromFavourites = function (i) {
  return {
    type: DELETE_FAVOURITE,
    payload: i,
  };
};
// ACTION_3
export const fetchResult = (query) => {
  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: FETCH_RESULT,
          payload: data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
