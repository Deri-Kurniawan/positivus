import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import {
  forwardRef,
  HTMLAttributes,
  useCallback,
  useEffect,
  useState,
} from "react";
import Card from "../../card/card";
import Heading from "../../heading/heading";
import { IconArrow, IconPositivus } from "../../icons";
import Typography from "../../typography/typography";
import styles from "./testimonials-section.module.css";

interface TestimonialsSectionProps extends HTMLAttributes<HTMLDivElement> {
  data: TTestimonial[];
}

const TestimonialsSection = forwardRef<
  HTMLDivElement,
  TestimonialsSectionProps
>(({ data, ...restProps }, ref) => {
  const className = [styles["testimonials-section"], restProps.className]
    .filter(Boolean)
    .join(" ");

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
    },
    [
      Autoplay({
        delay: 1000 * 20,
      }),
    ]
  );
  const setActiveIndex = useState(0)[1];

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        // The functionality is fine but, if it does not set any state,
        // embla does not update their state like `selectedScrollSnap()` which does not change its value
        setActiveIndex(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi, setActiveIndex]);

  const carouselControl = useCallback(
    (direction: "prev" | "next") => {
      if (!emblaApi) return;
      if (direction === "prev")
        return emblaApi.canScrollPrev() && emblaApi.scrollPrev();
      return emblaApi.canScrollNext() && emblaApi.scrollNext();
    },
    [emblaApi]
  );

  const disableCarouselControl = useCallback(
    (direction: "prev" | "next") => {
      if (!emblaApi) return true;
      if (direction === "prev") return emblaApi.selectedScrollSnap() === 0;
      return emblaApi.selectedScrollSnap() === emblaApi.slideNodes().length - 1;
    },
    [emblaApi]
  );

  return (
    <section {...{ ref, ...restProps, className }}>
      <div className={styles["testimonials-section__header"]}>
        <Heading level={2}>Testimonials</Heading>
        <Typography className={styles["testimonials-section__description"]}>
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </Typography>
      </div>
      <Card
        variant="secondary"
        className={styles["testimonials-section__container"]}
        style={{
          overflow: "hidden",
        }}
      >
        <div ref={emblaRef}>
          <div className={styles["testimonials-section__list"]}>
            {data.map(({ name, title, review }, i) => (
              <div key={i} className={styles["testimonials-section__item"]}>
                <Card
                  variant="secondary"
                  className={styles["testimonials-section__review"]}
                >
                  <Typography>"{review}"</Typography>
                  <svg
                    className={styles["testimonials-section__quote-icon"]}
                    width="64"
                    height="39"
                    viewBox="0 0 64 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M57.9661 10.4757L32 37.8152L6.03387 10.4757L57.9661 10.4757Z"
                      fill="inherit"
                      stroke="inherit"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M56.2465 10.25L32.0008 35.6339L7.7544 10.25L56.2465 10.25Z"
                      fill="inherit"
                      stroke="inherit"
                      strokeWidth="1.5"
                    />
                  </svg>
                </Card>
                <div className={styles["testimonials-section__author"]}>
                  <Typography
                    className={styles["testimonials-section__author-name"]}
                    level={4}
                  >
                    {name}
                  </Typography>
                  <Typography>{title}</Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles["testimonials-section__controls"]}>
          <button
            className={styles["testimonials-section__control-button"]}
            onClick={() => carouselControl("prev")}
            disabled={disableCarouselControl("prev")}
            aria-label="Previous testimonial"
          >
            <IconArrow />
          </button>
          <div className={styles["testimonials-section__indicators"]}>
            {data.map((_, i) => (
              <IconPositivus
                key={`indicator-${i}`}
                className={`${styles["testimonials-section__indicator"]} ${emblaApi?.selectedScrollSnap() === i && styles["testimonials-section__indicator--active"]}`}
                onClick={() => emblaApi?.scrollTo(--i)}
                aria-label={`Testimonial Indicator ${++i}`}
              />
            ))}
          </div>
          <button
            className={styles["testimonials-section__control-button"]}
            onClick={() => carouselControl("next")}
            disabled={disableCarouselControl("next")}
            aria-label="Next testimonial"
          >
            <IconArrow />
          </button>
        </div>
      </Card>
    </section>
  );
});

TestimonialsSection.displayName = "TestimonialsSection";

export default TestimonialsSection;
