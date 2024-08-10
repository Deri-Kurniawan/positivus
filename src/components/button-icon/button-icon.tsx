import { cva, VariantProps } from "class-variance-authority";
import React, {
  cloneElement,
  FC,
  forwardRef,
  HTMLAttributes,
  LegacyRef,
  ReactNode,
} from "react";
import styles from "./button-icon.module.css";

export const buttonClasses = cva(styles["button-icon"], {
  variants: {
    variant: {
      primary: styles["button-icon--primary"],
      "primary-alt": styles["button-icon--primary-alt"],
      "primary-plain": styles["button-icon--primary-plain"],
      secondary: styles["button-icon--secondary"],
      "secondary-alt": styles["button-icon--secondary-alt"],
      "secondary-plain": styles["button-icon--secondary-plain"],
      ghost: styles["button-icon--ghost"],
      "ghost-alt": styles["button-icon--ghost-alt"],
      "ghost-plain": styles["button-icon--ghost-plain"],
      outline: styles["button-icon--outline"],
    },
    iconOnly: {
      true: styles["button-icon--icon-only"],
    },
  },
  defaultVariants: {
    variant: "primary",
    iconOnly: undefined,
  },
});

type ButtonIconProps = {
  icon: ReactNode;
  asChild?: boolean;
  children?: ReactNode;
} & HTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonClasses>;

const ButtonIcon: FC<ButtonIconProps> = forwardRef(
  (
    { variant, icon, asChild, children, iconOnly, ...restProps },
    ref: LegacyRef<HTMLButtonElement>
  ) => {
    const className = [
      buttonClasses({
        variant,
        iconOnly,
      }),
      restProps.className,
    ]
      .filter(Boolean)
      .join(" ");

    if (asChild) {
      if (typeof children === "string")
        throw new Error(
          "Children must be a React element when using the `asChild` prop."
        );
      return cloneElement(children as React.ReactElement, {
        ...restProps,
        ref,
        className: [className, (children as React.ReactElement).props.className]
          .filter(Boolean)
          .join(" "),
        children: (
          <>
            <div className={styles["button-icon__icon"]}>{icon}</div>
            <span className={styles["button-icon__label"]}>
              {(children as React.ReactElement).props.children}
            </span>
          </>
        ),
      });
    }

    return (
      <button {...{ ref, ...restProps, className }}>
        <div className={styles["button-icon__icon"]}>{icon}</div>
        <span className={styles["button-icon__label"]}>{children}</span>
      </button>
    );
  }
);

ButtonIcon.displayName = "ButtonIcon";

export default ButtonIcon;
