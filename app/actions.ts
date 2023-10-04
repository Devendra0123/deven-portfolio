"use server";

import {
  TechnologyProps,
  TutorialPostProps,
  TutorialTopicProps,
} from "@/types";
import { generateSlug } from "@/utils/generateSlug";
import { generateUniqueId } from "@/utils/generateUniqueId";
import { client, sanityFetch } from "@/utils/sanity/client";
import { revalidateTag } from "next/cache";

// Get tech data
export const getTechData = async () => {
  const res = await sanityFetch<TechnologyProps[]>({
    query: `*[_type == "technology"] | order(_createdAt desc)`,
    tags: ["technology"],
  });

  return res;
};

// get tutorial topics
export const getTutorialTopics = async () => {
  const res = await sanityFetch<TutorialTopicProps[]>({
    query: `*[_type == "topic"] | order(_createdAt desc)`,
    tags: ["topic"],
  });

  return res;
};

//Create guide or tutorial tech
export async function createTech(name: string) {

  if (!name) return;

  const slug = generateSlug(name).toLowerCase();

  const doc: any = {
    _type: "technology",
    name,
  };
  const res = await client.create(doc);

  revalidateTag("technology");

  return res;
}

//Create guide or tutorial topic
export async function createTopic(name: string, tech: string) {
  console.log(name, tech);

  if (!name || !tech) return;

  const slug = generateSlug(name).toLowerCase();

  const doc: any = {
    _type: "topic",
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
export async function createTutorialPost(formData: any) {
  if (
    !formData.title ||
    !formData.selectedTechId ||
    !formData.selectedTopicId ||
    !formData.content
  )
    return;

  const slug = generateSlug(formData.title).toLowerCase();

  const doc: any = {
    _type: "tutorialPost",
    title: formData.title,
    slug: { _type: "slug", current: slug },
    topic: {
      _type: "reference",
      _key: generateUniqueId(),
      _ref: formData.selectedTopicId,
    },
    technology: {
      _type: "reference",
      _key: generateUniqueId(),
      _ref: formData.selectedTechId,
    },
    // mainImage: formData?.imageId && {
    //   _type: "image",
    //   _key: generateUniqueId(),
    //   asset: {
    //     _type: "reference",
    //     _ref: formData?.imageId,
    //   },
    // },
    htmlCode: formData.content,
    publishedAt: formData.publishedAt,
  };

  const res = await client.create(doc);

  revalidateTag("topic");

  return res;
}
