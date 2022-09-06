import React, { memo } from "react";
import "./SeparatorWhite.css";

export const SeparatorWhite = memo(() => {
  return (
    <div className="hr">
      <hr className="text-white hr-2" />
    </div>
  );
});
