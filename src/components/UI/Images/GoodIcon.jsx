import React, { memo } from "react";
import good from "../../../assets/media/good.svg";

export const GoodIcon = memo(() => {
  return (
    <img
      style={{
        position: "absolute",
        top: "0.5rem",
        left: "-3rem",
      }}
      src={good}
      alt="good"
    />
  );
});
