import AuthorCard from "@/components/Card/AuthorCard";
import { RichTextCoomponent } from "@/components/RichTextComponent";
import { urlForImage } from "@/sanity/lib/image";
import { BlogPostType } from "@/types";
import { sanityFetch } from "@/utils/sanity/client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React from "react";

interface Props {
  params: {
    slug: string;
  };
}
const IndividualBlog = async ({ params: { slug } }: Props) => {
  const res = await sanityFetch<BlogPostType>({
    query: `*[_type == "blogPost" && slug.current == "${slug}"][0]{
      _id, body, title, mainImage, author->{
        name,image,slug,bio
      }, categories, publishedAt
    }`,
    tags: [""],
  });

  const { _id, body, title, mainImage, author, categories, publishedAt } = res;

  console.log(author);
  return (
    <div className="w-full md:w-[80%] lg:w-[75%] min-h-[100vh] flex flex-col items-center gap-[30px] pt-[50px]">
      <div className="relative w-full h-[30vh]">
        <Image
          src={urlForImage(mainImage).url()}
          alt="mainImage"
          fill
          className="object-cover"
        />
      </div>
      <h1 className="text-4xl font-bold">{title}</h1>

      <div className="w-full flex justify-start px-[20px]">
        <div className="w-[50%] lg:w-[20%] bg-yellow1 p-[10px] rounded-[25px] ">
          <AuthorCard data={author} />
        </div>
      </div>

      <div className="w-full flex justify-start px-[20px]">
        <PortableText value={body} components={RichTextCoomponent} />
      </div>
    </div>
  );
};

export default IndividualBlog;
