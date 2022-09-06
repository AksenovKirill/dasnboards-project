import React, { memo } from "react";

export const TableHeader = memo(({ title, className }) => {
  return (
    <>
      <th key={title} className={className}>
        {title}
      </th>
    </>
  );
});
