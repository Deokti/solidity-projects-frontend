// Components for rendering HTML code
// Used for @metamask/jazzicon

import React, { useEffect, useRef } from "react";

interface VanillaChildrenProps {
  children: HTMLElement | HTMLDivElement;
}

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const VanillaChildren = ({
  children,
}: VanillaChildrenProps): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.appendChild(children);
  }, [ref]);

  return <div style={style} ref={ref} />;
};
