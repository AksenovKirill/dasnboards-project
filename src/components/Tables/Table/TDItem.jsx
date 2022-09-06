import React, { memo } from "react";

export const TDItem = memo(({ className, children }) => {
  return <td className={className}>{children}</td>;
});
