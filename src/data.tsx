import companyAmazonImage from "./assets/images/company-amazon.webp";
import companyDribbbleImage from "./assets/images/company-dribbble.webp";
import companyNetflixImage from "./assets/images/company-netflix.webp";
import companyNotionImage from "./assets/images/company-notion.webp";
import companyZoomImage from "./assets/images/company-zoom.webp";
import companyHubspotImage from "./assets/images/company-hubspot.webp";
import serviceImage3 from "./assets/images/service-browser-window-with-emoticon-likes-and-stars-around.webp";
import serviceImage1 from "./assets/images/service-magnifier-web-search-with-elements.webp";
import serviceImage5 from "./assets/images/service-many-browser-windows-with-different-information.webp";
import serviceImage2 from "./assets/images/service-selecting-a-value-in-the-browser-window.webp";
import serviceImage4 from "./assets/images/service-sending-messages-from-one-place-to-another.webp";
import serviceImage6 from "./assets/images/service-volumetric-analytics-of-different-types-in-web-browsers.webp";
import teamImage1 from "./assets/images/team-1.webp";
import teamImage2 from "./assets/images/team-2.webp";
import teamImage3 from "./assets/images/team-3.webp";
import teamImage4 from "./assets/images/team-4.webp";
import teamImage5 from "./assets/images/team-5.webp";
import teamImage6 from "./assets/images/team-6.webp";
import { IconFacebook, IconLinkedIn, IconTwitter } from "./components/icons";

type TData = {
  navlinks: TNavLink[];
  companies: TCompany[];
  services: TService[];
  caseStudies: TCaseStudy[];
  ourWorkingProcess: TWorkingProcess[];
  team: TTeam[];
  testimonials: TTestimonial[];
  socialMedia: SocialMedia[];
};

