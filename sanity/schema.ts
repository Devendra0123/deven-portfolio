import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import tutorialPost from "./schemas/tutorials-and-guide/tutorialPost";
import tutorialTechnology from "./schemas/tutorials-and-guide/tutorialTechnology";
import tutorialTopic from "./schemas/tutorials-and-guide/tutorialTopic";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [tutorialTechnology, tutorialTopic, blockContent, tutorialPost],
};
