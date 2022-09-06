import React, { memo } from "react";
import { TableStorages } from "../../components/Tables/TableStorages/TableStorages";
import { Footer } from "../../components/Footer/Footer";
import { ButtonScrollTop } from "../../components/UI/Buttons/ButtonScrollTop/ButtonScrollTop";
import "./Storage.css";

export const Storage = memo(() => {
  return (
    <>
      <div className="d-flex flex-column-fluid align-items-start container-xxl position-relative">
        <div className="content flex-row-fluid">
          <TableStorages />
        </div>
      </div>
      <Footer />
      <ButtonScrollTop />
    </>
  );
});
