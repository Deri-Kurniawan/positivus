import { forwardRef, HTMLAttributes } from "react";
import ButtonIcon from "../../button-icon/button-icon";
import Card from "../../card/card";
import Heading from "../../heading/heading";
import { IconMinus, IconPlus } from "../../icons";
import Typography from "../../typography/typography";
import styles from "./our-working-process-section.module.css";

interface OurWorkingProcessSectionProps extends HTMLAttributes<HTMLDivElement> {
  data: TWorkingProcess[];
}

const OurWorkingProcessSection = forwardRef<
  HTMLDivElement,
  OurWorkingProcessSectionProps
>(({ data, ...restProps }, ref) => {
  const className = [styles["our-working-process-section"], restProps.className]
    .filter(Boolean)
    .join(" ");

  return (
    <section {...{ ref, ...restProps, className }}>
      <div className={styles["our-working-process-section__header"]}>
        <Heading
          className={styles["our-working-process-section__title"]}
          level={2}
        >
          Our Working Process
        </Heading>
        <Typography
          className={styles["our-working-process-section__description"]}
        >
          Step-by-Step Guide to Achieving Your Business Goals
        </Typography>
      </div>
      <div className={styles["our-working-process-section__list"]}>
        {data.map(({ title, description }, index) => (
          <Card
            key={title}
            className={styles["our-working-process-section__item"]}
            variant="tertiary"
            withShadow
            withBorder
            asChild
          >
            <details open={index == 0} name="our-working-process-section">
              <summary
                className={styles["our-working-process-section__summary"]}
              >
                <Typography
                  level={2}
                  className={
                    styles["our-working-process-section__item__number"]
                  }
                >
                  {index < 9 ? `0${index + 1}` : ++index}
                </Typography>
                <Typography
                  level={4}
                  className={styles["our-working-process-section__item__title"]}
                >
                  {title}
                </Typography>
                <ButtonIcon
                  className={styles["our-working-process-section__button"]}
                  variant="ghost-alt"
                  icon={
                    <>
                      <IconPlus
                        className={
                          styles[
                            "our-working-process-section__button__icon--plus"
                          ]
                        }
                        width={12.97}
                        height={12.97}
                      />
                      <IconMinus
                        className={
                          styles[
                            "our-working-process-section__button__icon--minus"
                          ]
                        }
                        width={12.97}
                        height={12.97}
                      />
                    </>
                  }
                  iconOnly
                  asChild
                >
                  <span />
                </ButtonIcon>
              </summary>
              <Typography
                className={styles["our-working-process-section__content"]}
              >
                {description}
              </Typography>
            </details>
          </Card>
        ))}
      </div>
    </section>
  );
});

OurWorkingProcessSection.displayName = "OurWorkingProcessSection";

export default OurWorkingProcessSection;
