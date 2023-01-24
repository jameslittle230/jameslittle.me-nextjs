import classNames from "classnames";

export const RacingStripe = ({
  level,
  style,
}: {
  level: 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80;
  style?: any;
}) => (
  <div
    className={classNames("racing-stripe", `racing-stripe-${level}`)}
    style={style}
  />
);
