export interface Project {
  name: string;
  image: string;
  slug: string;
  link: string;
}
export interface Recommendation {
  name: string;
  position: string;
  image: string;
  comment: string;
}

export interface ShowcaseCardType {
  image: string;
  projectTitle: string;
  info: string;
  projectLogo: string;
  mainFeature: {
    feature1: {
      title: string;
      info: string;
    };
    feature2: {
      title: string;
      info: string;
    };
  };
}

export interface TechnologyProps {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  image: any;
}

export interface TutorialTopicProps {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  technology: {
    slug:{
      current: string
    }
  };
}

export interface TutorialPostProps {
  _id: string;
  title: string;
  body: any;
  htmlCode: string;
  technology: any;
  topic: any;
  slug: {
    current: string;
  };
  mainImage: any;
  publishedAt: Date;
}

export interface BlogPostAuthorType {
  name: string;
  slug:{
    current: string
  };
  image: any;
  bio: any
}

export interface BlogPostCategoryType {
  title: string;
  description: text
}

export interface BlogPostType {
  title: string;
  slug:{
    current: string
  };
  author: BlogPostAuthorType;
  mainImage: any;
  categories: BlogPostCategoryType;
  publishedAt: Date;
  body: any;
}
