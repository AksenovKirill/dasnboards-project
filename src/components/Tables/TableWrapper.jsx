import React, { memo } from "react";

export const TableWrapper = memo(({ children }) => {
  return (
    <div style={{ marginTop: "9.5rem" }} className="card card-flush>">
      {children}
    </div>
  );
});
