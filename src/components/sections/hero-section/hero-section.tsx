import { forwardRef, HTMLAttributes } from "react";
import heroMegaphoneImage from "../../../assets/images/hero-megaphone.webp";
import { mcn } from "../../../lib/utils";
import Button from "../../button/button";
import styles from "./hero-section.module.css";

type HeroSectionProps = HTMLAttributes<HTMLDivElement>;

const HeroSection = forwardRef<HTMLDivElement, HeroSectionProps>(
  ({ ...restProps }, ref) => {
    const className = mcn([styles["hero-section"], restProps.className]);

    return (
      <section {...{ ref, ...restProps, className }}>
        <div className={styles["hero-section__content"]}>
          <h2
            className={mcn([
              styles["hero-section__content__title"],
              styles["hero-section__content__title--desktop"],
            ])}
          >
            Navigating the digital landscape for success
          </h2>
          <p className={styles["hero-section__content__description"]}>
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <Button
            className={styles["hero-section__content__cta"]}
            variant="secondary"
          >
            Book a consultation
          </Button>
        </div>
        <div className={styles["hero-section__illustration"]}>
          <img
            className={styles["hero-section__illustration__image"]}
            src={heroMegaphoneImage}
            width={600.46}
            height={515}
            alt="megaphone"
            loading="eager"
            srcSet={`${heroMegaphoneImage} 400w, ${heroMegaphoneImage} 600w, ${heroMegaphoneImage} 800w`}
            sizes="(max-width: 600px) 100vw, 600px"
            decoding="async"
          />
        </div>
        <h2
          className={mcn([
            styles["hero-section__content__title"],
            styles["hero-section__content__title--mobile"],
          ])}
        >
          Navigating the digital landscape for success
        </h2>
      </section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export default HeroSection;
