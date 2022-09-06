import React, { memo } from "react";
import { useSelector } from "react-redux";
import { GoBackButtonRoute } from "../../UI/Buttons/GoBackButtonRoute/GoBackButtonRoute";
import { FilterTable } from "../../Filters/FilterTable";
import { ButtonPrimary } from "../../UI/Buttons/ButtonPrimary";
import "./Toolbar.css";

export const Toolbar = memo(() => {
  const isAddItem = useSelector((state) => state.app?.isAddItem);

  return (
    <div className="toolbar-1 py-5 py-lg-10">
      <div className="container-xxl d-flex flex-stack flex-wrap">
        <div className="page-title d-flex flex-column me-3">
          <div className="page-title d-flex flex-column me-3">
            <h1 className="d-flex text-white fw-bold px-10 my-1 fs-3">
              Мой склад
            </h1>
            <ul className="breadcrumb breadcrumb-separatorless fw-semibold px-10 fs-7 my-1">
              <li className="breadcrumb-item text-white opacity-75">
                Мой склад
              </li>
              <li className="breadcrumb-item text-white">
                <span className="bullet bg-white opacity-75 w-5px h-2px" />
              </li>
              <li className="breadcrumb-item">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                  href="#"
                  className="text-white text-decoration-none opacity-75"
                >
                  Склады
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex align-items-center py-3 px-5 py-md-1">
          <GoBackButtonRoute>Назад</GoBackButtonRoute>
          {isAddItem ? <ButtonPrimary>Создать</ButtonPrimary> : <FilterTable />}
        </div>
      </div>
    </div>
  );
});
