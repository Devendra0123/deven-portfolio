'use server'

import { sanityFetch } from "@/utils/sanity/client";

 
export async function fetchPost(postId: string) {
  console.log(postId)
    const tutorialPost = await sanityFetch({
        query: `*[_type == "post" && topic->_id == "${postId}"]`,
        tags: [],
      });
      console.log(tutorialPost);
      return tutorialPost;
}