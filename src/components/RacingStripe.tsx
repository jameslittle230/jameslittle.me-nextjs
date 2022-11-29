import classNames from "classnames";

export const RacingStripe = ({ level }: { level: 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 }) => (
  <div className={classNames("racing-stripe", `racing-stripe-${level}`)} />
);
