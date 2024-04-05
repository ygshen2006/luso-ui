import React from "react";

type Props = {
  children: string | React.JSX.Element | React.JSX.Element[] | (() => React.JSX.Element);
};

const ChildFunction = ({ children }: Props) => {
  if (typeof children === "function") {
    return children();
  } else {
    return children;
  }
};

export default ChildFunction;
