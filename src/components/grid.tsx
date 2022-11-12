import React from "react";
import classnames from "classnames";

export type Background = "surface" | "offset" | "color";

export const Grid = ({
  background,
  style,
  children,
  noPadding
}: {
  background?: Background;
  style?: any;
  children: any;
  noPadding?: boolean;
}) => {
  let backgroundColor = "none";
  switch (background) {
    case "color":
      backgroundColor = "var(--color-background)";
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
        "full-width-wrap-no-padding": noPadding,
        "reverse-text-color": background === "color"
      })}
      style={{ backgroundColor, ...style }}
    >
      {children}
    </div>
  );
};

export const FullWidth = ({ children, style }: any) => {
  return <div style={{ width: "100%", gridColumn: "3 / 4", ...style }}>{children}</div>;
};

export const Gutter = ({ side, children }: { side: "left" | "right"; children: any }) => {
  const gridColumn = side === "left" ? "2 / 3" : "4 / 5";
  return <div style={{ gridColumn }}>{children}</div>;
};

export const Subgrid = ({
  weight,
  children
}: {
  weight: "left" | "center" | "right";
  children: any;
}) => {
  return (
    <FullWidth>
      <div className={`${weight}-weighted-subgrid subgrid`}>{children}</div>
    </FullWidth>
  );
};

export const Left = ({ children, style }: any) => {
  return <div style={{ width: "100%", gridColumn: "1 / 2", ...style }}>{children}</div>;
};

export const Right = ({ children, style }: any) => {
  return <div style={{ width: "100%", gridColumn: "2 / 3", ...style }}>{children}</div>;
};

// const gutterSize = "2rem";
// const columnGap = "1.5rem";
// const centerLaneSize = "55rem";

// const CenterLane = styled.div`
//   width: 100%;
// `;

// const LeftWeightedGrid = styled.div`
//   display: grid;
//   grid-template-columns: 18fr 7fr;
//   column-gap: ${columnGap};
// `;

// const RightWeightedGrid = styled.div`
//   display: grid;
//   grid-template-columns: 7fr 18fr;
//   column-gap: ${columnGap};
// `;

// const EvenWeightedGrid = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   column-gap: ${columnGap};
// `;

// const FullWidthWrapper = styled.div<{ background?: Background }>`
//   background: ${(props) => {
//     switch (props.background) {
//       case "color":
//         return "hsl(var(--theme-hue, 5), 50%, 50%)";
//       case "offset":
//         return "hsl(220, 4%, 80%)";
//       case "surface":
//         return "hsl(0, 0%, 100%)";
//     }
//     return "none";
//   }};
//   width: 100%;
//   display: grid;
//   grid-template-columns:
//     1fr ${gutterSize} min(${centerLaneSize}, calc(100% - (${gutterSize} * 2) - (${columnGap} * 2)))
//     ${gutterSize}
//     1fr;
//   column-gap: ${columnGap};
// `;

// type TwoUpLayout = {
//   left?: React.ReactChild | null;
//   right?: React.ReactChild | null;
// };

// const FullWidthGrid = ({
//   background,
//   style,
//   layout
// }: {
//   background?: "surface" | "offset" | "color";
//   style?: React.CSSProperties;
//   layout: {
//     gutter?: TwoUpLayout;
//   } & OneOf<{
//     leftWeighted: TwoUpLayout;
//     evenWeighted: TwoUpLayout;
//     rightWeighted: TwoUpLayout;
//     fullWidth: React.ReactChild;
//   }>;
// }) => {
//   const GridElement = () => {
//     if (layout) {
//       if (layout.evenWeighted) {
//         return (
//           <EvenWeightedGrid>
//             {layout.evenWeighted.left ? layout.evenWeighted.left : <div />}
//             {layout.evenWeighted.right ? layout.evenWeighted.right : <div />}
//           </EvenWeightedGrid>
//         );
//       } else if (layout.leftWeighted) {
//         return (
//           <LeftWeightedGrid>
//             {layout.leftWeighted.left ? layout.leftWeighted.left : <div />}
//             {layout.leftWeighted.right ? layout.leftWeighted.right : <div />}
//           </LeftWeightedGrid>
//         );
//       } else if (layout.rightWeighted) {
//         return (
//           <RightWeightedGrid>
//             {layout.rightWeighted.left ? layout.rightWeighted.left : <div />}
//             {layout.rightWeighted.right ? layout.rightWeighted.right : <div />}
//           </RightWeightedGrid>
//         );
//       } else if (layout.fullWidth) {
//         return layout.fullWidth;
//       }
//     }
//   };

//   return (
//     <FullWidthWrapper background={background} style={style}>
//       {layout.gutter?.left ? <div style={{ gridColumn: "2 / 3" }}>{layout.gutter.left}</div> : null}
//       <CenterLane style={{ gridColumn: "3 / 4" }}>{GridElement()}</CenterLane>
//       {layout.gutter?.right ? (
//         <div style={{ gridColumn: "2 / 3" }}>{layout.gutter.right}</div>
//       ) : null}
//     </FullWidthWrapper>
//   );
// };

// export default FullWidthGrid;
