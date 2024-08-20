import { cva, VariantProps } from "class-variance-authority";
import {
  Children,
  cloneElement,
  forwardRef,
  HTMLAttributes,
  ReactElement,
  ReactNode,
  useCallback,
} from "react";
import { mcn } from "../../lib/utils";
import styles from "./marquee.module.css";

const marqueeCva = cva(styles.marquee, {
  variants: {
    pauseOnHover: {
      true: styles["marquee--hover-on-pause"],
    },
    direction: {
      "to-left": styles["marquee--direction-to-left"],
      "to-right": styles["marquee--direction-to-right"],
    },
  },
  defaultVariants: {
    pauseOnHover: false,
    direction: "to-left",
  },
});

type MarqueeProps = {
  pauseOnHover?: boolean;
  /**
   * Animation speed in seconds
   *
   * or you can redeclare --c-marquee-animation-duration in CSS
   *
   * @default 25 seconds
   */
  speed?: number;
} & HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof marqueeCva>;

const duplicateChildren = (children: ReactNode, times: number) => {
  const childArray = Children.toArray(children);
  const duplicatedChildren = [];
  for (let i = 0; i < times; i++) {
    duplicatedChildren.push(
      ...childArray.map((child, index) =>
        cloneElement(child as ReactElement, {
          key: `child-${i}-${index}`,
        })
      )
    );
  }
  return duplicatedChildren;
};

const Marquee = forwardRef<HTMLDivElement, MarqueeProps>(
  (
    {
      direction = "to-left",
      speed = 25,
      pauseOnHover = false,
      children,
      ...restProps
    },
    ref
  ) => {
    const className = mcn([
      marqueeCva({ direction, pauseOnHover }),
      restProps.className,
    ]);

    const childArray = Children.toArray(children);
    const childCount = childArray.length;

    let duplicatedChildren;
    if (childCount < 6) {
      const duplicateTimes = Math.ceil(12 / childCount);
      duplicatedChildren = duplicateChildren(children, duplicateTimes);
    } else {
      duplicatedChildren = childArray;
    }

    const renderMarqueeItems = useCallback(
      () => (
        <>
          {new Array(2).fill(null).map((_, i) => (
            <div
              key={`marquee-wrapper-${i}`}
              className={styles["marquee__wrapper__item"]}
              style={{ animationDuration: `${speed}s` }}
            >
              {duplicatedChildren}
            </div>
          ))}
        </>
      ),
      [speed, duplicatedChildren]
    );

    return (
      <div {...{ ref, ...restProps, className }}>
        <div className={styles["marquee__wrapper"]}>{renderMarqueeItems()}</div>
      </div>
    );
  }
);

Marquee.displayName = "Marquee";

export default Marquee;
