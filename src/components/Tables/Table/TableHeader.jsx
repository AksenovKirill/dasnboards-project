import React, { memo } from "react";

export const TableHeader = memo(({ title, className }) => {
  console.log(title);
  return (
    <>
      <th key={title} className={className}>
        {title}
      </th>
    </>
  );
});
