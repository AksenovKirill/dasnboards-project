import React, { memo } from "react";

export const TDItem = memo(({ className, children, style }) => {
  return (
    <td style={style} className={className}>
      {children}
    </td>
  );
});
