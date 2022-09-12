import {
  validationFirstLastName,
  validationPassword,
  validationRepeatPassword,
  validationUserName,
  validationAddItem,
} from "./validations";

export const headerWRHousesClasses = [
  { className: "text-center px-10 min-w-80px" },
  { className: "text-center px-10 min-w-80px" },
  { className: "text-center px-10 min-w-80px" },
  { className: "text-center px-10 min-w-80px" },
  { className: "text-center px-10 min-w-80px" },
  { className: "text-center px-10 min-w-80px" },
];

export const headerOrganizationsClasses = [
  { className: "text-center min-w-80px" },
  { className: "text-center min-w-300px" },
  { className: "text-center min-w-300px" },
  { className: "text-end min-w-200px px-10" },
];

export const actionConfig = {
  title: "Action",
  className: "text-end min-w-100px px-10",
};

export const headerMarketPLClasses = [
  { className: "text-center min-w-100px" },
  { className: "text-center min-w-30px" },
  { className: "text-center min-w-150px" },
  { className: "text-center min-w-100px" },
  { className: "text-center min-w-100px" },
  { className: "text-end min-w-100px px-5" },
];

export const inputAuthConfig = [
  {
    placeholder: "Your name",
    type: "text",
    label: "username",
    isLabel: false,
    id: "key1",
    validation: validationUserName,
    className: "fv-row mb-8",
  },
  {
    placeholder: "Your password",
    type: "password",
    label: "password",
    isLabel: false,
    id: "key2",
    validation: validationPassword,
    className: "fv-row mb-8",
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
    className: "fv-row mb-8",
  },
  {
    placeholder: "Last name",
    type: "text",
    label: "last-name",
    isLabel: false,
    id: "key4",
    validation: validationFirstLastName,
    className: "fv-row mb-8",
  },
  {
    placeholder: "Username",
    type: "text",
    label: "username",
    isLabel: false,
    id: "key5",
    validation: validationUserName,
    className: "fv-row mb-8",
  },
  {
    placeholder: "Password",
    type: "password",
    label: "password",
    isLabel: false,
    id: "key6",
    validation: validationPassword,
    className: "fv-row mb-8",
  },
  {
    placeholder: "Repeat password",
    type: "password",
    label: "repeat-password",
    isLabel: false,
    id: "key7",
    validation: validationRepeatPassword,
    className: "fv-row mb-8",
  },
];

export const inputWrHousesAddConfig = [
  {
    id: "key8",
    type: "text",
    className: "mb-12 fv-row",
    validation: validationAddItem,
  },
  {
    id: "key9",
    type: "text",
    className: "mb-12 fv-row",
    validation: validationAddItem,
  },
  {
    id: "key10",
    type: "text",
    className: "mb-12 fv-row",
    validation: validationAddItem,
  },
];
