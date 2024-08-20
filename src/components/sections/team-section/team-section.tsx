import { forwardRef, HTMLAttributes } from "react";
import { mcn } from "../../../lib/utils";
import ButtonIcon from "../../button-icon/button-icon";
import Button from "../../button/button";
import Card from "../../card/card";
import Heading from "../../heading/heading";
import { IconLinkedIn } from "../../icons";
import Typography from "../../typography/typography";
import styles from "./team-section.module.css";

type TeamSectionProps = {
  data: TTeam[];
} & HTMLAttributes<HTMLDivElement>;

const TeamSection = forwardRef<HTMLDivElement, TeamSectionProps>(
  ({ data, ...restProps }, ref) => {
    const className = mcn([styles["team-section"], restProps.className]);

    return (
      <section {...{ ref, ...restProps, className }}>
        <div className={styles["team-section__header"]}>
          <Heading level={2}>Team</Heading>
          <Typography className={styles["team-section__description"]}>
            Meet the skilled and experienced team behind our successful digital
            marketing strategies
          </Typography>
        </div>
        <div className={styles["team-section__list"]}>
          {data.map(({ name, title, about, picture, linkedin }) => (
            <Card
              key={`team-${name}-${title}`}
              variant="tertiary"
              className={styles["team-section__item"]}
              withBorder
              withShadow
            >
              <div className={styles["team-section__profile"]}>
                <img src={picture} alt={`${name} profile picture`} />
                <div className={styles["team-section__info"]}>
                  <ButtonIcon
                    icon={<IconLinkedIn />}
                    variant="secondary"
                    iconOnly
                    asChild
                  >
                    <a href={linkedin} target="_blank" rel="noreferrer" />
                  </ButtonIcon>

                  <div className={styles["team-section__details"]}>
                    <Typography level={4}>{name}</Typography>
                    <Typography>{title}</Typography>
                  </div>
                </div>
              </div>
              <Typography>{about}</Typography>
            </Card>
          ))}
        </div>
        <div className={styles["team-section__button-container"]}>
          <Button
            variant="secondary"
            className={styles["team-section__button"]}
          >
            See all team
          </Button>
        </div>
      </section>
    );
  }
);

TeamSection.displayName = "TeamSection";

export default TeamSection;
