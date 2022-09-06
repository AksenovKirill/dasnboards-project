import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { FormWrapper } from "../LoginForm/FormWrapper";
import { AuthPageImage } from "../../../components/UI/Images/AuthPageImage";
import { InputLoginForm } from "../../../components/UI/Inputs/InputLoginForm/InputLoginForm";
import { ButtonPrimary } from "../../../components/UI/Buttons/ButtonPrimary";
import { SwitchForm } from "./SwitchForm";
import { useRegistration } from "../../../hooks/useRegistration";
import { inputRegistrationConfig } from "../../../assets/configurators";

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
      handleSubmitRegistration(data);
    }
    if (success?.status) {
      reset();
    }
  };

  const inputList = inputRegistrationConfig.map((config) => (
    <InputLoginForm
      config={config}
      key={config.id}
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
            <form
              onSubmit={handleSubmit(handleClick)}
              style={{ position: "relative" }}
              className="form w-100"
            >
              <div className="text-center mb-11">
                <h1 className="text-dark fw-bolder mb-3">Sign Up</h1>
                <div className="text-gray-500 fw-semibold fs-6">
                  Your Social Campaigns
                </div>
              </div>
              {inputList}
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
