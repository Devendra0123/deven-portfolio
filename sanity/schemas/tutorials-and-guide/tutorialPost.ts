import { defineField, defineType } from "sanity";

export default defineType({
  name: "tutorialPost",
  title: "Tutorial Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "technology",
      title: "Technology",
      type: "reference",
      to: { type: "tutorialTechnology" },
    }),
    defineField({
      name: "topic",
      title: "Topic",
      type: "reference",
      to: { type: "tutorialTopic" },
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
    defineField({
      name: "htmlCode",
      title: "htmlCode",
      type: "string",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "likes",
      title: "Likes",
      type: "number",
    }),
    defineField({
      name: "feedback",
      title: "Feedback",
      type: "array",
      of: [
        {
          type: "object",
          name: "userFeedback",
          fields: [
            { type: "string", name: "email" },
            { type: "string", name: "comment" },
          ],
        },
      ],
    }),
    defineField({
      title: "Post Details",
      name: "postDetails",
      type: "object",
      fields: [
        { name: "contributor", type: "array", title: "Contributors",  of: [
          {
            type: "object",
            name: "contributor",
            fields: [
              { type: "string", name: "name" },
              { type: "image", name: "image" },
            ],
          },
        ], },
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
});
