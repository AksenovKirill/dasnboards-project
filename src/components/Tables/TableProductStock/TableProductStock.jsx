import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useItemsFetching from "../../../hooks/useItemsFetching";
import { InputTableSearch } from "../../UI/Inputs/InputTableSearch/InputTableSearch";
import { SelectTableCategory } from "../../UI/Selects/SelectTableCategory/SelectTableCategory";
import { LinkPrimary } from "../../UI/Links/LinkPrimary";
import { TableContent } from "../Table/TableContent";
import { SelectTableItemLimit } from "../../UI/Selects/SelectTableItemLimit/SelectTableItemLimit";
import { Pagination } from "../../UI/Pagination/Pagination";
import { headerTableMarketConfig } from "../../../assets/configurators";

export const TableProductStock = () => {
  const { fetchItems, data, isLoading } = useItemsFetching();
  const newItem = useSelector((state) => state.app.items.products);
  const items = [...data, ...newItem];

  useEffect(() => {
    fetchItems();
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ marginTop: "9.5rem" }} className="card card-flush">
      <div className="card-header align-items-center py-5 px-1 gap-2 gap-md-5">
        <div className="card-title" />
        {!isLoading && (
          <>
            <InputTableSearch />
            <div className="card-toolbar flex-row-fluid justify-content-end gap-5 px-10">
              <SelectTableCategory />
              <LinkPrimary to={"/addproduct"}>Добавить товар</LinkPrimary>
            </div>
          </>
        )}
      </div>
      <div className="card-body pt-0">
        <div className="dataTables_wrapper dt-bootstrap4 no-footer">
          <div className="table-responsive">
            <TableContent
              data={items}
              isLoading={isLoading}
              configTable={headerTableMarketConfig}
            />
          </div>
          {!isLoading && (
            <div className="row">
              <SelectTableItemLimit />
              <Pagination />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
