export const Icon = ({ style, children }: any) => {
  return (
    <span style={{ width: "100%", display: "inline-block", lineHeight: "0", ...style }}>
      {children}
    </span>
  );
};
