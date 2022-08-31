import React from "react";
import { InputLoginForm } from "../../../components/UI/Inputs/InputLoginForm/InputLoginForm";
import { ButtonLoginForm } from "../../../components/UI/Buttons/ButtonLoginForm/ButtonLoginForm";
import { ErrorValidateForm } from "../../../components/UI/Errors/ErrorValidateForm";
import { SwitchForm } from "./SwitchForm";
import { useAuth } from "../../../hooks/useAuth";
import { useInput } from "../../../hooks/useInput";
import agency from "../../../assets/media/auth/agency.png";

export const FormAuth = () => {
  const { handleSubmitLogin, errorMessages, renderErrorMessage } = useAuth();
  const userName = useInput("", { isEmpty: true, minLength: 6 });
  const password = useInput("", { isEmpty: true, minLength: 8 });

  return (
    <div className="wrapper">
      <div
        data-kt-name="metronic"
        id="kt_body"
        className="app-blank bgi-size-cover bgi-position-center bgi-no-repeat"
      >
        <div className="d-flex flex-column flex-root">
          <div className="d-flex flex-column flex-lg-row flex-column-fluid">
            <div className="d-flex flex-lg-row-fluid">
              <div className="d-flex flex-column flex-center pb-0 pb-lg-10 p-10 w-100">
                <img
                  className="theme-light-show mx-auto mw-100 w-150px w-lg-300px mb-10 mb-lg-20"
                  src={agency}
                  alt="agency"
                />
                <h1 className="text-gray-800 fs-2qx fw-bold text-center mb-7">
                  Fast, Efficient and Productive
                </h1>
                <div className="text-gray-600 fs-base text-center fw-semibold">
                  In this kind of post,
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" className="opacity-75-hover text-primary me-1">
                    the blogger
                  </a>
                  introduces a person they’ve interviewed
                  <br />
                  and provides some background information about
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" className="opacity-75-hover text-primary me-1">
                    the interviewee
                  </a>
                  and their
                  <br />
                  work following this is a transcript of the interview.
                </div>
              </div>
            </div>
            <div className="d-flex flex-column-fluid flex-lg-row-auto justify-content-center justify-content-lg-end p-12">
              <div className="bg-body d-flex flex-center rounded-4 w-md-600px p-10">
                <div className="w-md-400px">
                  <form
                    style={{ position: "relative" }}
                    className="form w-100"
                    noValidate="novalidate"
                    id="kt_sign_in_form"
                    action="#"
                  >
                    <div className="text-center mb-11">
                      <h1 className="text-dark fw-bolder mb-3">Sign In</h1>
                      <div className="text-gray-500 fw-semibold fs-6">
                        Your Social Campaigns
                      </div>
                    </div>
                    {errorMessages && (
                      <ErrorValidateForm
                        style={{
                          position: "absolute",
                          top: "5.3rem",
                          left: "0.5rem",
                          color: "red",
                        }}
                      >
                        {renderErrorMessage("uname")}
                      </ErrorValidateForm>
                    )}
                    {userName.isFull && userName.isEmpty && (
                      <ErrorValidateForm
                        style={{
                          position: "absolute",
                          top: "5.3rem",
                          left: "0.5rem",
                          color: "red",
                        }}
                      >
                        {userName.errorMessages.empty}
                      </ErrorValidateForm>
                    )}
                    {userName.isFull && userName.minLengthError && (
                      <ErrorValidateForm
                        style={{
                          position: "absolute",
                          top: "5.3rem",
                          left: "16.5rem",
                          color: "red",
                        }}
                      >
                        {userName.errorMessages.length}
                      </ErrorValidateForm>
                    )}

                    <InputLoginForm
                      value={userName.value}
                      type="text"
                      placeholder="Your name"
                      name="name"
                      onChange={(event) => userName.onChange(event)}
                      onBlur={(event) => userName.onBlur(event)}
                      autoComplete="off"
                    />
                    {password.isFull && password.isEmpty && (
                      <ErrorValidateForm
                        style={{
                          position: "absolute",
                          top: "10.9rem",
                          left: "0.5rem",
                          color: "red",
                        }}
                      >
                        {password.errorMessages.empty}
                      </ErrorValidateForm>
                    )}
                    {password.isFull && password.minLengthError && (
                      <ErrorValidateForm
                        style={{
                          position: "absolute",
                          top: "10.9rem",
                          left: "16.5rem",
                          color: "red",
                        }}
                      >
                        {password.errorMessages.length}
                      </ErrorValidateForm>
                    )}
                    <InputLoginForm
                      value={password.value}
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={(event) => password.onChange(event)}
                      onBlur={(event) => password.onBlur(event)}
                      autoComplete="current-password"
                    />

                    <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                      <a href="#" className="link-primary">
                        Forgot Password ?
                      </a>
                    </div>

                    <ButtonLoginForm
                      onClick={(event) =>
                        handleSubmitLogin(event, userName.value, password.value)
                      }
                      type="submit"
                      id="kt_sign_up_submit"
                    >
                      Sign in
                    </ButtonLoginForm>
                    <SwitchForm text="Not a Member yet?" sing="Sign up" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
