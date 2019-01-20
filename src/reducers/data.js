import schema from "../schemas";
import { fromJS } from "immutable";
import { SEARCH_VIDEO } from "../action-types/Actiontype";

const initialState = fromJS({
  entities: schema.entities,
  categories: schema.result.categories,
  friends: schema.result.friends,
  search: ""
});

function data(state = initialState, action) {
  switch (action.type) {
    case SEARCH_VIDEO: {
      const query = action.payload.query.toLowerCase().trim();
      return state.set("search", query);
    }
    default:
      return state;
  }
}

export default data;
