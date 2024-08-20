import { cva, VariantProps } from "class-variance-authority";
import React, {
  cloneElement,
  FC,
  forwardRef,
  HTMLAttributes,
  LegacyRef,
  ReactNode,
} from "react";
import styles from "./card.module.css";

const cardClasses = cva(styles.card, {
  variants: {
    variant: {
      primary: styles["card--primary"],
      secondary: styles["card--secondary"],
      tertiary: styles["card--tertiary"],
    },
    withShadow: {
      true: styles["card--shadow"],
    },
    withBorder: {
      true: styles["card--border"],
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export type CardProps = {
  asChild?: boolean;
  children?: ReactNode;
} & HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardClasses>;

const Card: FC<CardProps> = forwardRef(
  (
    { asChild, children, variant, withShadow, withBorder, ...restProps },
    ref: LegacyRef<HTMLDivElement>
  ) => {
    const className = [
      cardClasses({ variant, withShadow, withBorder }),
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
        ref,
        ...restProps,
        className: [className, (children as React.ReactElement).props.className]
          .filter(Boolean)
          .join(" "),
      });
    }

    return (
      <div ref={ref} {...restProps} className={className}>
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
