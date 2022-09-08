import React, { memo } from "react";
import { TableWareHouses } from "../../../components/Tables/TableWareHouses/TableWareHouses";
import { Footer } from "../../../components/Footer/Footer";
import { ButtonScrollTop } from "../../../components/UI/Buttons/ButtonScrollTop/ButtonScrollTop";
import { ButtonPrimary } from "../../../components/UI/Buttons/ButtonPrimary";

export const WareHouses = memo(() => {
  return (
    <>
      <div className="d-flex flex-column-fluid align-items-start container-xxl position-relative">
        <div className="content flex-row-fluid">
          <TableWareHouses />
        </div>
      </div>
      <Footer />
      <ButtonScrollTop />
    </>
  );
});
