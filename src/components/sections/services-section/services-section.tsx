import { forwardRef, HTMLAttributes } from "react";
import ButtonIcon from "../../button-icon/button-icon";
import Card from "../../card/card";
import Heading from "../../heading/heading";
import { IconArrow } from "../../icons";
import Typography from "../../typography/typography";
import styles from "./services-section.module.css";

interface ServicesSectionProps extends HTMLAttributes<HTMLDivElement> {
  data: TService[];
}

const ServicesSection = forwardRef<HTMLDivElement, ServicesSectionProps>(
  ({ data, ...restProps }, ref) => {
    const className = [styles["services-section"], restProps.className]
      .filter(Boolean)
      .join(" ");

    return (
      <section {...{ ref, ...restProps, className }}>
        <div className={styles["services-section__header"]}>
          <Heading level={2}>Services</Heading>
          <Typography className={styles["services-section__description"]}>
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </Typography>
        </div>
        <div className={styles["services-section__list"]}>
          {data.map((service) => (
            <Card
              key={service.header.titles.join("")}
              className={styles["services-section__item"]}
              variant={service.card.variant}
              withShadow
              withBorder
            >
              <div className={styles["services-section__content"]}>
                <div>
                  {service.header.titles.map((title, index) => (
                    <Heading
                      key={index}
                      level={3}
                      variant={service.header.variant}
                    >
                      {title}
                    </Heading>
                  ))}
                </div>

                <ButtonIcon
                  className={`${styles["services-section__button"]} ${styles["services-section__button--desktop"]}`}
                  icon={
                    <IconArrow
                      className={styles["services-section__button__icon"]}
                    />
                  }
                  variant={service.button?.variant}
                  aria-label="Learn more"
                  rotateArrowAnimation
                  asChild
                >
                  <a href="#learn-more">Learn More</a>
                </ButtonIcon>
              </div>
              <div className={styles["services-section__image-wrapper"]}>
                <ButtonIcon
                  className={`${styles["services-section__button"]} ${styles["services-section__button--mobile"]}`}
                  icon={<IconArrow />}
                  variant={service.button?.variant}
                  aria-label="Learn more"
                  iconOnly
                  rotateArrowAnimation
                  asChild
                >
                  <a href="#learn-more">Learn More</a>
                </ButtonIcon>
                <img
                  className={styles["services-section__image"]}
                  {...service.body}
                />
              </div>
            </Card>
          ))}
        </div>
      </section>
    );
  }
);

ServicesSection.displayName = "ServicesSection";

export default ServicesSection;
