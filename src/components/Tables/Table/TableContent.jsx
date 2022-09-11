import React, { memo, useState, useEffect, useCallback } from "react";
import { TableItem } from "./TableItem";
import { LoaderTable } from "../../../pages/Loaders/LoaderTable";
import { InputTableCheckbox } from "../../UI/Inputs/InputTableCheckbox/InputTableCheckbox";
import { TableHeader } from "../Table/TableHeader";
import { getTableTitles } from "../../../assets/helpers";

export const TableContent = memo(({ data, isLoading }) => {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(data);
  }, [data]);

  const handleSelectAll = () => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(list.map((element) => element.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = (event) => {
    const { id, checked } = event.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };

  if (!isLoading) {
    return <LoaderTable />;
  }
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

          {data?.headers?.map(({ title, className }, index) => (
            <TableHeader key={index} title={title} className={className} />
          ))}
        </tr>
      </thead>
      <tbody className="fw-semibold text-gray-600">
        {data?.items?.map((data, index) => (
          <TableItem key={index} handleClick={handleClick} isCheck={isCheck} data={data} />
        ))}
      </tbody>
    </table>
  );
});
