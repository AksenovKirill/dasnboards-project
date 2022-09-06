import React, { memo } from "react";

export const AuthModalErrorIcon = memo((props) => (
  <div
    className="swal2-icon swal2-error swal2-icon-show"
    style={{ display: "flex" }}
  >
    <span className="swal2-x-mark">
      <span className="swal2-x-mark-line-left" />
      <span className="swal2-x-mark-line-right" />
    </span>
  </div>
));
