import { ComponentProps, forwardRef } from "react";
import { mcn } from "../../lib/utils";
import ButtonIcon from "../button-icon/button-icon";
import Button from "../button/button";
import Heading from "../heading/heading";
import { IconPositivus, IconPositivusTypography } from "../icons";
import Typography from "../typography/typography";
import styles from "./footer.module.css";

type FooterProps = {
  navLinks?: TNavLink[];
  socialMedia?: SocialMedia[];
} & ComponentProps<"footer">;

const Footer = forwardRef<HTMLDivElement, FooterProps>(
  ({ navLinks = [], socialMedia = [], ...restProps }, ref) => {
    const className = mcn([styles.footer, restProps.className]);

    return (
      <footer {...{ ref, ...restProps, className }}>
        <div className={styles["footer__header"]}>
          <div className={styles["footer__logo"]}>
            <IconPositivus className={styles["footer__icon"]} />
            <IconPositivusTypography className={styles["footer__icon-text"]} />
          </div>
          <div className={styles["footer__nav-list"]}>
            {navLinks.length > 0 &&
              navLinks.map((item) => (
                <Typography
                  className={styles["footer__nav-item"]}
                  key={item.title}
                  asChild
                >
                  <a href={item.url}>{item.title}</a>
                </Typography>
              ))}
          </div>
          <div className={styles["footer__social-media-list"]}>
            {socialMedia.length > 0 &&
              socialMedia.map((item) => (
                <ButtonIcon
                  key={item.title}
                  className={styles["footer__social-media-item"]}
                  variant="ghost-alt"
                  icon={item.icon}
                  iconOnly
                  asChild
                  aria-label={item.title}
                >
                  <a href={item.url} target="_blank">
                    {item.title}
                  </a>
                </ButtonIcon>
              ))}
          </div>
        </div>
        <div className={styles["footer__contact-subscribe"]}>
          <div className={styles["footer__contact-info"]}>
            <Heading
              level={4}
              className={styles["footer__contact-info-heading"]}
            >
              Contact Us:
            </Heading>
            <div className={styles["footer__contact-info-list"]}>
              <Typography>Email: info@positivus.com</Typography>
              <Typography>Phone: 555-567-8901</Typography>
              <Typography>
                Address: 1234 Main St
                <br />
                Moonstone City, Stardust State 12345
              </Typography>
            </div>
          </div>
          <div className={styles["footer__subscribe"]}>
            <input
              className={styles["footer__input-subscribe"]}
              type="email"
              placeholder="Email"
            />
            <Button className={styles["footer__button-subscribe"]}>
              Subscribe to news
            </Button>
          </div>
        </div>
        <div className={styles["footer__social-media-list-mobile"]}>
          {socialMedia.length > 0 &&
            socialMedia.map((item) => (
              <ButtonIcon
                key={item.title}
                className={styles["footer__social-media-item-mobile"]}
                variant="ghost-alt"
                icon={item.icon}
                iconOnly
                asChild
                aria-label={item.title}
              >
                <a href={item.url} target="_blank">
                  {item.title}
                </a>
              </ButtonIcon>
            ))}
        </div>
        <div className={styles["footer__bottom"]}>
          <Typography>© 2023 Positivus. All Rights Reserved.</Typography>
          <div className={styles["footer__bottom-links"]}>
            <Typography asChild>
              <a href="#privacy">Privacy</a>
            </Typography>{" "}
            <Typography asChild>
              <a href="#policy">Policy</a>
            </Typography>
          </div>
        </div>
      </footer>
    );
  }
);

export default Footer;
