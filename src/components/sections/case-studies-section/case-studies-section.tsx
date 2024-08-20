import { forwardRef, HTMLAttributes } from "react";
import ButtonIcon from "../../button-icon/button-icon";
import Card from "../../card/card";
import Heading from "../../heading/heading";
import { IconArrow } from "../../icons";
import Typography from "../../typography/typography";
import styles from "./case-studies-section.module.css";

export type TCaseStudy = {
  content: string;
  link: {
    text: string;
    path: string;
  };
};

interface CaseStudiesSectionProps extends HTMLAttributes<HTMLDivElement> {
  data: TCaseStudy[];
}

const CaseStudiesSection = forwardRef<HTMLDivElement, CaseStudiesSectionProps>(
  ({ data, ...restProps }, ref) => {
    const className = [styles["case-studies"], restProps.className]
      .filter(Boolean)
      .join(" ");

    return (
      <section {...{ ref, ...restProps, className }}>
        <div className={styles["case-studies__header"]}>
          <Heading level={2}>Case Studies</Heading>
          <Typography className={styles["case-studies__description"]}>
            Explore Real-Life Examples of Our Proven Digital Marketing Success
            through Our Case Studies
          </Typography>
        </div>
        <div className={styles["case-studies__list"]}>
          {data.map(({ content, link }) => (
            <Card
              key={content}
              className={styles["case-studies__item"]}
              variant="secondary"
            >
              <Typography className={styles["case-studies__content"]}>
                {content}
              </Typography>
              <ButtonIcon
                className={styles["case-studies__button"]}
                variant="primary-plain"
                icon={<IconArrow />}
                asChild
                rotateArrowAnimation
              >
                <a href={link.path}>{link.text}</a>
              </ButtonIcon>
            </Card>
          ))}
        </div>
      </section>
    );
  }
);

CaseStudiesSection.displayName = "CaseStudiesSection";

export default CaseStudiesSection;
