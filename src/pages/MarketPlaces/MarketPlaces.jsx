import React, { memo } from "react";
import { TableMarketPlaces } from "../../components/Tables/TableMarketPlaces/TableMarketPlaces";
import { Footer } from "../../components/Footer/Footer";
import { ButtonScrollTop } from "../../components/UI/Buttons/ButtonScrollTop/ButtonScrollTop";
export const MarketPlaces = memo(() => {
  return (
    <>
      <div className="d-flex flex-column-fluid align-items-start container-xxl position-relative">
        <div className="content flex-row-fluid">
          <TableMarketPlaces />
        </div>
      </div>
      <Footer />
      <ButtonScrollTop />
    </>
  );
});
