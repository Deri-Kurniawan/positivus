import { forwardRef, HTMLAttributes } from "react";
import { mcn } from "../../../lib/utils";
import ButtonIcon from "../../button-icon/button-icon";
import Card from "../../card/card";
import Heading from "../../heading/heading";
import { IconArrow } from "../../icons";
import Typography from "../../typography/typography";
import styles from "./case-studies-section.module.css";

type CaseStudiesSectionProps = {
  data: TCaseStudy[];
} & HTMLAttributes<HTMLDivElement>;

const CaseStudiesSection = forwardRef<HTMLDivElement, CaseStudiesSectionProps>(
  ({ data, ...restProps }, ref) => {
    const className = mcn([
      styles["case-studies-section"],
      restProps.className,
    ]);

    return (
      <section {...{ ref, ...restProps, className }}>
        <div className={styles["case-studies-section__header"]}>
          <Heading level={2}>Case Studies</Heading>
          <Typography className={styles["case-studies-section__description"]}>
            Explore Real-Life Examples of Our Proven Digital Marketing Success
            through Our Case Studies
          </Typography>
        </div>
        <div className={styles["case-studies-section__list"]}>
          {data.map(({ content, link }) => (
            <Card
              key={content}
              className={styles["case-studies-section__item"]}
              variant="secondary"
            >
              <Typography className={styles["case-studies-section__content"]}>
                {content}
              </Typography>
              <ButtonIcon
                className={styles["case-studies-section__button"]}
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