const data: TData = {
  navlinks: [
    { title: "About us", url: "#about-us" },
    { title: "Services", url: "#services" },
    { title: "Use Cases", url: "#use-cases" },
    { title: "Pricing", url: "#pricing" },
    { title: "Blog", url: "#blog" },
  ],
  companies: [
    {
      image: companyAmazonImage,
      alt: "Amazon",
      width: 124.11,
      height: 48,
      url: "https://www.amazon.com",
    },
    {
      image: companyDribbbleImage,
      alt: "Dribbble",
      width: 126.37,
      height: 48,
      url: "https://dribbble.com",
    },
    {
      image: companyHubspotImage,
      alt: "HubSpot",
      width: 128.63,
      height: 48,
      url: "https://www.hubspot.com",
    },
    {
      image: companyNotionImage,
      alt: "Notion",
      width: 145.55,
      height: 48,
      url: "https://www.notion.so",
    },
    {
      image: companyNetflixImage,
      alt: "Netflix",
      width: 128.63,
      height: 48,
      url: "https://www.netflix.com",
    },
    {
      image: companyZoomImage,
      alt: "Zoom",
      width: 110.57,
      height: 48,
      url: "https://zoom.us",
    },
  ],
  services: [
    {
      card: { variant: "tertiary" },
      header: { titles: ["Search engine", "optimization"], variant: "primary" },
      body: {
        src: serviceImage1,
        alt: "Magnifier Web Search with Elements",
        width: 165,
        height: 129,
      },
      button: { variant: "secondary" },
    },
    {
      card: { variant: "primary" },
      header: { titles: ["Pay-per-click", "advertising"], variant: "ghost" },
      body: {
        src: serviceImage2,
        alt: "Selecting a Value in The Browser Window",
        width: 165,
        height: 166.47,
      },
      button: { variant: "secondary" },
    },
    {
      card: { variant: "secondary" },
      header: { titles: ["Social media", "marketing"], variant: "ghost" },
      body: {
        src: serviceImage3,
        alt: "Browser Window with Emoticon Likes and Stars Around",
        width: 127.12,
        height: 129,
      },
      button: { variant: "ghost-alt" },
    },
    {
      card: { variant: "tertiary" },
      header: { titles: ["Email", "marketing"], variant: "primary" },
      body: {
        src: serviceImage4,
        alt: "Sending Messages from One Place to Another",
        width: 155,
        height: 142,
      },
      button: { variant: "secondary" },
    },
    {
      card: { variant: "primary" },
      header: { titles: ["Content", "Creation"], variant: "ghost" },
      body: {
        src: serviceImage5,
        alt: "Many Browser Windows with Different Information",
        width: 138.72,
        height: 129,
      },
      button: { variant: "secondary" },
    },
    {
      card: { variant: "secondary" },
      header: { titles: ["Analytics and", "Tracking"], variant: "primary" },
      body: {
        src: serviceImage6,
        alt: "Volumetric Analytics of Different Types in Web Browsers",
        width: 157.78,
        height: 129,
      },
      button: { variant: "ghost-alt" },
    },
  ],
  caseStudies: [
    {
      content:
        "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
      link: { text: "Learn more", path: "#case-study-1" },
    },
    {
      content:
        "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
      link: { text: "Learn more", path: "#case-study-2" },
    },
    {
      content:
        "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
      link: { text: "Learn more", path: "#case-study-3" },
    },
  ],
  ourWorkingProcess: [
    {
      title: "Consultation",
      description:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      title: "Research and Strategy Development",
      description:
        "After the consultation, we will conduct research to identify the best digital marketing strategies for your business. This will include keyword research, competitor analysis, and market research to develop a comprehensive strategy that will help you achieve your goals.",
    },
    {
      title: "Implementation",
      description:
        "Once the strategy has been developed and approved, we will begin implementing the digital marketing services outlined in the plan. This may include SEO optimization, PPC advertising, social media marketing, email marketing, and content creation.",
    },
    {
      title: "Monitoring and Optimization",
      description:
        "Throughout the campaign, we will monitor the performance of the digital marketing efforts and make adjustments as needed to optimize results. This may include adjusting keywords, ad copy, or targeting to improve performance and achieve the best possible results.",
    },
    {
      title: "Reporting and Communication",
      description:
        "We will provide regular reports on the performance of the digital marketing campaign, including key metrics such as website traffic, leads, and conversions. We will also be available to answer any questions and provide updates on the progress of the campaign.",
    },
    {
      title: "Continual Improvement",
      description:
        "Our goal is to help your business grow and succeed online. We will continually work to improve the performance of the digital marketing campaign and identify new opportunities for growth. This may include testing new strategies, expanding into new markets, or refining existing efforts to achieve better results.",
    },
  ],
  team: [
    {
      name: "John Smith",
      title: "CEO and Founder",
      picture: teamImage1,
      about:
        "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    },
    {
      name: "Jane Doe",
      title: "Director of Operations",
      picture: teamImage2,
      about:
        "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    },
    {
      name: "Michael Brown",
      title: "Senior SEO Specialist",
      picture: teamImage3,
      about:
        "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    },
    {
      name: "Emily Johnson",
      title: "PPC Manager",
      picture: teamImage4,
      about:
        "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    },
    {
      name: "Brian Williams",
      title: "Social Media Specialist",
      picture: teamImage5,
      about:
        "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    },
    {
      name: "Sarah Kim",
      title: "Content Creator",
      picture: teamImage6,
      about:
        "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
    },
  ].map((item) => ({
    ...item,
    linkedin: "https://www.linkedin.com/",
  })),
  testimonials: new Array(5).fill({
    name: "John Smith",
    title: "Marketing Director at XYZ Corp",
    review:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
  }),
  socialMedia: [
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/",
      icon: <IconLinkedIn width={17} height={17} />,
    },
    {
      title: "Facebook",
      url: "https://www.facebook.com/",
      icon: <IconFacebook width={17} height={17} />,
    },
    {
      title: "Twitter",
      url: "https://twitter.com/",
      icon: <IconTwitter width={17} height={17} />,
    },
  ],
} as const;

export const {
  companies: companiesData,
  services: servicesData,
  caseStudies: caseStudiesData,
  ourWorkingProcess: ourWorkingProcessData,
  team: teamData,
  testimonials: testimonialsData,
} = data;

export default data;
