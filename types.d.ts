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
