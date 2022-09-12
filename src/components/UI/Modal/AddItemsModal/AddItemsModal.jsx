import React, { memo } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { openModal } from "store/app-process/app-process";
import { useAppSelector } from "../../../../hooks/index";
import { Modal } from "../ReUsable/Modal";
import { InputLoginForm } from "../../Inputs/InputLoginForm/InputLoginForm";
import { getDataInputForm } from "../../../../assets/helpers";
import { validationAddItem } from "assets/validations";
import { ButtonPrimary } from "../../Buttons/ButtonPrimary";
import { ModalActions } from "../ReUsable/ModalActions";
import { getStatus } from "store/app-data/app-data";

export const AddItemsModal = memo(({ data }) => {
  const { headers } = data;
  const items = getDataInputForm(headers, validationAddItem);
  const {
    register,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const dispatch = useDispatch();
  const success = useAppSelector(getStatus);

  const handleAddItem = (data) => {
    if (isValid) {
      //dispatch(addNewItem())
      dispatch(openModal({ isOpenModal: false }));
    }
    if (success?.status) {
      reset();
    }
  };
  const handleCloseModal = (data) => {
    dispatch(openModal({ isOpenModal: false }));
  };

  const inputList = items?.map((config) => (
    <InputLoginForm
      key={config.id}
      config={config}
      register={register}
      validation={config.validation}
      errors={errors[config.label]}
    />
  ));

  return (
    <Modal onClose={handleCloseModal}>
      {inputList}
      <ModalActions>
        <ButtonPrimary style={{ opacity: `${!isValid ? "0.3" : 1}` }} onClick={handleAddItem}>
          Добавить
        </ButtonPrimary>
        <ButtonPrimary onClick={handleCloseModal}>Закрыть</ButtonPrimary>
      </ModalActions>
    </Modal>
  );
});
