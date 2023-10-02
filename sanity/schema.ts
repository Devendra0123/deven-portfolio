import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import post from "./schemas/tutorials-and-guide/post";
import technology from "./schemas/tutorials-and-guide/technology";
import topic from "./schemas/tutorials-and-guide/topic";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, technology, topic, blockContent],
};
