import { TutorialPostProps } from "@/types";
import { sanityFetch } from "@/utils/sanity/client";
import React from "react";
import { PortableText } from "@portabletext/react";
import { RichTextCoomponent } from "@/components/RichTextComponent";

interface Props {
  params: {
    slug: string;
  };
}
const IndividualPost = async ({ params: { slug } }: Props) => {
  const res = await sanityFetch<TutorialPostProps>({
    query: `*[_type == "tutorialPost" && topic->slug.current == "${slug}"][0]`,
    tags: [],
  });

  const {
    _id,
    body,
    htmlCode,
    mainImage,
    technology,
    title,
    topic,
    publishedAt,
  } = res;

  return (
    <article className="grow flex flex-col gap-[30px] p-[20px]">
      <div>
        <h1 className="font-bold text-xl">{title}</h1>
        <p className="text-[14px] text-slate-400 pl-[10px]">{`${publishedAt}`}</p>
      </div>

      <div>
        <p className="bg-slate-300 p-[8px] rounded-lg font-medium">
          {`Don't fotget to press "`}
          <span className="text-primaryBlue text-xl font-bold">D</span>
          {`", if you like the post`}
        </p>
      </div>
      <PortableText value={body} components={RichTextCoomponent} />
    </article>
  );
};

export default IndividualPost;
