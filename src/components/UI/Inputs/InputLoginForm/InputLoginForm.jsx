import React, { memo } from "react";
import { ErrorValidateForm } from "../../Errors/ErrorValidateForm";
import { GoodIcon } from "../../Images/GoodIcon";

export const InputLoginForm = memo((props) => {
  const { register, config, validation, errors } = props;
  const { isLabel, type, label, placeholder, wrapper } = config;

  return (
    <>
      <div style={{ position: "relative" }} className={wrapper}>
        {isLabel && <label className="required form-label">{label}</label>}
        <input
          type={type}
          placeholder={placeholder}
          className="form-control bg-transparent"
          {...register(config.label, { ...validation })}
        />
        {errors ? (
          <ErrorValidateForm
            style={{
              position: "absolute",
              top: "2rem",
              left: "0rem",
              color: "red",
            }}
          >
            {errors?.message || "Error"}
          </ErrorValidateForm>
        ) : (
          <GoodIcon />
        )}
      </div>
    </>
  );
});
