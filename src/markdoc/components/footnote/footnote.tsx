import classnames from "classnames";
import React, { FocusEventHandler, MouseEventHandler, useEffect } from "react";

const Footnote = ({ children }: any) => {
  const toggleRef = React.useRef<HTMLAnchorElement | null>(null);
  const popoverRef = React.useRef<HTMLDivElement | null>(null);
  const [popoverVisible, setPopoverVisible] = React.useState(false);

  useEffect(() => {
    if (toggleRef.current && popoverRef.current) {
      popoverRef.current.style.right = `0px`;
      popoverRef.current.style.top = `0px`;
      const pRect = popoverRef.current.getBoundingClientRect();
      const tRect = toggleRef.current.getBoundingClientRect();

      const pHorizontalCenter = (pRect.left + pRect.right) / 2;
      const tHorizontalCenter = (tRect.left + tRect.right) / 2;
      const pHorizontalOffset = pHorizontalCenter - tHorizontalCenter;

      const pTop = pRect.top;
      const pHeight = pRect.height;
      const tTop = tRect.top;
      const pVerticalOffset = tTop - pTop - pHeight - 5;
      console.log(pTop, pHeight, tTop, pVerticalOffset);

      popoverRef.current.style.right = `${pHorizontalOffset}px`;
      popoverRef.current.style.top = `${pVerticalOffset}px`;
    }
  }, [popoverRef, toggleRef, popoverVisible]);

  return (
    <>
      {popoverVisible && (
        <div className="footnote-popover" ref={popoverRef}>
          {children}
        </div>
      )}
      <a
        href="#"
        className={classnames("footnote-toggle", {
          "footnote-toggle-active": popoverVisible,
        })}
        onFocus={() => setPopoverVisible(true)}
        onBlur={() => setPopoverVisible(false)}
        onClick={(e) => {
          e.preventDefault();
        }}
        onMouseDown={(e) => {
          e.preventDefault();
          setPopoverVisible(!popoverVisible);
        }}
        ref={toggleRef}
      >
        <svg width="44" height="16" viewBox="0 0 44 16" fill="none">
          <rect className="pill" width="44" height="16" rx="8" fill="#CACACA" />
          <rect x="8" y="5" width="6" height="6" rx="4" fill="white" />
          <rect x="19" y="5" width="6" height="6" rx="4" fill="white" />
          <rect x="30" y="5" width="6" height="6" rx="4" fill="white" />
        </svg>
      </a>
    </>
  );
};

export default Footnote;
