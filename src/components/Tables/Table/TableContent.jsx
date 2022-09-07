import React, { memo, useState, useEffect, useCallback } from "react";
import { TableItem } from "./TableItem";
import { LoaderTable } from "../../../pages/Loaders/LoaderTable";
import { InputTableCheckbox } from "../../UI/Inputs/InputTableCheckbox/InputTableCheckbox";
import { TableHeader } from "../Table/TableHeader";

export const TableContent = memo(({ data, isLoading, configTable }) => {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(data);
  }, [data]);

  const handleSelectAll = useCallback(() => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(list.map((element) => element.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  }, [isCheckAll, list]);

  const handleClick = useCallback(
    (event) => {
      const { id, checked } = event.target;
      setIsCheck([...isCheck, id]);
      if (!checked) {
        setIsCheck(isCheck.filter((item) => item !== id));
      }
    },
    [isCheck]
  );

  // if (!isLoading) {
  //   return <LoaderTable />;
  // }

  return (
    <table className="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer">
      <thead>
        <tr className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
          <th className="w-10px pe-2">
            <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
              <InputTableCheckbox
                name="selectAll"
                id="selectAll"
                isCheck={isCheckAll}
                handleClick={handleSelectAll}
              />
            </div>
          </th>
          {configTable.map(({ title, className }) => (
            <TableHeader key={title} title={title} className={className} />
          ))}
        </tr>
      </thead>
      <tbody className="fw-semibold text-gray-600">
        {data.map((property, index) => (
          <TableItem
            handleClick={handleClick}
            isCheck={isCheck}
            key={index}
            {...property}
          />
        ))}
      </tbody>
    </table>
  );
});
