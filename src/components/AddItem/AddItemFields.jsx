import React from "react";
import { useDispatch } from "react-redux";
import { ButtonPrimary } from "../UI/Buttons/ButtonPrimary";
import { useNavigate } from "react-router-dom";
import { addNewItemStorage } from "store/app-process/app-process";
import { useForm } from "react-hook-form";

export const AddItemFields = ({ config }) => {
  console.log(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const newItemData = {
      ...data,
      id: Math.random().toString(),
      typeW: "warehouse",
      virtualId: Math.random().toString(),
    };
    console.log(newItemData);
    dispatch(addNewItemStorage(newItemData));
    navigate("/storages");
    // { username: 'test', email: 'test', password: 'test' }
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
                  <div className="mb-10 fv-row">
                    <label className="required form-label">
                      Название склада
                    </label>
                    <input
                      type="text"
                      className="form-control mb-2"
                      placeholder="Название склада"
                      {...register("storage", {
                        required: true,
                        minLength: 6,
                        maxLength: 24,
                        pattern: /^[A-Za-z]+$/i,
                      })}
                    />
                    {errors.storage && <span>This field is required</span>}
                  </div>
                  <div className="mb-10 fv-row">
                    <label className="required form-label">Приоритет</label>
                    <input
                      type="text"
                      className="form-control mb-2"
                      placeholder="Приоритет"
                      {...register("priority", {
                        required: true,
                        minLength: 6,
                        maxLength: 24,
                        pattern: /^[A-Za-z]+$/i,
                      })}
                    />
                    {errors.priority && <span>This field is required</span>}
                  </div>
                  <div className="mb-10 fv-row">
                    <label className="required form-label">Статус</label>
                    <input
                      name="status"
                      type="text"
                      className="form-control mb-2"
                      placeholder="Статус"
                      {...register("status", {
                        required: true,
                        minLength: 6,
                        maxLength: 24,
                        pattern: /^[A-Za-z]+$/i,
                      })}
                    />
                    {errors.status && <span>This field is required</span>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ButtonPrimary type="submit">Создать</ButtonPrimary>
      </div>
    </form>
  );
};
