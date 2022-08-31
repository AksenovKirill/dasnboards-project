import React, { memo } from "react";
import classes from "./Loader.module.css";

export const LoaderTable = memo(() => {
  return (
    <div className={classes.wrapperLoader}>
      <div className={classes.ldsSpinner}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
});
