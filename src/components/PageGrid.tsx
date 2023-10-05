import React from "react";
import classnames from "classnames";

export type Background = "surface" | "offset" | "color" | "dark-color";

export const Grid = ({
  background,
  style,
  children,
  padding,
}: {
  background?: Background;
  style?: any;
  children: any;
  padding?: "none" | "less";
}) => {
  let backgroundColor = "none";
  switch (background) {
    case "color":
      backgroundColor = "var(--color-background)";
      break;
    case "dark-color":
      backgroundColor = "var(--dark-color-background)";
      break;
    case "offset":
      backgroundColor = "var(--offset-background)";
      break;
    case "surface":
      backgroundColor = "var(--surface-background)";
      break;
  }

  return (
    <div
      className={classnames("full-width-wrap", {
        "full-width-wrap-no-padding": padding === "none",
        "full-width-wrap-less-padding": padding === "less",
        "reverse-text-color": background === "color",
      })}
      style={{ backgroundColor, ...style }}
    >
      {children}
    </div>
  );
};

export const FullWidth = ({ children, style }: any) => {
  return (
    <div style={{ width: "100%", gridColumn: "3 / 4", ...style }}>
      {children}
    </div>
  );
};

export const Gutter = ({
  side,
  children,
  style,
}: {
  side: "left" | "right";
  children: any;
  style?: any;
}) => {
  const gridColumn = side === "left" ? "2 / 3" : "4 / 5";
  return <div style={{ gridColumn, ...style }}>{children}</div>;
};

export const Subgrid = ({
  weight,
  className,
  children,
}: {
  weight: "left" | "center" | "right";
  className?: string;
  children: any;
}) => {
  return (
    <FullWidth>
      <div
        className={classnames(
          "subgrid",
          `${weight}-weighted-subgrid`,
          className
        )}
      >
        {children}
      </div>
    </FullWidth>
  );
};

export const Left = ({ children, style, className }: any) => {
  return (
    <div
      className={className}
      style={{ width: "100%", gridColumn: "1 / 2", gridRow: "none", ...style }}
    >
      {children}
    </div>
  );
};

export const Right = ({ children, style, className }: any) => {
  return (
    <div
      className={className}
      style={{ width: "100%", gridColumn: "2 / 3", gridRow: "none", ...style }}
    >
      {children}
    </div>
  );
};
