import React, { memo } from "react";
import { ButtonPrimary } from "../ButtonPrimary";

export const ButtonLoginForm = memo(({ children, type, ...props }) => {
  return (
    <div className="d-grid mb-10">
      <ButtonPrimary type={type} {...props}>
        {children}
      </ButtonPrimary>
    </div>
  );
});
