import movies from "./../data.js";
import { ADD_FAVORITE } from "../actions/favoritesActions.js";

const initialState = {
  favorites: movies,
  displayFavorites: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        default: state,
      };

    default:
      return state;
  }
};
export default reducer;
