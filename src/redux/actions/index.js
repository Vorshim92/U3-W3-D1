export const ADD_FAVOURITES = "ADD_FAVOURITES";
export const DELETE_FAVOURITE = "DELETE_FAVOURITE";

// ora rimpiazziamo le actions sparse per i vari componenti con degli ACTION CREATORS
// un ACTION CREATOR è una FUNZIONE che RITORNA L'AZIONE. Così scriviamo la action una volta sola!
export const addToFavourites = (data) => {
  return {
    type: ADD_FAVOURITES,
    payload: data.company_name,
  };
};

// non siamo obbligati ad utilizzare le funzioni freccia
export const deleteFromFavourites = function (i) {
  return {
    type: DELETE_FAVOURITE,
    payload: i,
  };
};
