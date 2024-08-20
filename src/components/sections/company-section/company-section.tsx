import { forwardRef } from "react";
import Marquee from "../../marquee/marquee";
import styles from "./company-section.module.css";

export type TCompany = {
  image: string;
  alt: string;
  url: string;
};

interface CompanySectionProps extends React.HTMLAttributes<HTMLDivElement> {
  data: TCompany[];
}

const CompanySection = forwardRef<HTMLDivElement, CompanySectionProps>(
  ({ data, ...restProps }, ref) => {
    const className = [styles.company, restProps.className]
      .filter(Boolean)
      .join(" ");

    return (
      <section {...{ ref, ...restProps, className }}>
        <Marquee className={styles["company__list"]} speed={50} pauseOnHover>
          {data.map(({ image, alt, url }) => (
            <a key={alt} href={url} target="_blank" rel="noreferrer">
              <img src={image} alt={alt} />
            </a>
          ))}
        </Marquee>
        <Marquee
          className={styles["company__list"]}
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
