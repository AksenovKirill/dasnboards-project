import React, { useState } from "react";
import { SelectTableAction } from "../../UI/Selects/SelectTableAction/SelectTableAction";
import { InputTableCheckbox } from "../../UI/Inputs/InputTableCheckbox/InputTableCheckbox";
import { TDItem } from "./TDItem";

export const TableItem = ({ ...props }) => {
  const { id, name, priority, typeW, handleClick, isCheck, status } = props;
  const [isOpen, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <tr>
      <TDItem>
        <div className="form-check form-check-sm form-check-custom form-check-solid">
          <InputTableCheckbox
            key={id}
            id={id}
            name="checkbox"
            handleClick={handleClick}
            isChecked={isCheck.includes(id)}
          />
        </div>
      </TDItem>

      <TDItem className="text-center pe-0">
        {/*<div className="d-flex align-items-center">*/}
        {/*<a*/}
        {/*  href="https://via.placeholder.com/50"*/}
        {/*  className="symbol symbol-50px"*/}
        {/*>*/}
        {/*  <span className="symbol-label" />*/}
        {/*</a>*/}
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" className="text-gray-800 text-hover-primary fs-5 fw-bold">
          {name}
        </a>
      </TDItem>
      <TDItem className="text-center pe-5">
        <span className="fw-bold">{id}</span>
      </TDItem>
      <TDItem className="text-center pe-0">
        <span className="fw-bold">{typeW}</span>
      </TDItem>
      <TDItem className="text-center pe-0">
        <span className="fw-bold">{priority}</span>
      </TDItem>
      <TDItem className="text-center pe-0" data-order="Inactive">
        <div className="badge badge-light-danger">{status}</div>
      </TDItem>
      <SelectTableAction isOpen={isOpen} handleClick={handleClickOpen} />
    </tr>
  );
};
