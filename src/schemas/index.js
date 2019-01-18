import api from "../api.json";

import { normalize, schema } from "normalizr";

const media = new schema.Entity(
  "media",
  {},
  {
    processStrategy: (value, parent, key) => ({ ...value, category: parent.id })
  }
);

const friend = new schema.Entity("friends");

const category = new schema.Entity("categories", {
  playlist: [media]
});

const data = { categories: [category], friends: [friend] };

const normalizedData = normalize(api, data);

export default normalizedData;
