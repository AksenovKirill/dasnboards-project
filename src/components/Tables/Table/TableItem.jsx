import React, { memo, useCallback, useState } from "react";
import { SelectTableAction } from "../../UI/Selects/SelectTableAction/SelectTableAction";
import { InputTableCheckbox } from "../../UI/Inputs/InputTableCheckbox/InputTableCheckbox";
import { TDItem } from "./TDItem";

export const TableItem = memo(({ ...props }) => {
  const {
    id,
    name,
    priority,
    type,
    moysklad_id,
    virtual_moysklad_id,
    handleClick,
    isCheck,
  } = props;
  const [isOpen, setOpen] = useState(false);

  const handleClickOpen = useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen]);

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

      <TDItem className="text-center pe-5">
        <span className="fw-bold">{id}</span>
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

      <TDItem className="text-center pe-0">
        <span className="fw-bold">{type}</span>
      </TDItem>

      <TDItem className="text-center pe-0">
        <span className="fw-bold">{priority}</span>
      </TDItem>

      <TDItem className="text-center pe-0" data-order="Inactive">
        <span className="fw-bold">
          {virtual_moysklad_id?.slice(0, 12).concat("...")}
        </span>
      </TDItem>

      <TDItem className="text-center pe-0" data-order="Inactive">
        <span className="fw-bold">
          {moysklad_id?.slice(0, 10).concat("...")}
        </span>
      </TDItem>

      <SelectTableAction isOpen={isOpen} handleClick={handleClickOpen} />
    </tr>
  );
});
