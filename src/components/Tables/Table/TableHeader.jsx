import React from "react";

const TableHeader = ({ title, className }) => {
  return (
    <>
      <th key={title} className={className}>
        {title}
      </th>
    </>
  );
};

export default TableHeader;
