import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

export const GoBackButtonRoute = memo(({ children, props }) => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <button
      style={{
        marginRight: "2rem",
        cursor: "pointer",
      }}
      {...props}
      className="btn btn-custom btn-active-white btn-flex btn-color-white btn-primary fw-bold"
      onClick={goBack}
    >
      <span className="svg-icon svg-icon-2 svg-icon-gray-500 me-2">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.60001 11H21C21.6 11 22 11.4 22 12C22 12.6 21.6 13 21 13H9.60001V11Z"
            fill="currentColor"
          />
          <path
            opacity="0.9"
            d="M9.6 20V4L2.3 11.3C1.9 11.7 1.9 12.3 2.3 12.7L9.6 20Z"
            fill="currentColor"
          />
        </svg>
      </span>
      {children}
    </button>
  );
});
