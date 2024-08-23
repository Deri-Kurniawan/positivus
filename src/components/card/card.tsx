import { cva, VariantProps } from "class-variance-authority";
import {
  cloneElement,
  FC,
  forwardRef,
  HTMLAttributes,
  LegacyRef,
  ReactElement,
  ReactNode,
} from "react";
import { mcn } from "../../lib/utils";
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
    const className = mcn([
      cardClasses({ variant, withShadow, withBorder }),
      restProps.className,
    ]);

    if (asChild) {
      if (typeof children === "string")
        throw new Error(
          "Children must be a React element when using the `asChild` prop."
        );
      return cloneElement(children as ReactElement, {
        ref,
        ...restProps,
        className: mcn([className, (children as ReactElement).props.className]),
      });
    }

    return <div {...{ ref, ...restProps, className }}>{children}</div>;
  }
);

Card.displayName = "Card";

export default Card;
