import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { AuthPageImage } from "../AuthPageImage";
import { FormWrapper } from "../LoginForm/FormWrapper";
import { InputLoginForm } from "../../../components/UI/Inputs/InputLoginForm/InputLoginForm";
import { ButtonPrimary } from "../../../components/UI/Buttons/ButtonPrimary";
import { ErrorValidateForm } from "../../../components/UI/Errors/ErrorValidateForm";
import { SwitchForm } from "./SwitchForm";
import { useAuth } from "../../../hooks/useAuth";
import { validationPassword, validationUserName } from "assets/const";
import good from "../../../assets/media/good.svg";

export const FormAuth = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const success = useSelector((state) => state.data?.success);

  const { handleSubmitLogin } = useAuth();

  const handleClick = (data) => {
    if (isValid) {
      handleSubmitLogin(data);
    }
    if (success?.status) {
      reset();
    }
  };

  return (
    <FormWrapper>
      <AuthPageImage />
      <div className="d-flex flex-column-fluid flex-lg-row-auto justify-content-center justify-content-lg-end p-12">
        <div className="bg-body d-flex flex-center rounded-4 w-md-600px p-10">
          <div className="w-md-400px">
            <form
              onSubmit={handleSubmit(handleClick)}
              style={{ position: "relative" }}
              className="form w-100"
            >
              <div className="text-center mb-11">
                <h1 className="text-dark fw-bolder mb-3">Sign In</h1>
                <div className="text-gray-500 fw-semibold fs-6">
                  Your Social Campaigns
                </div>
              </div>
              <InputLoginForm
                register={register}
                type="text"
                placeholder="Your name"
                label="username"
                validation={validationUserName}
              />
              {errors?.username ? (
                <ErrorValidateForm
                  style={{
                    position: "absolute",
                    top: "9rem",
                    left: "0rem",
                    color: "red",
                  }}
                >
                  {errors?.username?.message || "Error"}
                </ErrorValidateForm>
              ) : (
                <img
                  style={{
                    position: "absolute",
                    top: "7.5rem",
                    left: "-3.5rem",
                  }}
                  src={good}
                  alt="good"
                />
              )}
              <InputLoginForm
                register={register}
                type="password"
                placeholder="Password"
                label="password"
                validation={validationPassword}
              />
              {errors.password ? (
                <ErrorValidateForm
                  style={{
                    position: "absolute",
                    top: "14.3rem",
                    left: "0",
                    color: "red",
                  }}
                >
                  {errors?.password?.message || "Error!"}
                </ErrorValidateForm>
              ) : (
                <img
                  style={{
                    position: "absolute",
                    top: "13rem",
                    left: "-3.5rem",
                  }}
                  src={good}
                  alt="good"
                />
              )}
              {}
              <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" className="link-primary">
                  Forgot Password ?
                </a>
              </div>
              <div className="d-grid mb-10">
                <ButtonPrimary
                  style={{ opacity: `${!isValid ? "0.3" : 1}` }}
                  disabled={!isValid}
                  type="submit"
                >
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
};
