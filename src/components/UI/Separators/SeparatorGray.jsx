import React, { memo } from "react";

export const SeparatorGray = memo((length, { ...props }) => {
  return <div className={`separator border-gray-${length}`} />;
});
