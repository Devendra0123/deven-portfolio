import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import technology from "./schemas/tutorials-and-guide/technology";
import topic from "./schemas/tutorials-and-guide/topic";
import tutorialPost from "./schemas/tutorials-and-guide/tutorialPost";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [technology, topic, blockContent, tutorialPost],
};
