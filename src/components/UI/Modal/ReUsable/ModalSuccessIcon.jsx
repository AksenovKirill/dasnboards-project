import React, { memo } from "react";

export const ModalSuccessIcon = memo((props) => (
  <div className="swal2-icon swal2-success swal2-icon-show" style={{ display: "flex" }}>
    <span className="swal2-success-line-tip" /> <span className="swal2-success-line-long" />
    <div className="swal2-success-ring" />
  </div>
));
