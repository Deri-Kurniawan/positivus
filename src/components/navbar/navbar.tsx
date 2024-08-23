import { ComponentProps, useEffect, useRef, useState } from "react";
import { useViewport } from "../../hooks/use-viewport";
import { mcn } from "../../lib/utils";
import Button from "../button/button";
import {
  IconHamburger,
  IconPositivus,
  IconPositivusTypography,
} from "../icons";
import Typography from "../typography/typography";
import styles from "./navbar.module.css";

type NavbarProps = {
  data?: TNavLink[];
} & ComponentProps<"nav">;

const Navbar = ({ data = [], ...restProps }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  const { width } = useViewport();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResizeAndKeys = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    if (width > 1366) closeMenu();

    document.addEventListener("keydown", handleResizeAndKeys);
    return () => document.removeEventListener("keydown", handleResizeAndKeys);
  }, [width]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav
        {...{
          ...restProps,
          className: mcn([styles.navbar, restProps.className]),
          ref: navbarRef,
        }}
        aria-label="Main navigation"
      >
        <a className={styles["navbar__brand"]} href="/">
          <IconPositivus className={styles["navbar__brand__icon"]} />
          <IconPositivusTypography
            className={styles["navbar__brand__icon-text"]}
          />
        </a>
        <button
          className={styles["navbar__toggle-menu"]}
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-controls="navbar-menu"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
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
      <div
        id="navbar-menu"
        style={{
          paddingTop: navbarRef.current
            ? `${navbarRef.current?.offsetHeight}px`
            : `${84}px`,
        }}
        className={mcn([
          styles["navbar__menu"],
          isMenuOpen && styles["navbar__menu--open"],
        ])}
        role="menu"
        aria-hidden={!isMenuOpen}
      >
        <ul className={styles["navbar__menu__list"]}>
          {data.map(({ title, url }) => (
            <li key={`menu-${title}`} className={styles["navbar__list__item"]}>
              <Typography level={3} asChild>
                <a
                  href={url}
                  onClick={closeMenu}
                  tabIndex={isMenuOpen ? 0 : -1}
                  role="menuitem"
                >
                  {title}
                </a>
              </Typography>
            </li>
          ))}
        </ul>
        <Button
          variant="secondary"
          onClick={closeMenu}
          style={{
            display: "inline-block !important",
          }}
          tabIndex={isMenuOpen ? 0 : -1}
        >
          Request a quote
        </Button>
      </div>
      <div
        className={mcn([
          styles["navbar__background-overlay"],
          isMenuOpen && styles["navbar__background-overlay--open"],
        ])}
        onClick={closeMenu}
        aria-hidden={!isMenuOpen}
      />
    </>
  );
};

Navbar.displayName = "Navbar";

export default Navbar;
