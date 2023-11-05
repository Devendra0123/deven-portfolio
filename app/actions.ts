"use server";

import {
  BlogPostType,
  TechnologyProps,
  TutorialPostProps,
  TutorialTopicProps,
} from "@/types";
import { generateSlug } from "@/utils/generateSlug";
import { generateUniqueId } from "@/utils/generateUniqueId";
import { client, sanityFetch } from "@/utils/sanity/client";
import { revalidateTag } from "next/cache";

// Handle Image Upload
const uploadImage = async (image: File) => {
  const res = await client.assets.upload("image", image, {
    contentType: image.type,
    filename: image.name,
  });

  return res._id;
};
// Get tech data
export const getTechData = async () => {
  const res = await sanityFetch<TechnologyProps[]>({
    query: `*[_type == "tutorialTechnology"] | order(_createdAt desc)`,
    tags: ["technology"],
  });

  return res;
};

// get tutorial topics
export const getTutorialTopics = async () => {
  const res = await sanityFetch<TutorialTopicProps[]>({
    query: `*[_type == "tutorialTopic"]{
      _id,
      technology->{
        slug{
          current
        }
      },
      slug,
      name
    } | order(_createdAt desc)`,
    tags: ["topic"],
  });

  return res;
};

//Create guide or tutorial tech
export async function createTech(name: string) {
  if (!name) return;

  const slug = generateSlug(name).toLowerCase();

  const doc: any = {
    _type: "tutorialTechnology",
    slug: { _type: "slug", current: slug },
    name,
  };
  const res = await client.create(doc);

  revalidateTag("technology");

  return res;
}

//Create guide or tutorial topic
export async function createTopic(name: string, tech: string) {
  if (!name || !tech) return;

  const slug = generateSlug(name).toLowerCase();

  const doc: any = {
    _type: "tutorialTopic",
    name,
    slug: { _type: "slug", current: slug },
    technology: {
      _type: "reference",
      _key: generateUniqueId(),
      _ref: tech,
    },
  };
  const res = await client.create(doc);

  revalidateTag("topic");

  return res;
}

// Create guide or tutorial post
export async function createTutorialPost(formData: any, blockContent: any) {
  const title = formData.get("title");
  const selectedTechId = formData.get("selectedTechId");
  const selectedTopicId = formData.get("selectedTopicId");
  const image = formData.get("image");
  const content = formData.get("content");
  const publishedAt = formData.get("publishedAt");

  if (!title || !selectedTechId || !selectedTopicId || !content) return;

  const slug = generateSlug(title).toLowerCase();

  const imageId = await uploadImage(image);

  const doc: any = {
    _type: "tutorialPost",
    title: title,
    slug: { _type: "slug", current: slug },
    topic: {
      _type: "reference",
      _key: generateUniqueId(),
      _ref: selectedTopicId,
    },
    technology: {
      _type: "reference",
      _key: generateUniqueId(),
      _ref: selectedTechId,
    },
    mainImage: imageId && {
      _type: "image",
      _key: generateUniqueId(),
      asset: {
        _type: "reference",
        _ref: imageId,
      },
    },
    body: blockContent,
    publishedAt: publishedAt,
  };

  const res = await client.create(doc);

  revalidateTag("topic");

  return res;
}

// Fetch Blog
export const fetchBlog = async () => {
  const res = await sanityFetch<BlogPostType[]>({
    query: `*[_type == "blogPost"]{
      title,
      slug,
      mainImage,
      publishedAt,
      body,
      author->{
        name,
        image,
        slug,
        bio
      }
    }`,
    tags: ["blogs"],
  });
  return res;
};

// Patch tutorial likes
export const patchTutorailLike = async(tutorialId: string,currentLikes: number)=>{
  console.log(currentLikes)
  try {
    const res = await client
      .patch(tutorialId)
      .set({ likes: (currentLikes === null || currentLikes === undefined || !currentLikes) ? 1 : currentLikes + 1
      })
      .commit();
    return res;
  } catch (err) {
    console.log(err);
  }
}