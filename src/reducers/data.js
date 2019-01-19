import schema from "../schemas";
import { fromJS } from "immutable";

const initialState = fromJS({
  entities: schema.entities,
  categories: schema.result.categories,
  friends: schema.result.friends,
  search: []
});

function data(state = initialState, action) {
  const { media } = state.get("entities");
  console.log(media);
  switch (action.type) {
    case "SEARCH_VIDEO": {
      const query = action.payload.query.toLowerCase().trim();
      const results = query
        ? Object.keys(media)
            .filter(
              mediaId =>
                media[mediaId].author
                  .toLowerCase()
                  .trim()
                  .includes(query) ||
                media[mediaId].title
                  .toLowerCase()
                  .trim()
                  .includes(query)
            )
            .map(mediaId => media[mediaId])
        : [];
      return {
        ...state,
        search: results
      };
    }
    default:
      return state;
  }
}

export default data;
