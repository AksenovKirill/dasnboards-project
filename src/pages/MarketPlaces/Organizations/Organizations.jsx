import React, { memo } from "react";
import { TableOrganizations } from "./TableOrganizations/TableOrganizations";
import { Footer } from "../../../components/Footer/Footer";
import { ButtonScrollTop } from "../../../components/UI/Buttons/ButtonScrollTop/ButtonScrollTop";

export const Organizations = memo(() => {
  return (
    <>
      <div className="d-flex flex-column-fluid align-items-start container-xxl position-relative">
        <div className="content flex-row-fluid">
          <TableOrganizations />
        </div>
      </div>
      <Footer />
      <ButtonScrollTop />
    </>
  );
});
