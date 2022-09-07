export const validationUserName = {
  required: "Поле обязательно к заполнению",
  minLength: { value: 6, message: "Минимальная длина 6 символов" },
  maxLength: { value: 24, message: "Максимальная длина 24 символа" },
  pattern: {
    value: /^[a-zA-Z]+([_-]?[a-zA-Z0-9])*$/,
    message: "Поле должно содержать только латинские буквы и цифры",
  },
};

export const validationPassword = {
  required: "Поле обязательно к заполнению",
  minLength: { value: 8, message: "Минимальная длина 8 символов" },
  maxLength: { value: 24, message: "Максимальная длина 24 символа" },
  pattern: {
    value: /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/,
    message: "Поле должно содержать только латинские буквы и цифры",
  },
};
export const validationRepeatPassword = {
  required: "Поле обязательно к заполнению",
  minLength: { value: 8, message: "Минимальная длина 8 символов" },
  maxLength: { value: 24, message: "Максимальная длина 24 символа" },
  pattern: {
    value: /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/,
    message: "Поле должно содержать только латинские буквы и цифры",
  },
};

export const validationFirstLastName = {
  required: "Поле обязательно к заполнению",
  minLength: { value: 6, message: "Минимальная длина 6 символов" },
  maxLength: { value: 24, message: "Максимальная длина 24 символа" },
};

export const validationAddItem = {
  required: "Поле обязательно к заполнению",
  minLength: { value: 6, message: "Минимальная длина 6 символов" },
  maxLength: { value: 24, message: "Максимальная длина 24 символа" },
};
