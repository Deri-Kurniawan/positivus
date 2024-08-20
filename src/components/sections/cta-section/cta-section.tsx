import { forwardRef } from "react";
import ctaIllustrationImage from "../../../assets/images/cta-illustration.png";
import Button from "../../button/button";
import Card from "../../card/card";
import Typography from "../../typography/typography";
import styles from "./cta-section.module.css";

interface CtaSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

const CtaSection = forwardRef<HTMLDivElement, CtaSectionProps>(
  ({ ...restProps }, ref) => {
    const className = [styles.cta, restProps.className]
      .filter(Boolean)
      .join(" ");

    return (
      <section {...{ ref, ...restProps, className }}>
        <Card className={styles["cta__wrapper"]} variant="tertiary">
          <div>
            <Typography className={styles["cta__title"]} level={3} asChild>
              <h3>Let’s make things happen</h3>
            </Typography>
            <Typography className={styles["cta__description"]}>
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </Typography>
            <Button variant="secondary" className={styles["cta__button"]}>
              Get your free proposal
            </Button>
          </div>
          <div
            className={`${styles["cta__illustration"]} ${styles["cta__illustration--desktop"]}`}
          >
            <img
              className={styles["cta__illustration-image"]}
              src={ctaIllustrationImage}
              width={359}
              height={394.27}
              alt=""
            />
          </div>
        </Card>
      </section>
    );
  }
);

CtaSection.displayName = "CtaSection";

export default CtaSection;
