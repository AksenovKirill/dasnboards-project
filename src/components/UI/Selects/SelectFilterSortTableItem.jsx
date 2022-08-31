import React from "react";
import { SeparatorGray } from "../Separators/SeparatorGray";
import { sortList } from "../../../assets/const";
import classes from "./SelectFilterSortTableItem.module.css";

export const SelectFilterSortTableItem = ({ open, value, handleChange }) => {
  const handleClickSelect = (type) => {
    handleChange(type);
  };

  return (
    <>
      {open && (
        <>
          <div className="px-7 py-5">
            <div className="fs-5 text-dark fw-bold">Filter Options</div>
          </div>
          <SeparatorGray length={200} />
          <ul className={classes.filterList}>
            {sortList.map((object, index) => (
              <>
                <SeparatorGray length={200} />
                <div key={object.name} className={classes.filterItemBox}>
                  <svg
                    key={index}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.3"
                      d="M10 18C9.7 18 9.5 17.9 9.3 17.7L2.3 10.7C1.9 10.3 1.9 9.7 2.3 9.3C2.7 8.9 3.29999 8.9 3.69999 9.3L10.7 16.3C11.1 16.7 11.1 17.3 10.7 17.7C10.5 17.9 10.3 18 10 18Z"
                      fill="currentColor"
                    />
                    <path
                      d="M10 18C9.7 18 9.5 17.9 9.3 17.7C8.9 17.3 8.9 16.7 9.3 16.3L20.3 5.3C20.7 4.9 21.3 4.9 21.7 5.3C22.1 5.7 22.1 6.30002 21.7 6.70002L10.7 17.7C10.5 17.9 10.3 18 10 18Z"
                      fill="currentColor"
                    />
                  </svg>
                  <li
                    key={object.sortProperty}
                    onClick={() => handleClickSelect(object)}
                    className={
                      value.sortProperty === object.sortProperty
                        ? `active fs-5`
                        : `fs-5 ${classes.filterItem}`
                    }
                  >
                    {object.name}
                  </li>
                </div>
              </>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
