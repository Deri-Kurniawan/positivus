import { ComponentProps, forwardRef } from "react";
import { mcn } from "../../lib/utils";
import Button from "../button/button";
import {
  IconHamburger,
  IconPositivus,
  IconPositivusTypography,
} from "../icons";
import styles from "./navbar.module.css";

type NavbarProps = {
  data?: TNavLink[];
} & ComponentProps<"nav">;

const Navbar = forwardRef<HTMLDivElement, NavbarProps>(
  ({ data = [], ...restProps }, ref) => {
    const className = mcn([styles.navbar, restProps.className]);

    return (
      <nav {...{ ref, ...restProps, className }}>
        <div className={styles["navbar__brand"]}>
          <IconPositivus className={styles["navbar__brand__icon"]} />
          <IconPositivusTypography
            className={styles["navbar__brand__icon-text"]}
          />
        </div>
        <button className={styles["navbar__hamburger"]}>
          <IconHamburger />
        </button>
        <ul className={styles["navbar__list"]}>
          {data.map(({ title, url }) => (
            <li key={url} className={styles["navbar__list__item"]}>
              <a href={url}>{title}</a>
            </li>
          ))}
          <Button variant="outline">Request a quote</Button>
        </ul>
      </nav>
    );
  }
);

Navbar.displayName = "Navbar";

export default Navbar;
