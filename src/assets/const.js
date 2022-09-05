export const testUrl = "https://62e0e42998dd9c9df618a454.mockapi.io/items";
export const API_URL = "http://2.59.41.170:4005/";
export const REQUEST_TIMEOUT = 5000;
export const TIMEOUT_SHOW_ERROR = 3000;
export const AUTH_TOKEN_KEY_NAME = "token";

export const validationUserName = {
  required: "Поле обязательно к заполнению",
  minLength: { value: 6, message: "Минимальная длина 6 символов" },
  maxLength: { value: 24, message: "Максимальная длина 24 символа" },
  // pattern: "^[a-zA-Z]+([_-]?[a-zA-Z0-9])*$",
};
export const validationPassword = {
  required: "Поле обязательно к заполнению",
  minLength: { value: 8, message: "Минимальная длина 8 символов" },
  maxLength: { value: 24, message: "Максимальная длина 24 символа" },
  //pattern: `^(?=.*d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$`,
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
export const sortList = [
  { name: "по цене (DESC)", sortProperty: "-buy_price" },
  { name: "по цене (ASC)", sortProperty: "buy_price" },
  { name: "по алфавиту (DESC)", sortProperty: "-name" },
  { name: "по алфавиту (ASC)", sortProperty: "name" },
];

export const nameSpace = {
  user: "user",
  data: "data",
  app: "app",
};

export const AuthorizationStatus = {
  Auth: "AUTHORIZATION",
  NoAuth: "NO_AUTHORIZATION",
  Unknown: "UNKNOWN",
};

export const UserStatus = {
  Guest: "Guest",
  Manager: "Manager",
  Boss: "Boss",
};
export const API_LINKS = {
  logIn: "/api/v1/account/login",
  registration: "/api/v1/account/register",
};

export const APP_ROUTES = {
  Main: "/",
  Auth: "/auth",
  Storage: "/storages",
  Add: "/addstorage",
  Products: "/products",
};

export const HTTP_CODES = {
  OK: 200,
  BAD_REQUEST: 422,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
};

export const changesClasses = {
  showTableMenu:
    "menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4 show",
  showTableLink: "btn btn-sm btn-light btn-active-light-primary show menu-dropdown",
  showFilterTableMenu: "menu menu-sub menu-sub-dropdown w-250px w-md-300px show",
  showFilterTableLink:
    "btn btn-custom btn-active-white btn-flex btn-color-white btn-active-color-primary fw-bold show menu-dropdown",
};

export const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiR3VzdGF2byIsImlhdCI6MTU5NjQwODI1OSwiZXhwIjo0NzUyMTY4MjU5fQ.ThwsJW2KfMTl0y24tTGWKHqvYWRp1iyo_Kh2KWTHuXc";
