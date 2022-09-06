import React, { memo, useEffect, useRef } from "react";
import { changesClasses } from "../../../../assets/const";
import "./SelectTableAction.css";

export const SelectTableAction = memo(({ isOpen, handleClick }) => {
  const linkRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (linkRef.current && !linkRef.current.contains(event.target)) {
        handleClick();
      }
    };

    isOpen && document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [isOpen, handleClick]);

  return (
    <td style={{ position: "relative" }} className="text-end px-5">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        ref={linkRef}
        onClick={handleClick}
        href="#"
        className={
          isOpen
            ? changesClasses.showTableLink
            : "btn btn-sm btn-light btn-active-light-primary"
        }
        data-kt-menu-trigger="click"
        data-kt-menu-placement="bottom-end"
      >
        Actions
        <span className="svg-icon svg-icon-5 m-0">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </a>

      <div
        style={{ position: "absolute", top: "4.2rem", left: "7.3rem" }}
        className={
          isOpen
            ? changesClasses.showTableMenu
            : "menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4 position-action-table-menu"
        }
        data-kt-menu="true"
      >
        <div className="menu-item px-3">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="menu-link px-3">
            Edit
          </a>
        </div>
        <div className="menu-item px-3">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            href="#"
            className="menu-link px-3"
            data-kt-ecommerce-product-filter="delete_row"
          >
            Delete
          </a>
        </div>
      </div>
    </td>
  );
});
