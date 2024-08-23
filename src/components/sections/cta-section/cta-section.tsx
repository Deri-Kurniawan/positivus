import { forwardRef, HTMLAttributes } from "react";
import ctaIllustrationImage from "../../../assets/images/cta-illustration.webp";
import { mcn } from "../../../lib/utils";
import Button from "../../button/button";
import Card from "../../card/card";
import Typography from "../../typography/typography";
import styles from "./cta-section.module.css";

type CtaSectionProps = HTMLAttributes<HTMLDivElement>;

const CtaSection = forwardRef<HTMLDivElement, CtaSectionProps>(
  ({ ...restProps }, ref) => {
    const className = mcn([styles["cta-section"], restProps.className]);

    return (
      <section {...{ ref, ...restProps, className }}>
        <Card className={styles["cta-section__wrapper"]} variant="tertiary">
          <div>
            <Typography
              className={styles["cta-section__title"]}
              level={3}
              asChild
            >
              <h3>Let’s make things happen</h3>
            </Typography>
            <Typography className={styles["cta-section__description"]}>
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </Typography>
            <Button
              variant="secondary"
              className={styles["cta-section__button"]}
            >
              Get your free proposal
            </Button>
          </div>
          <div
            className={mcn([
              styles["cta-section__illustration"],
              styles["cta-section__illustration--desktop"],
            ])}
          >
            <img
              className={styles["cta-section__illustration-image"]}
              src={ctaIllustrationImage}
              width={359}
              height={394.27}
              alt=""
              loading="lazy"
            />
          </div>
        </Card>
      </section>
    );
  }
);

CtaSection.displayName = "CtaSection";

export default CtaSection;
