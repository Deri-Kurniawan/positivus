import { forwardRef, HTMLAttributes } from "react";
import { mcn } from "../../../lib/utils";
import Marquee from "../../marquee/marquee";
import styles from "./company-section.module.css";

export type TCompany = {
  image: string;
  alt: string;
  url: string;
};

type CompanySectionProps = {
  data: TCompany[];
} & HTMLAttributes<HTMLDivElement>;

const CompanySection = forwardRef<HTMLDivElement, CompanySectionProps>(
  ({ data, ...restProps }, ref) => {
    const className = mcn([styles["company-section"], restProps.className]);

    return (
      <section {...{ ref, ...restProps, className }}>
        <Marquee
          className={styles["company-section__list"]}
          speed={50}
          pauseOnHover
        >
          {data.map(({ image, alt, url }) => (
            <a key={alt} href={url} target="_blank" rel="noreferrer">
              <img src={image} alt={alt} />
            </a>
          ))}
        </Marquee>
        <Marquee
          className={styles["company-section__list"]}
          speed={50}
          direction="to-right"
          pauseOnHover
        >
          {data.reverse().map(({ image, alt, url }) => (
            <a key={alt} href={url} target="_blank" rel="noreferrer">
              <img src={image} alt={alt} />
            </a>
          ))}
        </Marquee>
      </section>
    );
  }
);

CompanySection.displayName = "CompanySection";

export default CompanySection;
