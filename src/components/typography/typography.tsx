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
    const className = mcn([typographyClasses({ level }), restProps.className]);

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

    return <p {...{ ref, ...restProps, className }}>{children}</p>;
  }
);

Typography.displayName = "Typography";

export default Typography;
