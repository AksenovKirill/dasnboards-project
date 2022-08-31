import React, { memo } from "react";
import "./MyStorage.css";
import { Link } from "react-router-dom";

export const MyStorage = memo(() => {
  return (
    <div className="menu-item menu-lg-down-accordion me-0 me-lg-2 dropdown-content-navigation px-6">
      <span className="menu-link py-4">
        <span className="menu-title">Мой склад</span>
      </span>
      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown p-0 w-lg-600px dropdown-content-navigation-content">
        <div className="menu-state-bg menu-extended">
          <div className="col-lg-12 mb-3 py-3 px-3">
            <div className="row">
              <div className="col-lg-6 mb-3">
                <div className="menu-item">
                  <Link to="/storages" className="menu-link">
                    <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                      <span className="svg-icon svg-icon-primary svg-icon-2x">
                        <svg
                          xmlns="http://www.w3.org/1999/xlink"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g stroke="none" strokeWidth="1" fill="none">
                            <rect x="0" y="0" width="24" height="24" />
                            <path
                              d="M4,9.67471899 L10.880262,13.6470401 C10.9543486,13.689814 11.0320333,13.7207107 11.1111111,13.740321 L11.1111111,21.4444444 L4.49070127,17.526473 C4.18655139,17.3464765 4,17.0193034 4,16.6658832 L4,9.67471899 Z M20,9.56911707 L20,16.6658832 C20,17.0193034 19.8134486,17.3464765 19.5092987,17.526473 L12.8888889,21.4444444 L12.8888889,13.6728275 C12.9050191,13.6647696 12.9210067,13.6561758 12.9368301,13.6470401 L20,9.56911707 Z"
                              fill="#009ef7"
                            />
                            <path
                              d="M4.21611835,7.74669402 C4.30015839,7.64056877 4.40623188,7.55087574 4.5299008,7.48500698 L11.5299008,3.75665466 C11.8237589,3.60013944 12.1762411,3.60013944 12.4700992,3.75665466 L19.4700992,7.48500698 C19.5654307,7.53578262 19.6503066,7.60071528 19.7226939,7.67641889 L12.0479413,12.1074394 C11.9974761,12.1365754 11.9509488,12.1699127 11.9085461,12.2067543 C11.8661433,12.1699127 11.819616,12.1365754 11.7691509,12.1074394 L4.21611835,7.74669402 Z"
                              fill="#009ef7"
                              opacity="20"
                            />
                          </g>
                        </svg>
                      </span>
                    </span>
                    <span className="d-flex flex-column">
                      <span className="fs-6 fw-bold text-gray-800">Склады</span>
                      <span className="fs-7 fw-semibold text-muted">Информация о складах</span>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 mb-3">
                <div className="menu-item p-0 m-0">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <Link to="/products" className="menu-link">
                    <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                      <span className="svg-icon svg-icon-danger svg-icon-2x">
                        <svg
                          xmlns="http://www.w3.org/1999/xlink"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <rect x="0" y="0" width="24" height="24" />
                            <polygon
                              fill="currentColor"
                              opacity="0.3"
                              points="6 3 18 3 20 6.5 4 6.5"
                            />
                            <path
                              d="M6,5 L18,5 C19.1045695,5 20,5.8954305 20,7 L20,19 C20,20.1045695 19.1045695,21 18,21 L6,21 C4.8954305,21 4,20.1045695 4,19 L4,7 C4,5.8954305 4.8954305,5 6,5 Z M9,9 C8.44771525,9 8,9.44771525 8,10 C8,10.5522847 8.44771525,11 9,11 L15,11 C15.5522847,11 16,10.5522847 16,10 C16,9.44771525 15.5522847,9 15,9 L9,9 Z"
                              fill="currentColor"
                            />
                          </g>
                        </svg>
                      </span>
                    </span>
                    <span className="d-flex flex-column">
                      <span className="fs-6 fw-bold text-gray-800">Товары и остатки</span>
                      <span className="fs-7 fw-semibold text-muted">
                        Информация о наличии товаров
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
