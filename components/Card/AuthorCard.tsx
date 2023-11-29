import { urlForImage } from "@/sanity/lib/image";
import { BlogPostAuthorType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  data: BlogPostAuthorType;
}

const AuthorCard = ({ data }: Props) => {
  const { bio, image, name, slug } = data;

  return (
    <Link href="" className="flex items-center gap-[5px] rounded-[25px]">
      {image && (
        <div className="relative min-w-[60px] min-h-[60px] max-w-[60px] rounded-full">
          <Image
            src={urlForImage(image).url()}
            alt="authorImage"
            fill
            className="rounded-full object-cover"
          />
        </div>
      )}

      <div>
        <h3 className="text-xl font-semibold text-slate-700">{name}</h3>
      </div>
    </Link>
  );
};

export default AuthorCard;
