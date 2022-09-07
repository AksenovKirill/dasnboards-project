import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { InputLoginForm } from "../UI/Inputs/InputLoginForm/InputLoginForm";
import { ButtonPrimary } from "../UI/Buttons/ButtonPrimary";
import { addNewItemStorage } from "store/app-process/app-process";
import { inputTableStorageAddItemConfig } from "../../assets/configurators";

export const AddItemFields = () => {
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

  const inputList = inputTableStorageAddItemConfig.map((config) => (
    <InputLoginForm
      config={config}
      key={config.id}
      register={register}
      validation={config.validation}
      errors={errors[config.label]}
    />
  ));

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
                <div className="card-body pt-10">{inputList}</div>
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
