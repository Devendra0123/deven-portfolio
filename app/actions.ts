"use server";

import { TutorialPostProps, TutorialTopicProps } from "@/types";
import { generateSlug } from "@/utils/generateSlug";
import { generateUniqueId } from "@/utils/generateUniqueId";
import { client, sanityFetch } from "@/utils/sanity/client";

import { revalidateTag } from "next/cache";

export async function createTopic(name: string,tech: string) {
console.log(name,tech)

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
    _type: "post",
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
    body: formData.content,
    publishedAt: formData.publishedAt,
  };

  console.log(formData, doc);
  const res = await client.create(doc);
  console.log(res);
  revalidateTag("topic");

  return res;
}
