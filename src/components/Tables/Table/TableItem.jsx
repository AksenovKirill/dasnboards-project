import React, { memo, useCallback, useState } from "react";
import { SelectTableAction } from "../../UI/Selects/SelectTableAction/SelectTableAction";
import { InputTableCheckbox } from "../../UI/Inputs/InputTableCheckbox/InputTableCheckbox";
import { TDItem } from "./TDItem";

export const TableItem = memo(({ handleClick, isCheck, data }) => {
  const [isOpen, setOpen] = useState(false);
  const handleClickOpen = useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen]);

  return (
    <tr>
      <TDItem>
        <div className="form-check form-check-sm form-check-custom form-check-solid">
          <InputTableCheckbox
            key={data[0]}
            id={data[0]}
            name="checkbox"
            // handleClick={handleClick}
            // isChecked={isCheck.includes(id)}
          />
        </div>
      </TDItem>
      {data.map((elem, index) => (
        <TDItem key={index}>
          <span className="fw-bold">{elem}</span>
        </TDItem>
      ))}
      {/*<div className="d-flex align-items-center">*/}
      {/*<a*/}
      {/*  href="https://via.placeholder.com/50"*/}
      {/*  className="symbol symbol-50px"*/}
      {/*>*/}
      {/*  <span className="symbol-label" />*/}
      {/*</a>*/}
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <SelectTableAction isOpen={isOpen} handleClick={handleClickOpen} />
    </tr>
  );
});
