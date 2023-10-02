import { TutorialPostProps } from "@/types";
import { sanityFetch } from "@/utils/sanity/client";
import React from "react";

interface Props {
  params: {
    slug: string;
  };
}
const IndividualPost = async ({ params: { slug } }: Props) => {
 
  const res = await sanityFetch<TutorialPostProps>({
    query: `*[_type == "post" && topic->slug.current == "${slug}"][0]`,
    tags: [],
  });

  const { _id, body, mainImage, technology, title, topic } = res;

  return (
    <div className="grow">
      <h1>{title}</h1>
    </div>
  );
};

export default IndividualPost;
