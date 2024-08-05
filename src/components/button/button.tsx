import { cva, VariantProps } from "class-variance-authority";
import React, {
  cloneElement,
  FC,
  forwardRef,
  HTMLAttributes,
  LegacyRef,
  ReactNode,
} from "react";
import styles from "./button.module.css";

const buttonClasses = cva(styles.button, {
  variants: {
    variant: {
      primary: styles["button--primary"],
      secondary: styles["button--secondary"],
      outline: styles["button--outline"],
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

type ButtonProps = {
  asChild?: boolean;
  disabled?: boolean;
  children?: ReactNode;
} & HTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonClasses>;

const Button: FC<ButtonProps> = forwardRef(
  (
    { asChild, children, variant, ...restProps },
    ref: LegacyRef<HTMLButtonElement>
  ) => {
    const className = [buttonClasses({ variant }), restProps.className]
      .filter(Boolean)
      .join(" ");

    if (asChild) {
      if (typeof children === "string")
        throw new Error(
          "Children must be a React element when using the `asChild` prop."
        );
      return cloneElement(children as React.ReactElement, {
        ref,
        ...restProps,
        className: [className, (children as React.ReactElement).props.className]
          .filter(Boolean)
          .join(" "),
      });
    }

    return <button {...{ ref, ...restProps, className }}>{children}</button>;
  }
);

/**
 * `displayName` is very useful for displaying the correct name for
 * a component when displaying a code snippet of a component in a storybook.
 */
Button.displayName = "Button";

export default Button;
