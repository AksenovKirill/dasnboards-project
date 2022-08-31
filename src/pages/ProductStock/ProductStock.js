import React, { memo } from "react";
import { TableProductStock } from "../../components/Tables/TableProductStock/TableProductStock";
import { ButtonScrollTop } from "../../components/UI/Buttons/ButtonScrollTop/ButtonScrollTop";

export const ProductStock = memo(() => {
  return (
    <div>
      <TableProductStock />
      <ButtonScrollTop />
    </div>
  );
});
