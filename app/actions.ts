"use server";

import { TutorialPostProps, TutorialTopicProps } from "@/types";
import { generateSlug } from "@/utils/generateSlug";
import { generateUniqueId } from "@/utils/generateUniqueId";
import { client, sanityFetch } from "@/utils/sanity/client";

import { revalidateTag } from "next/cache";

export async function createTopic(formData: FormData) {
  const name = formData.get("name");
  const tech = formData.get("tech");

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
