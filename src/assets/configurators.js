import {
  validationFirstLastName,
  validationPassword,
  validationRepeatPassword,
  validationUserName,
} from "./const";

export const headerTableStoragesConfig = [
  { title: "Название склада", className: "text-center min-w-100px" },
  { title: "id", className: "text-center min-w-30px" },
  { title: "Тип", className: "text-center min-w-100px" },
  { title: "Приоритет", className: "text-center min-w-150px" },
  { title: "Статус", className: "text-center min-w-100px" },
  { title: "Действие", className: "text-end min-w-100px px-5" },
];

export const headerTableMarketConfig = [
  { title: "Наименование товара", className: "text-center min-w-100px" },
  { title: "Количество товара", className: "text-center min-w-30px" },
  { title: "Цена", className: "text-center min-w-150px" },
  { title: "Остатки", className: "text-center min-w-100px" },
  { title: "Статус", className: "text-center min-w-100px" },
  { title: "Действие", className: "text-end min-w-100px px-5" },
];

export const inputAuthConfig = [
  {
    placeholder: "Your name",
    type: "text",
    label: "username",
    isLabel: false,
    id: "key1",
    validation: validationUserName,
    wrapper: "fv-row mb-8",
  },
  {
    placeholder: "Your password",
    type: "password",
    label: "password",
    isLabel: false,
    id: "key2",
    validation: validationPassword,
    wrapper: "fv-row mb-8",
  },
];

export const inputRegistrationConfig = [
  {
    placeholder: "First name",
    type: "text",
    label: "first-name",
    isLabel: false,
    id: "key3",
    validation: validationFirstLastName,
    wrapper: "fv-row mb-8",
  },
  {
    placeholder: "Last name",
    type: "text",
    label: "last-name",
    isLabel: false,
    id: "key4",
    validation: validationFirstLastName,
    wrapper: "fv-row mb-8",
  },
  {
    placeholder: "Username",
    type: "text",
    label: "username",
    isLabel: false,
    id: "key5",
    validation: validationUserName,
    wrapper: "fv-row mb-8",
  },
  {
    placeholder: "Password",
    type: "password",
    label: "password",
    isLabel: false,
    id: "key6",
    validation: validationPassword,
    wrapper: "fv-row mb-8",
  },
  {
    placeholder: "Repeat password",
    type: "password",
    label: "repeat-password",
    isLabel: false,
    id: "key7",
    validation: validationRepeatPassword,
    wrapper: "fv-row mb-8",
  },
];

export const inputTableStorageAddItemConfig = [
  {
    id: "key8",
    type: "text",
    label: "Название склада",
    placeholder: "Название склада",
    wrapper: "mb-12 fv-row",
    validation: validationFirstLastName,
  },
  {
    id: "key9",
    type: "text",
    label: "Приоритет",
    placeholder: "Приоритет",
    className: "mb-12 fv-row",
    validation: validationFirstLastName,
  },
  {
    id: "key10",
    type: "text",
    label: "Статус",
    placeholder: "Статус",
    className: "mb-12 fv-row",
    validation: validationFirstLastName,
  },
];
