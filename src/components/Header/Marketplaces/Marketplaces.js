import React from "react";
import "./Marketplaces.css";

export const Marketplaces = () => {
  return (
    <div className="menu-item menu-lg-down-accordion me-0 me-lg-2 dropdown-content-navigation-market">
      <span className="menu-link py-4">
        <span className="menu-title">Маркетплейсы</span>
      </span>
      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown p-0 w-700px dropdown-content-navigation-content-market">
        <div className="menu-state-bg menu-extended">
          <div className="col-lg-10 mb-3 py-3 px-3">
            <div className="row">
              <div className="col-lg-6 mb-3">
                <div className="menu-item">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" className="menu-link">
                    <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                      <span className="svg-icon svg-icon-primary svg-icon-1">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="2"
                            y="2"
                            width="9"
                            height="9"
                            rx="2"
                            fill="currentColor"
                          />
                          <rect
                            opacity="0.3"
                            x="13"
                            y="2"
                            width="9"
                            height="9"
                            rx="2"
                            fill="currentColor"
                          />
                          <rect
                            opacity="0.3"
                            x="13"
                            y="13"
                            width="9"
                            height="9"
                            rx="2"
                            fill="currentColor"
                          />
                          <rect
                            opacity="0.3"
                            x="2"
                            y="13"
                            width="9"
                            height="9"
                            rx="2"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </span>
                    <span className="d-flex flex-column">
                      <span className="fs-6 fw-bold text-gray-800">
                        Организации
                      </span>
                      <span className="fs-7 fw-semibold text-muted">
                        Информация о организациях
                      </span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 mb-3">
                <div className="menu-item p-0 m-0">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" className="menu-link">
                    <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                      <span className="svg-icon svg-icon-danger svg-icon-2x">
                        <svg
                          xmlns="http://www.w3.org/1999/xlink"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            strokeWidth="1"
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect x="0" y="0" width="24" height="24" />
                            <path
                              d="M9,15 L7.5,15 C6.67157288,15 6,15.6715729 6,16.5 C6,17.3284271 6.67157288,18 7.5,18 C8.32842712,18 9,17.3284271 9,16.5 L9,15 Z M9,15 L9,9 L15,9 L15,15 L9,15 Z M15,16.5 C15,17.3284271 15.6715729,18 16.5,18 C17.3284271,18 18,17.3284271 18,16.5 C18,15.6715729 17.3284271,15 16.5,15 L15,15 L15,16.5 Z M16.5,9 C17.3284271,9 18,8.32842712 18,7.5 C18,6.67157288 17.3284271,6 16.5,6 C15.6715729,6 15,6.67157288 15,7.5 L15,9 L16.5,9 Z M9,7.5 C9,6.67157288 8.32842712,6 7.5,6 C6.67157288,6 6,6.67157288 6,7.5 C6,8.32842712 6.67157288,9 7.5,9 L9,9 L9,7.5 Z M11,13 L13,13 L13,11 L11,11 L11,13 Z M13,11 L13,7.5 C13,5.56700338 14.5670034,4 16.5,4 C18.4329966,4 20,5.56700338 20,7.5 C20,9.43299662 18.4329966,11 16.5,11 L13,11 Z M16.5,13 C18.4329966,13 20,14.5670034 20,16.5 C20,18.4329966 18.4329966,20 16.5,20 C14.5670034,20 13,18.4329966 13,16.5 L13,13 L16.5,13 Z M11,16.5 C11,18.4329966 9.43299662,20 7.5,20 C5.56700338,20 4,18.4329966 4,16.5 C4,14.5670034 5.56700338,13 7.5,13 L11,13 L11,16.5 Z M7.5,11 C5.56700338,11 4,9.43299662 4,7.5 C4,5.56700338 5.56700338,4 7.5,4 C9.43299662,4 11,5.56700338 11,7.5 L11,11 L7.5,11 Z"
                              fill="currentColor"
                              fillRule="nonzero"
                            />
                          </g>
                        </svg>
                      </span>
                    </span>
                    <span className="d-flex flex-column">
                      <span className="fs-6 fw-bold text-gray-800">
                        Мерчанты
                      </span>
                      <span className="fs-7 fw-semibold text-muted">
                        Информация о мерчантах
                      </span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 mb-3">
                <div className="menu-item p-0 m-0">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" className="menu-link">
                    <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                      <span className="svg-icon svg-icon-info svg-icon-2x">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            strokeWidth="1"
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect x="0" y="0" width="24" height="24" />
                            <path
                              d="M5.94290508,4 L18.0570949,4 C18.5865712,4 19.0242774,4.41271535 19.0553693,4.94127798 L19.8754445,18.882556 C19.940307,19.9852194 19.0990032,20.9316862 17.9963398,20.9965487 C17.957234,20.9988491 17.9180691,21 17.8788957,21 L6.12110428,21 C5.01653478,21 4.12110428,20.1045695 4.12110428,19 C4.12110428,18.9608266 4.12225519,18.9216617 4.12455553,18.882556 L4.94463071,4.94127798 C4.97572263,4.41271535 5.41342877,4 5.94290508,4 Z"
                              fill="currentColor"
                              opacity="0.3"
                            />
                            <path
                              d="M7,7 L9,7 C9,8.65685425 10.3431458,10 12,10 C13.6568542,10 15,8.65685425 15,7 L17,7 C17,9.76142375 14.7614237,12 12,12 C9.23857625,12 7,9.76142375 7,7 Z"
                              fill="currentColor"
                            />
                          </g>
                        </svg>
                      </span>
                    </span>
                    <span className="d-flex flex-column">
                      <span className="fs-6 fw-bold text-gray-800">
                        Магазины
                      </span>
                      <span className="fs-7 fw-semibold text-muted">
                        Информация о магазинах
                      </span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 mb-3">
                <div className="menu-item p-0 m-0">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" className="menu-link">
                    <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                      <span className="svg-icon svg-icon-dark svg-icon-2x">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            strokeWidth="1"
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect x="0" y="0" width="24" height="24" />
                            <path
                              d="M20.4061385,6.73606154 C20.7672665,6.89656288 21,7.25468437 21,7.64987309 L21,16.4115967 C21,16.7747638 20.8031081,17.1093844 20.4856429,17.2857539 L12.4856429,21.7301984 C12.1836204,21.8979887 11.8163796,21.8979887 11.5143571,21.7301984 L3.51435707,17.2857539 C3.19689188,17.1093844 3,16.7747638 3,16.4115967 L3,7.64987309 C3,7.25468437 3.23273352,6.89656288 3.59386153,6.73606154 L11.5938615,3.18050598 C11.8524269,3.06558805 12.1475731,3.06558805 12.4061385,3.18050598 L20.4061385,6.73606154 Z"
                              fill="#D65DB1"
                              opacity="0.3"
                            />
                            <polygon
                              fill="#FF9671"
                              points="14.9671522 4.22441676 7.5999999 8.31727912 7.5999999 12.9056825 9.5999999 13.9056825 9.5999999 9.49408582 17.25507 5.24126912"
                            />
                          </g>
                        </svg>
                      </span>
                    </span>
                    <span className="d-flex flex-column">
                      <span className="fs-6 fw-bold text-gray-800">
                        Склады Маркетплейса
                      </span>
                      <span className="fs-7 fw-semibold text-muted">
                        Информация о складах
                      </span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 mb-3">
                <div className="menu-item p-0 m-0">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" className="menu-link">
                    <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                      <span className="svg-icon svg-icon-warning svg-icon-2x">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            strokeWidth="1"
                            fill="none"
                            fillRule="evenodd"
                          >
                            <polygon points="0 0 24 0 24 24 0 24" />
                            <path
                              d="M3.52270623,14.028695 C2.82576459,13.3275941 2.82576459,12.19529 3.52270623,11.4941891 L11.6127629,3.54050571 C11.9489429,3.20999263 12.401513,3.0247814 12.8729533,3.0247814 L19.3274172,3.0247814 C20.3201611,3.0247814 21.124939,3.82955935 21.124939,4.82230326 L21.124939,11.2583059 C21.124939,11.7406659 20.9310733,12.2027862 20.5869271,12.5407722 L12.5103155,20.4728108 C12.1731575,20.8103442 11.7156477,21 11.2385688,21 C10.7614899,21 10.3039801,20.8103442 9.9668221,20.4728108 L3.52270623,14.028695 Z M16.9307214,9.01652093 C17.9234653,9.01652093 18.7282432,8.21174298 18.7282432,7.21899907 C18.7282432,6.22625516 17.9234653,5.42147721 16.9307214,5.42147721 C15.9379775,5.42147721 15.1331995,6.22625516 15.1331995,7.21899907 C15.1331995,8.21174298 15.9379775,9.01652093 16.9307214,9.01652093 Z"
                              fill="currentColor"
                              fillRule="nonzero"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                    </span>
                    <span className="d-flex flex-column">
                      <span className="fs-6 fw-bold text-gray-800">Товары</span>
                      <span className="fs-7 fw-semibold text-muted">
                        Информация о товарах
                      </span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 mb-3">
                <div className="menu-item p-0 m-0">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" className="menu-link">
                    <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                      <span className="svg-icon svg-icon-danger svg-icon-1">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z"
                            fill="currentColor"
                          />
                          <path
                            opacity="0.3"
                            d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z"
                            fill="currentColor"
                          />
                          <path
                            opacity="0.3"
                            d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </span>
                    <span className="d-flex flex-column">
                      <span className="fs-6 fw-bold text-gray-800">Заказы</span>
                      <span className="fs-7 fw-semibold text-muted">
                        Информация о заказах
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
