import React, { memo } from "react";
import { AddItemFields } from "./AddItemFields";

export const AddItemWrapper = memo(() => {
  return (
    <div style={{ marginTop: "7rem" }} className="d-flex flex-column flex-root">
      <div className="page d-flex flex-row flex-column-fluid">
        <div
          className="wrapper d-flex flex-column flex-row-fluid"
          id="kt_wrapper"
        >
          <div
            id="kt_content_container"
            className="d-flex flex-column-fluid align-items-start container-xxl"
          >
            <div className="content flex-row-fluid" id="kt_content">
              <AddItemFields />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
