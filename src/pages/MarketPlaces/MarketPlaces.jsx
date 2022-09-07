import React from "react";
import { TableMarketPlaces } from "../../components/Tables/TableMarketPlaces/TableMarketPlaces";

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
