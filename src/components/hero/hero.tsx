import { forwardRef } from "react";
import styles from "./hero.module.css";
import megaphoneIllustration from "../../assets/images/megaphone-illustration.png";
import Button from "../button/button";

type HeroProps = React.HTMLAttributes<HTMLDivElement>;

const Hero = forwardRef<HTMLDivElement, HeroProps>(({ ...restProps }, ref) => {
  const className = [styles.hero, restProps.className]
    .filter(Boolean)
    .join(" ");

  return (
    <div {...{ ref, ...restProps, className: className }}>
      <div className={styles["hero__content"]}>
        <h2
          className={`${styles["hero__content__title"]} ${styles["hero__content__title--desktop-only"]}`}
        >
          Navigating the digital landscape for success
        </h2>
        <p className={styles["hero__content__description"]}>
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <Button className={styles["hero__content__cta"]} variant="secondary">
          Book a consultation
        </Button>
      </div>
      <div className={styles["hero__illustration"]}>
        <img
          className={styles["hero__illustration__image"]}
          src={megaphoneIllustration}
          alt="megaphone"
          width={600.46}
          height={515}
        />
      </div>
      <h2
        className={`${styles["hero__content__title"]} ${styles["hero__content__title--mobile-only"]}`}
      >
        Navigating the digital landscape for success
      </h2>
    </div>
  );
});

Hero.displayName = "Hero";

export default Hero;
