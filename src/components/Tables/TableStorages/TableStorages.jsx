import React, { memo, useEffect } from "react";
import { useSelector } from "react-redux";
import { SelectTableCategory } from "../../UI/Selects/SelectTableCategory/SelectTableCategory";
import { LinkPrimary } from "../../UI/Links/LinkPrimary";
import { TableContent } from "../Table/TableContent";
import { SelectTableItemLimit } from "../../UI/Selects/SelectTableItemLimit/SelectTableItemLimit";
import { Pagination } from "../../UI/Pagination/Pagination";
import { InputTableSearch } from "../../UI/Inputs/InputTableSearch/InputTableSearch";
import { useItemsFetching } from "../../../hooks/useItemsFetching";
import { TableWrapper } from "../Table/TableWrapper";
import { headerTableStoragesConfig } from "../../../assets/configurators";

export const TableStorages = memo(() => {
  const { fetchItems, data, isLoading } = useItemsFetching();
  const newItem = useSelector((state) => state.app.items.storages);
  const items = [...data, ...newItem];

  useEffect(() => {
    fetchItems();
    // eslint-disable-next-line
  }, []);

  return (
    <TableWrapper>
      <div className="card-header align-items-center py-5 px-1 gap-2 gap-md-5">
        <div className="card-title" />
        {!isLoading && (
          <>
            <InputTableSearch />
            <div className="card-toolbar flex-row-fluid justify-content-end gap-5 px-10">
              <SelectTableCategory />
              <LinkPrimary to={"/add"}>Добавить склад</LinkPrimary>
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
              configTable={headerTableStoragesConfig}
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
    </TableWrapper>
  );
});
