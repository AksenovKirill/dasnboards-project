import React from "react";

export const AuthModalMessage = ({ message }) => (
  <div
    className="swal2-html-container"
    id="swal2-html-container"
    style={{ display: "block" }}
  >
    {message}
  </div>
);
