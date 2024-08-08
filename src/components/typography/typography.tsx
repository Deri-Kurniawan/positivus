import { cva, VariantProps } from "class-variance-authority";
import React, {
  cloneElement,
  FC,
  forwardRef,
  HTMLAttributes,
  LegacyRef,
  ReactNode,
} from "react";
import styles from "./typography.module.css";

const typographyClasses = cva(styles.typography, {
  variants: {
    level: {
      1: styles["typography--level-1"],
      2: styles["typography--level-2"],
      3: styles["typography--level-3"],
      4: styles["typography--level-4"],
      p: styles["typography--level-p"],
    },
  },
  defaultVariants: {
    level: "p",
  },
});

type TypographyProps = {
  asChild?: boolean;
  children?: ReactNode;
} & HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof typographyClasses>;

const Typography: FC<TypographyProps> = forwardRef(
  (
    { asChild, children, level, ...restProps },
    ref: LegacyRef<HTMLDivElement>
  ) => {
    const className = [typographyClasses({ level }), restProps.className]
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

Typography.displayName = "Typography";

export default Typography;
