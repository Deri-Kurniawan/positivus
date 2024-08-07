import { cva, VariantProps } from "class-variance-authority";
import React, {
  cloneElement,
  FC,
  forwardRef,
  HTMLAttributes,
  LegacyRef,
  ReactNode,
} from "react";
import styles from "./heading.module.css";

const headingClasses = cva(styles.heading, {
  variants: {
    variant: {
      primary: styles["heading--primary"],
      secondary: styles["heading--secondary"],
      ghost: styles["heading--ghost"],
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

type HeadingProps = {
  asChild?: boolean;
  children?: ReactNode;
} & HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingClasses>;

const Heading: FC<HeadingProps> = forwardRef(
  (
    { asChild, children, variant, ...restProps },
    ref: LegacyRef<HTMLHeadingElement>
  ) => {
    const className = [headingClasses({ variant }), restProps.className]
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
      <h2 ref={ref} {...restProps} className={className}>
        {children}
      </h2>
    );
  }
);

Heading.displayName = "Heading";

export default Heading;
