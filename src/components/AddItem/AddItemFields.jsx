import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { InputLoginForm } from "../UI/Inputs/InputLoginForm/InputLoginForm";
import { ErrorValidateForm } from "../UI/Errors/ErrorValidateForm";
import { ButtonPrimary } from "../UI/Buttons/ButtonPrimary";
import { validationAddItem } from "../../assets/const";
import { addNewItemStorage } from "store/app-process/app-process";
import good from "../../assets/media/good.svg";

export const AddItemFields = ({ config }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    if (isValid && data) {
      const newItemData = {
        ...data,
        id: Math.random().toString(),
        typeW: "warehouse",
        virtualId: Math.random().toString(),
      };
      dispatch(addNewItemStorage(newItemData));
      reset();
      navigate("/storages");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      id="kt_ecommerce_add_product_form"
      className="form d-flex flex-column flex-lg-row"
    >
      <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
        <div className="tab-content">
          <div className="tab-pane fade show active">
            <div className="d-flex flex-column gap-7 gap-lg-10">
              <div className="card card-flush py-4">
                <div className="card-body pt-10">
                  <div
                    className="mb-12 fv-row"
                    style={{ position: "relative", paddingLeft: "1rem" }}
                  >
                    <label className="required form-label">
                      Название склада
                    </label>
                    <InputLoginForm
                      register={register}
                      type="text"
                      placeholder="Название склада"
                      label="storage"
                      validation={validationAddItem}
                    />
                    {errors?.storage ? (
                      <ErrorValidateForm
                        style={{
                          position: "absolute",
                          top: "4.4rem",
                          left: "1rem",
                          color: "red",
                        }}
                      >
                        {errors?.storage?.message || "Error"}
                      </ErrorValidateForm>
                    ) : (
                      <img
                        style={{
                          position: "absolute",
                          top: "2.5rem",
                          left: "-1.6rem",
                        }}
                        src={good}
                        alt="good"
                      />
                    )}
                  </div>
                  <div
                    className="mb-12 ml-10 fv-row"
                    style={{ position: "relative", paddingLeft: "1rem" }}
                  >
                    <label className="required form-label">Статус</label>
                    <InputLoginForm
                      register={register}
                      type="text"
                      placeholder="Статус"
                      label="status"
                      validation={validationAddItem}
                    />
                    {errors?.status ? (
                      <ErrorValidateForm
                        style={{
                          position: "absolute",
                          top: "4.4rem",
                          left: "1rem",
                          color: "red",
                        }}
                      >
                        {errors?.status?.message || "Error"}
                      </ErrorValidateForm>
                    ) : (
                      <img
                        style={{
                          position: "absolute",
                          top: "2.5rem",
                          left: "-1.6rem",
                        }}
                        src={good}
                        alt="good"
                      />
                    )}
                  </div>
                  <div
                    className="mb-12 fv-row"
                    style={{ position: "relative", paddingLeft: "1rem" }}
                  >
                    <label className="required form-label">Приоритет</label>
                    <InputLoginForm
                      register={register}
                      type="text"
                      placeholder="Приоритет"
                      label="priority"
                      validation={validationAddItem}
                    />
                    {errors?.priority ? (
                      <ErrorValidateForm
                        style={{
                          position: "absolute",
                          top: "4.4rem",
                          left: "1rem",
                          color: "red",
                        }}
                      >
                        {errors?.priority?.message || "Error"}
                      </ErrorValidateForm>
                    ) : (
                      <img
                        style={{
                          position: "absolute",
                          top: "2.5rem",
                          left: "-1.6rem",
                        }}
                        src={good}
                        alt="good"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ButtonPrimary
          style={{ opacity: `${!isValid ? "0.3" : 1}` }}
          disabled={!isValid}
          type="submit"
        >
          Создать
        </ButtonPrimary>
      </div>
    </form>
  );
};
