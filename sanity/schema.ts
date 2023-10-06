import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import tutorialPost from "./schemas/tutorials-and-guide/tutorialPost";
import tutorialTechnology from "./schemas/tutorials-and-guide/tutorialTechnology";
import tutorialTopic from "./schemas/tutorials-and-guide/tutorialTopic";
import blogPost from "./schemas/blogPost/post";
import author from "./schemas/blogPost/author";
import category from "./schemas/blogPost/category";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    tutorialTechnology,
    tutorialTopic,
    blockContent,
    author,
    category,
    tutorialPost,
    blogPost,
  ],
};
