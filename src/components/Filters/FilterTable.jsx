import React, { useState } from "react";
import { ButtonFilterTable } from "../UI/Buttons/ButtonFilterTable/ButtonFilterTable";
import { changesClasses } from "../../assets/const";
import { SelectFilterSortTableItem } from "../UI/Selects/SelectFilterSortTableItem";

export const FilterTable = () => {
  const [open, setOpen] = useState(false);

  const [sortType, setSortType] = useState({
    name: "все товары",
    sortProperty: "",
  });

  const handleChangeSort = (type) => {
    setSortType(type);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div style={{ position: "relative" }} className="d-flex align-items-center py-3 py-md-1">
      <div onClick={handleClick} className="me-4">
        <ButtonFilterTable open={open} handleClick={handleClick} />
        <div
          style={{
            position: "absolute",
            top: "5rem",
            right: "1rem",
          }}
          className={
            open
              ? changesClasses.showFilterTableMenu
              : "menu menu-sub menu-sub-dropdown w-250px w-md-300px"
          }
          data-kt-menu="true"
          id="kt_menu_62cfb97944d7f"
        >
          <SelectFilterSortTableItem open={open} value={sortType} handleChange={handleChangeSort} />
        </div>
      </div>
    </div>
  );
};
