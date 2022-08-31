import React, { memo } from "react";
import { Link } from "react-router-dom";

export const LinkPrimary = memo(({ children, type, ...props }) => {
  return (
    <Link className="btn btn-primary" type={type} {...props}>
      {children}
    </Link>
  );
});
