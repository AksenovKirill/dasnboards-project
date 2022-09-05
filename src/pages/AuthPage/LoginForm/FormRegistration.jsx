import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { FormWrapper } from "../LoginForm/FormWrapper";
import { AuthPageImage } from "../../../components/UI/Images/AuthPageImage";
import { InputLoginForm } from "../../../components/UI/Inputs/InputLoginForm/InputLoginForm";
import { ErrorValidateForm } from "../../../components/UI/Errors/ErrorValidateForm";
import { ButtonPrimary } from "../../../components/UI/Buttons/ButtonPrimary";
import { SwitchForm } from "./SwitchForm";
import { useRegistration } from "../../../hooks/useRegistration";
import good from "../../../assets/media/good.svg";
import {
  validationFirstLastName,
  validationUserName,
  validationPassword,
} from "../../../assets/const";

export const FormRegistration = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const { handleSubmitRegistration } = useRegistration();
  const success = useSelector((state) => state.data?.success);

  const handleClick = (data) => {
    if (isValid) {
      console.log(data);
      handleSubmitRegistration(data);
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
                <h1 className="text-dark fw-bolder mb-3">Sign Up</h1>
                <div className="text-gray-500 fw-semibold fs-6">Your Social Campaigns</div>
              </div>
              <InputLoginForm
                register={register}
                type="text"
                placeholder="FirstName"
                label="firstname"
                validation={validationFirstLastName}
              />
              {errors.firstname ? (
                <ErrorValidateForm
                  style={{
                    position: "absolute",
                    top: "9.3rem",
                    left: "0",
                    color: "red",
                  }}
                >
                  {errors?.firstname?.message || "Error!"}
                </ErrorValidateForm>
              ) : (
                <img
                  style={{
                    position: "absolute",
                    top: "7.6rem",
                    left: "-3.5rem",
                  }}
                  src={good}
                  alt="good"
                />
              )}
              <InputLoginForm
                register={register}
                type="text"
                placeholder="Lastname"
                label="lastname"
                validation={validationFirstLastName}
              />
              {errors.lastname ? (
                <ErrorValidateForm
                  style={{
                    position: "absolute",
                    top: "14.6rem",
                    left: "0",
                    color: "red",
                  }}
                >
                  {errors?.lastname?.message || "Error!"}
                </ErrorValidateForm>
              ) : (
                <img
                  style={{
                    position: "absolute",
                    top: "12.9rem",
                    left: "-3.5rem",
                  }}
                  src={good}
                  alt="good"
                />
              )}
              <InputLoginForm
                register={register}
                type="text"
                placeholder="Username"
                label="username"
                validation={validationUserName}
              />
              {errors.username ? (
                <ErrorValidateForm
                  style={{
                    position: "absolute",
                    top: "19.9rem",
                    left: "0",
                    color: "red",
                  }}
                >
                  {errors?.username?.message || "Error!"}
                </ErrorValidateForm>
              ) : (
                <img
                  style={{
                    position: "absolute",
                    top: "18.2rem",
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
                    top: "25.2rem",
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
                    top: "23.6rem",
                    left: "-3.5rem",
                  }}
                  src={good}
                  alt="good"
                />
              )}
              <InputLoginForm
                register={register}
                type="password"
                placeholder="Repeat password"
                label="repeatPassword"
                autocomplete="current-password"
                validation={validationPassword}
              />
              {errors.repeatPassword ? (
                <ErrorValidateForm
                  style={{
                    position: "absolute",
                    top: "30.3rem",
                    left: "0",
                    color: "red",
                  }}
                >
                  {errors?.repeatPassword?.message || "Error!"}
                </ErrorValidateForm>
              ) : (
                <img
                  style={{
                    position: "absolute",
                    top: "29rem",
                    left: "-3.5rem",
                  }}
                  src={good}
                  alt="good"
                />
              )}
              <div className="d-grid mb-10">
                <ButtonPrimary
                  style={{ opacity: `${!isValid ? "0.3" : 1}` }}
                  disabled={!isValid}
                  type="submit"
                >
                  Sing up
                </ButtonPrimary>
              </div>
              <SwitchForm text="Already have an Account?" sing="Sign in" />
            </form>
          </div>
        </div>
      </div>
    </FormWrapper>
    //aksenoV1234
  );
};
