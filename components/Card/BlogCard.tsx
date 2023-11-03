import { BlogPostType } from "@/types";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React from "react";
import { RichTextCoomponent } from "../RichTextComponent";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";

interface Props {
  data: BlogPostType;
}
const BlogCard = ({ data }: Props) => {
  const { body, mainImage, slug, title, publishedAt, author } = data;

  return (
    <Link href={`/blogs/${slug.current}`} className="w-[320px] h-[420px] flex flex-col rounded-[7px] shadow-lg hover:shadow-xl border border-slate-300 hover:border-slate-400 hover:shadow-primaryBlue/25 overflow-hidden">
      {mainImage && (
        <div className="relative w-full h-[45%]">
          <Image
            src={urlForImage(mainImage).url()}
            alt="mainImage"
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="grow p-[10px] flex flex-col gap-[5px] ">
        <p className="text-[14px] text-slate-500 ">{`${publishedAt}`}</p>
        <h1 className="font-bold">{title}</h1>
        <PortableText value={body} components={RichTextCoomponent} />
      </div>

      <div className="w-full flex items-center gap-[10px] p-[10px]">
        {author.image && (
          <div className="relative w-[60px] h-[60px] rounded-full overflow-hidden border border-slate-400">
            <Image
              src={urlForImage(author.image).url()}
              alt="authorImage"
              fill
              className="object-cover rounded-full"
            />
          </div>
        )}
        <p>{author?.name || "..."}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
