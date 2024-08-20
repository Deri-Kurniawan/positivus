/* Type definitions (global) A-Z */

// Component types A-Z
declare type IconProps = React.SVGAttributes<SVGSVGElement>;

// Data types A-Z
declare type TCompany = {
  image: string;
  alt: string;
  url: string;
};
declare type TCaseStudy = {
  content: string;
  link: {
    text: string;
    path: string;
  };
};
declare type TNavLink = {
  title: string;
  url: string;
};
declare type TService = {
  card: {
    variant: "primary" | "secondary" | "tertiary";
  };
  header: {
    titles: string[];
    variant: "primary" | "secondary" | "ghost";
  };
  body: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  button?: {
    variant: "secondary" | "ghost" | "ghost-alt";
  };
};
declare type SocialMedia = {
  title: string;
  url: string;
  icon: JSX.Element;
};
declare type TTeam = {
  name: string;
  title: string;
  picture: string;
  linkedin: string;
  about: string;
};
declare type TTestimonial = {
  name: string;
  title: string;
  review: string;
};

declare type TWorkingProcess = {
  title: string;
  description: string;
};
