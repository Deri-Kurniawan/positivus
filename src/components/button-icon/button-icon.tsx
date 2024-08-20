import { cva, VariantProps } from "class-variance-authority";
import {
  ButtonHTMLAttributes,
  cloneElement,
  FC,
  forwardRef,
  LegacyRef,
  ReactElement,
  ReactNode,
} from "react";
import { mcn } from "../../lib/utils";
import styles from "./button-icon.module.css";

const buttonClasses = cva(styles["button-icon"], {
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
    rotateArrowAnimation: {
      true: styles["button-icon--rotate-arrow"],
    },
  },
  defaultVariants: {
    variant: "primary",
    iconOnly: undefined,
    rotateArrowAnimation: undefined,
  },
});

type ButtonIconProps = {
  icon: ReactNode;
  asChild?: boolean;
  children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonClasses>;

const ButtonIcon: FC<ButtonIconProps> = forwardRef(
  (
    {
      variant,
      icon,
      asChild,
      children,
      iconOnly,
      rotateArrowAnimation,
      ...restProps
    },
    ref: LegacyRef<HTMLButtonElement>
  ) => {
    const className = mcn([
      buttonClasses({
        variant,
        iconOnly,
        rotateArrowAnimation,
      }),
      restProps.className,
    ]);

    if (asChild) {
      if (typeof children === "string")
        throw new Error(
          "Children must be a React element when using the `asChild` prop."
        );
      return cloneElement(children as ReactElement, {
        ...restProps,
        ref,
        className: mcn([className, (children as ReactElement).props.className]),
        children: (
          <>
            <div className={styles["button-icon__icon"]}>{icon}</div>
            <span className={styles["button-icon__label"]}>
              {(children as ReactElement).props.children}
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
