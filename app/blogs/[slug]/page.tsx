import React from 'react'

interface Props {
  params: {
    slug: string;
  };
}
const IndividualBlog = ({ params: { slug } }: Props) => {
  return (
    <div>IndividualBlog</div>
  )
}

export default IndividualBlog