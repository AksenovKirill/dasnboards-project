export const testUrl = "https://62e0e42998dd9c9df618a454.mockapi.io/items";
export const API_URL = "https://mp-test.alikson.ru/";
export const REQUEST_TIMEOUT = 5000;
export const TIMEOUT_SHOW_ERROR = 3000;

export const AUTH_TOKEN_KEY_NAMES = {
  refresh: "resfreshToken",
  access: "accessToken",
};

export const API_LINKS = {
  LOG_IN: "api/v1/account/login",
  REGISTRATION: "api/v1/account/register",
  GET_WAREHOUSES: "api/v1/warehouse/get_warehouses",
  GET_MARKETPLACES: "api/v1/marketplaces/get_marketplaces",
  GET_ORGANIZATIONS: "api/v1/merchants/get_organizations",
};

export const APP_ROUTES = {
  Main: "/",
  Auth: "/auth",
  WareHouses: "/warehouses",
  Add: "/add",
  Products: "/products",
  Organizations: "/organizations",
};

export const HTTP_CODES = {
  OK: 200,
  BAD_REQUEST: 422,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
};

export const sortList = [
  { name: "по цене (DESC)", sortProperty: "-buy_price" },
  { name: "по цене (ASC)", sortProperty: "buy_price" },
  { name: "по алфавиту (DESC)", sortProperty: "-name" },
  { name: "по алфавиту (ASC)", sortProperty: "name" },
];

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

export const changesClasses = {
  showTableMenu:
    "menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4 show",
  showTableLink:
    "btn btn-sm btn-light btn-active-light-primary show menu-dropdown",
  showFilterTableMenu:
    "menu menu-sub menu-sub-dropdown w-250px w-md-300px show",
  showFilterTableLink:
    "btn btn-custom btn-active-white btn-flex btn-color-white btn-active-color-primary fw-bold show menu-dropdown",
};
