import React, { memo } from "react";
import { useForm } from "react-hook-form";
import { useAppSelector } from "hooks";
import { getStatus } from "store/app-data/app-data";
import { useAuth } from "../../../hooks/useAuth";
import { AuthPageImage } from "../../../components/UI/Images/AuthPageImage";
import { FormWrapper } from "../LoginForm/FormWrapper";
import { InputLoginForm } from "../../../components/UI/Inputs/InputLoginForm/InputLoginForm";
import { ButtonPrimary } from "../../../components/UI/Buttons/ButtonPrimary";
import { SwitchForm } from "./SwitchForm";
import { inputAuthConfig } from "assets/configurators";

export const FormAuth = memo(() => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const success = useAppSelector(getStatus);
  const { handleSubmitLogin } = useAuth();

  const handleClick = (data) => {
    if (isValid) {
      handleSubmitLogin(data);
    }
    if (success?.status) {
      reset();
    }
  };

  const inputList = inputAuthConfig.map((config) => (
    <InputLoginForm
      key={config.id}
      config={config}
      register={register}
      validation={config.validation}
      errors={errors[config.label]}
    />
  ));

  return (
    <FormWrapper>
      <AuthPageImage />
      <div className="d-flex flex-column-fluid flex-lg-row-auto justify-content-center justify-content-lg-end p-12">
        <div className="bg-body d-flex flex-center rounded-4 w-md-600px p-10">
          <div className="w-md-400px">
            <form onSubmit={handleSubmit(handleClick)} style={{ position: "relative" }} className="form w-100">
              <div className="text-center mb-11">
                <h1 className="text-dark fw-bolder mb-3">Sign In</h1>
                <div className="text-gray-500 fw-semibold fs-6">Your Social Campaigns</div>
              </div>
              {inputList}
              <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" className="link-primary">
                  Forgot Password ?
                </a>
              </div>
              <div className="d-grid mb-10">
                <ButtonPrimary style={{ opacity: `${!isValid ? "0.3" : 1}` }} disabled={!isValid} type="submit">
                  Sing in
                </ButtonPrimary>
              </div>
              <SwitchForm text="Not a Member yet?" sing="Sign up" />
            </form>
          </div>
        </div>
      </div>
    </FormWrapper>
  );
});
