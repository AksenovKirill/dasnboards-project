import React from "react";
import { memo } from "react";

export const FormWrapper = memo(({ children }) => {
  return (
    <div className="wrapper">
      <div
        data-kt-name="metronic"
        id="kt_body"
        className="app-blank bgi-size-cover bgi-position-center bgi-no-repeat"
      >
        <div className="d-flex flex-column flex-root">
          <div className="d-flex flex-column flex-lg-row flex-column-fluid">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
});
