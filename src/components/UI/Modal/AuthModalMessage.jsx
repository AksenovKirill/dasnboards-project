import React, { memo } from "react";
import { useSelector } from "react-redux";
import { HTTP_CODES } from "../../../assets/const";

export const AuthModalMessage = memo(({ message }) => {
  const statusError = useSelector((state) => state.data?.error?.status);
  const msg = useSelector((state) => state.data?.error?.data[0]?.msg);
  return (
    <div
      className="swal2-html-container"
      id="swal2-html-container"
      style={{ display: "block" }}
    >
      {message}
      {statusError === HTTP_CODES.BAD_REQUEST ||
      statusError === HTTP_CODES.SERVER_ERROR ||
      statusError === HTTP_CODES.UNAUTHORIZED
        ? msg
        : ""}
    </div>
  );
});
